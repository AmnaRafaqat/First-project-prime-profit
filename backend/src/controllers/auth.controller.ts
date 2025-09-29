import { Request, Response } from "express";
import { z } from "zod";
import crypto from "node:crypto";

type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: number;
};

const users: User[] = [];

function hashPassword(plain: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(plain, salt, 10000, 64, "sha512").toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(plain: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  const verify = crypto.pbkdf2Sync(plain, salt, 10000, 64, "sha512").toString("hex");
  return crypto.timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(verify, "hex"));
}

const registerSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export function registerUser(req: Request, res: Response) {
  const body = req.is("application/x-www-form-urlencoded") ? req.body : req.body;
  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const { fullName, email, password } = parsed.data;

  const exists = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (exists) return res.status(409).json({ error: "Email already registered" });

  const user: User = {
    id: crypto.randomUUID(),
    name: fullName,
    email,
    passwordHash: hashPassword(password),
    createdAt: Date.now(),
  };
  users.push(user);
  const { passwordHash, ...safeUser } = user;
  res.status(201).json({ user: safeUser });
}

export function loginUser(req: Request, res: Response) {
  const body = req.is("application/x-www-form-urlencoded") ? req.body : req.body;
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const { email, password } = parsed.data;

  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  if (!verifyPassword(password, user.passwordHash)) return res.status(401).json({ error: "Invalid credentials" });

  const { passwordHash, ...safeUser } = user;
  res.json({ user: safeUser });
}

export function logoutUser(_req: Request, res: Response) {
  res.json({ ok: true });
}

export function renderLoginPage(_req: Request, res: Response) {
  res.type("html").send(`<!doctype html>
<html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Login</title></head><body>
  <h1>Login</h1>
  <form method="post" action="/api/auth/login">
    <label>Email <input type="email" name="email" required /></label><br/>
    <label>Password <input type="password" name="password" required /></label><br/>
    <button type="submit">Login</button>
  </form>
  <p>Don't have an account? <a href="/api/auth/register">Create one</a></p>
</body></html>`);
}

export function renderRegisterPage(_req: Request, res: Response) {
  res.type("html").send(`<!doctype html>
<html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Register</title></head><body>
  <h1>Create account</h1>
  <form method="post" action="/api/auth/register">
    <label>Full name <input type="text" name="fullName" required /></label><br/>
    <label>Email <input type="email" name="email" required /></label><br/>
    <label>Password <input type="password" name="password" minlength="6" required /></label><br/>
    <label>Confirm password <input type="password" name="confirmPassword" minlength="6" required /></label><br/>
    <button type="submit">Create account</button>
  </form>
  <p>Already have an account? <a href="/api/auth/login">Login</a></p>
</body></html>`);
}

export function renderLogoutPage(_req: Request, res: Response) {
  res.type("html").send(`<!doctype html>
<html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Logout</title></head><body>
  <h1>Logout</h1>
  <form method="post" action="/api/auth/logout">
    <button type="submit">Logout</button>
  </form>
  <p><a href="/api/auth/login">Back to login</a></p>
</body></html>`);
}


