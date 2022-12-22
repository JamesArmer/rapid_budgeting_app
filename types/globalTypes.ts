export interface PageData {
  totalComp: number;
  penContr: number;
  grossIncomeYearly: number;
  incomeTax: number;
  nationalInsurance: number;
  studentLoan: number;
  netIncomeYearly: number;
  netIncomeMonthly: number;
  rent: number;
  bills: number;
  subscr: number;
  savings: number;
  remainingMonthly: number;
  remainingWeekly: number;
  remainingDaily: number;
  weeksInMonth: number;
}

export interface TaxCalculations {
  incomeTax: number;
  nationalInsurance: number;
  studentLoan: number;
  netIncomeYearly: number;
}
