import {
  incomeTaxInput,
  nationalInsuranceInput,
  studentLoanInput,
} from "../constants/InputNames";
import { TaxCalculations } from "../types/globalTypes";

export function CalculateTax(grossIncomeYearly: number): TaxCalculations {
  var incomeTax;
  var nationalInsurance;
  var studentLoan;

  // Income Tax
  if (grossIncomeYearly > 52070) {
    incomeTax =
      (grossIncomeYearly - 52070) * 0.4 +
      (grossIncomeYearly - 12570 - (grossIncomeYearly - 52070)) * 0.2;
  } else if (grossIncomeYearly > 12570) {
    incomeTax = (grossIncomeYearly - 12570) * 0.2;
  } else {
    incomeTax = 0;
  }

  // National Insurance
  if (grossIncomeYearly > 12576) {
    nationalInsurance = (grossIncomeYearly - 12576) * 0.12;
  } else {
    nationalInsurance = 0;
  }

  // Student Loan Plan 2
  if (grossIncomeYearly > 27295) {
    studentLoan = (grossIncomeYearly - 27295) * 0.09;
  } else {
    studentLoan = 0;
  }

  var netIncomeYearly =
    grossIncomeYearly - incomeTax - nationalInsurance - studentLoan;

  localStorage.setItem(incomeTaxInput, incomeTax.toString());
  localStorage.setItem(nationalInsuranceInput, nationalInsurance.toString());
  localStorage.setItem(studentLoanInput, studentLoan.toString());

  var taxCalulations: TaxCalculations = {
    incomeTax: incomeTax,
    nationalInsurance: nationalInsurance,
    studentLoan: studentLoan,
    netIncomeYearly: netIncomeYearly,
  };

  return taxCalulations;
}
