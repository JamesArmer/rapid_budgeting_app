import { PageData } from "../types/globalTypes";

//BottomLine.tsx
export const remainingMonthlyPlaceholder = 848.21;
export const remainingWeeklyPlaceholder = 212.05;
export const remainingDailyPlaceholder = 30.29;

//Compensation.tsx
export const totalCompPlaceholder = 32000;
export const penContrPlaceholder = 2;
export const penContrCalcPlaceholder = 640;
export const grossIncomePlaceholder = 31360;

//Expenses.tsx
export const rentPlaceholder = 900;
export const billsPlaceholder = 60;
export const subscrPlaceholder = 54;

//Income.tsx
export const netIncomeYearlyPlaceholder = 24746;
export const netIncomeMonthlyPlaceholder = 2062.21;

//Savings.tsx
export const savingsPlaceholder = 200;

//Tax.tsx
export const incomeTaxPlaceholder = 3758;
export const nationalInsurancePlaceholder = 2490;
export const studentLoanPlaceholder = 365.85;

//index.tsx initial state
export const pageDataPlaceholder: PageData = {
  totalComp: -1,
  penContr: -1,
  grossIncomeYearly: grossIncomePlaceholder,
  incomeTax: incomeTaxPlaceholder,
  nationalInsurance: nationalInsurancePlaceholder,
  studentLoan: studentLoanPlaceholder,
  netIncomeYearly: netIncomeYearlyPlaceholder,
  netIncomeMonthly: netIncomeMonthlyPlaceholder,
  rent: -1,
  bills: -1,
  subscr: -1,
  savings: -1,
  remainingMonthly: remainingMonthlyPlaceholder,
  remainingWeekly: remainingWeeklyPlaceholder,
  remainingDaily: remainingDailyPlaceholder,
  weeksInMonth: -1,
};

//DonutChart.tsx
export const chartDataPlaceholder = [
  incomeTaxPlaceholder / 12,
  nationalInsurancePlaceholder / 12,
  studentLoanPlaceholder / 12,
  penContrCalcPlaceholder / 12,
  rentPlaceholder,
  billsPlaceholder,
  subscrPlaceholder,
  savingsPlaceholder,
  remainingMonthlyPlaceholder,
];
