import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import plansRouter from "./routes/plans.routes.js";
import profitRouter from "./routes/profit.routes.js";
import investmentsRouter from "./routes/investments.routes.js";
import withdrawRouter from "./routes/withdraw.routes.js";
import authRouter from "./routes/auth.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";
import depositsRouter from "./routes/deposits.routes.js";
import activeRouter from "./routes/active.routes.js";
import transactionsRouter from "./routes/transactions.routes.js";
import teamRouter from "./routes/team.routes.js";
import settingsRouter from "./routes/settings.routes.js";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN ?? "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api", plansRouter);
app.use("/api", profitRouter);
app.use("/api", investmentsRouter);
app.use("/api", withdrawRouter);
app.use("/api", authRouter);
app.use("/api", dashboardRouter);
app.use("/api", depositsRouter);
app.use("/api", activeRouter);
app.use("/api", transactionsRouter);
app.use("/api", teamRouter);
app.use("/api", settingsRouter);

// In production, serve the frontend build from ../frontend/dist
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDist = path.resolve(__dirname, "../../frontend/dist");
app.use(express.static(clientDist));
app.get("*", (req, res) => {
  if (req.path.startsWith("/api")) return res.status(404).end();
  res.sendFile(path.join(clientDist, "index.html"));
});

const port = Number(process.env.PORT ?? 6000);

async function start() {
  try {
    const mongoUri = process.env.MONGODB_URI ?? "mongodb://localhost:27017/earningapp";
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();


