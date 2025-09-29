export type UserSettings = {
  user: string;
  walletAddress?: string;
  notificationEmail?: string;
  language?: string;
};

export const settingsStore: Record<string, UserSettings> = {};


