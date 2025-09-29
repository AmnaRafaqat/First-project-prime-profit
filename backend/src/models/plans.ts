export type InvestmentPlan = {
  id: string;
  name: string;
  invest: number;
  reward: number;
  daily: number;
  threeHourProfit: number;
  twentyFourHourProfit: number;
  totalProfit: number;
  minWithdraw: number;
  durationDays: number;
};

export const plans: InvestmentPlan[] = [
  {
    id: "plan1",
    name: "Plan 50",
    invest: 35,
    reward: 15,
    daily: 25,
    threeHourProfit: 3.125,
    twentyFourHourProfit: 25,
    totalProfit: 125,
    minWithdraw: 60,
    durationDays: 5,
  },
  {
    id: "plan2",
    name: "Plan 75",
    invest: 60,
    reward: 15,
    daily: 25,
    threeHourProfit: 3.125,
    twentyFourHourProfit: 25,
    totalProfit: 200,
    minWithdraw: 60,
    durationDays: 8,
  },
  {
    id: "plan3",
    name: "Plan 100",
    invest: 100,
    reward: 15,
    daily: 25,
    threeHourProfit: 3.125,
    twentyFourHourProfit: 25,
    totalProfit: 250,
    minWithdraw: 60,
    durationDays: 10,
  },
];


