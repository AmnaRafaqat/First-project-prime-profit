// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? '/api' : 'http://localhost:6000/api');

// Types
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: number;
}

export interface AuthResponse {
  user: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  duration: string;
  profit: string;
  features: string[];
  popular: boolean;
}

export interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'investment' | 'earning';
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  date: string;
  description: string;
}

export interface DashboardData {
  totalBalance: number;
  activeInvestments: number;
  totalEarnings: number;
  recentTransactions: Transaction[];
}

// API Helper Functions
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  // Add auth token if available
  const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

// Auth API
export const authAPI = {
  async register(data: RegisterRequest): Promise<AuthResponse> {
    return apiRequest<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async login(data: LoginRequest): Promise<AuthResponse> {
    return apiRequest<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async logout(): Promise<{ ok: boolean }> {
    return apiRequest<{ ok: boolean }>('/auth/logout', {
      method: 'POST',
    });
  },
};

// Plans API
export const plansAPI = {
  async getAllPlans(): Promise<Plan[]> {
    return apiRequest<Plan[]>('/plans');
  },

  async getDefaultPlan(): Promise<Plan> {
    return apiRequest<Plan>('/plan');
  },
};

// Dashboard API
export const dashboardAPI = {
  async getDashboard(): Promise<DashboardData> {
    return apiRequest<DashboardData>('/dashboard');
  },
};

// Transactions API
export const transactionsAPI = {
  async getAllTransactions(): Promise<Transaction[]> {
    return apiRequest<Transaction[]>('/transactions');
  },
};

// Active Plans API
export const activeAPI = {
  async getActivePlans(): Promise<any[]> {
    return apiRequest<any[]>('/active');
  },

  async withdrawActive(data: any): Promise<any> {
    return apiRequest<any>('/active/withdraw', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

// Utility Functions
export const setAuthToken = (token: string, remember: boolean = false) => {
  if (remember) {
    localStorage.setItem('auth_token', token);
  } else {
    sessionStorage.setItem('auth_token', token);
  }
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
};

export const clearAuthToken = () => {
  localStorage.removeItem('auth_token');
  sessionStorage.removeItem('auth_token');
};

export const isAuthenticated = (): boolean => {
  return !!getAuthToken();
};
