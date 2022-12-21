import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Compensation from "../components/Compensation";
import Tax from "../components/Tax";
import Title from "../components/Title";
import Income from "../components/Income";
import Expenses from "../components/Expenses";
import Savings from "../components/Savings";
import BottomLine from "../components/BottomLine";
import {
  billsInput,
  grossIncomeYearlyInput,
  incomeTaxInput,
  nationalInsuranceInput,
  netIncomeMonthlyInput,
  netIncomeYearlyInput,
  penContrInput,
  remainingDailyInput,
  remainingMonthlyInput,
  remainingWeeklyInput,
  rentInput,
  savingsInput,
  studentLoanInput,
  subscrInput,
  totalCompInput,
  weeksInMonthInput,
  weeksInMonthPlaceholder,
} from "../constants/InputNames";
import DonutChart from "../components/charts/DonutChart";
import {
  pageDataPlaceholder,
  chartDataPlaceholder,
} from "../constants/PlaceholderNumbers";

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

const Home: NextPage = () => {
  const [pageData, setPageData] = useState<PageData>(pageDataPlaceholder);

  const [chartData, setChartData] = useState([0]);

  function Calculate() {
    console.log("Function Calculate");
    var totalComp = Number(localStorage.getItem(totalCompInput));
    var penContr = Number(localStorage.getItem(penContrInput));
    var grossIncomeYearly = Number(
      localStorage.getItem(grossIncomeYearlyInput)
    );
    var netIncomeYearly = Number(localStorage.getItem(netIncomeYearlyInput));
    var netIncomeMonthly = Number(localStorage.getItem(netIncomeMonthlyInput));
    var rent = Number(localStorage.getItem(rentInput));
    var bills = Number(localStorage.getItem(billsInput));
    var subscr = Number(localStorage.getItem(subscrInput));
    var savings = Number(localStorage.getItem(savingsInput));
    var weeksInMonth = Number(localStorage.getItem(weeksInMonthInput));

    if (weeksInMonth < 1) {
      weeksInMonth = weeksInMonthPlaceholder;
    }

    var penContrCalc = totalComp * (penContr / 100);
    var grossIncomeYearly = totalComp - penContrCalc;

    var taxCalulations = CalculateTax(grossIncomeYearly);
    var netIncomeYearly = taxCalulations.netIncomeYearly;
    var netIncomeMonthly = taxCalulations.netIncomeYearly / 12;

    var sumExpenses = rent + bills + subscr + savings;
    var remainingMonthly = netIncomeYearly / 12 - sumExpenses;
    var remainingWeekly = remainingMonthly / weeksInMonth;
    var remainingDaily = remainingWeekly / 7;

    localStorage.setItem(grossIncomeYearlyInput, grossIncomeYearly.toString());
    localStorage.setItem(netIncomeYearlyInput, netIncomeYearly.toString());
    localStorage.setItem(netIncomeMonthlyInput, netIncomeMonthly.toString());
    localStorage.setItem(remainingMonthlyInput, remainingMonthly.toString());
    localStorage.setItem(remainingWeeklyInput, remainingWeekly.toString());
    localStorage.setItem(remainingDailyInput, remainingDaily.toString());
    localStorage.setItem(weeksInMonthInput, weeksInMonth.toString());

    setPageData({
      totalComp: totalComp,
      penContr: penContr,
      grossIncomeYearly: grossIncomeYearly,
      incomeTax: taxCalulations.incomeTax,
      nationalInsurance: taxCalulations.nationalInsurance,
      studentLoan: taxCalulations.studentLoan,
      netIncomeYearly: netIncomeYearly,
      netIncomeMonthly: netIncomeMonthly,
      rent: rent,
      bills: bills,
      subscr: subscr,
      savings: savings,
      remainingMonthly: remainingMonthly,
      remainingWeekly: remainingWeekly,
      remainingDaily: remainingDaily,
      weeksInMonth: weeksInMonth,
    });

    setChartData([
      taxCalulations.incomeTax / 12,
      taxCalulations.nationalInsurance / 12,
      taxCalulations.studentLoan / 12,
      penContrCalc / 12,
      rent,
      bills,
      subscr,
      savings,
      remainingMonthly,
    ]);
  }

  function CalculateTax(grossIncomeYearly: number): TaxCalculations {
    var incomeTax;
    var nationalInsurance;
    var studentLoan;

    if (grossIncomeYearly > 52070) {
      incomeTax =
        (grossIncomeYearly - 52070) * 0.4 +
        (grossIncomeYearly - 12570 - (grossIncomeYearly - 52070)) * 0.2;
    } else if (grossIncomeYearly > 12570) {
      incomeTax = (grossIncomeYearly - 12570) * 0.2;
    } else {
      incomeTax = 0;
    }

    if (grossIncomeYearly > 12570) {
      nationalInsurance = (grossIncomeYearly - 12570) * 0.1325;
    } else {
      nationalInsurance = 0;
    }

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

  function LoadLocalStorage(): boolean {
    var _totalComp = Number(localStorage.getItem(totalCompInput));
    var _penContr = Number(localStorage.getItem(penContrInput));
    var _grossIncomeYearly = Number(
      localStorage.getItem(grossIncomeYearlyInput)
    );
    var _incomeTax = Number(localStorage.getItem(incomeTaxInput));
    var _nationalInsurance = Number(
      localStorage.getItem(nationalInsuranceInput)
    );
    var _studentLoan = Number(localStorage.getItem(studentLoanInput));
    var _netIncomeYearly = Number(localStorage.getItem(netIncomeYearlyInput));
    var _netIncomeMonthly = Number(localStorage.getItem(netIncomeMonthlyInput));
    var _rent = Number(localStorage.getItem(rentInput));
    var _bills = Number(localStorage.getItem(billsInput));
    var _subscr = Number(localStorage.getItem(subscrInput));
    var _savings = Number(localStorage.getItem(savingsInput));
    var _remainingMonthly = Number(localStorage.getItem(remainingMonthlyInput));
    var _remainingWeekly = Number(localStorage.getItem(remainingWeeklyInput));
    var _remainingDaily = Number(localStorage.getItem(remainingDailyInput));
    var _weeksInMonth = Number(localStorage.getItem(weeksInMonthInput));

    var dataExists = false;
    if (_totalComp > 0) {
      dataExists = true;
    }

    if (dataExists) {
      setPageData({
        totalComp: _totalComp,
        penContr: _penContr,
        grossIncomeYearly: _grossIncomeYearly,
        incomeTax: _incomeTax,
        nationalInsurance: _nationalInsurance,
        studentLoan: _studentLoan,
        netIncomeYearly: _netIncomeYearly,
        netIncomeMonthly: _netIncomeMonthly,
        rent: _rent,
        bills: _bills,
        subscr: _subscr,
        savings: _savings,
        remainingMonthly: _remainingMonthly,
        remainingWeekly: _remainingWeekly,
        remainingDaily: _remainingDaily,
        weeksInMonth: _weeksInMonth,
      });
    }

    var penContrCalc = _totalComp * (_penContr / 100);

    setChartData([
      _incomeTax / 12,
      _nationalInsurance / 12,
      _studentLoan / 12,
      penContrCalc / 12,
      _rent,
      _bills,
      _subscr,
      _savings,
      _remainingMonthly,
    ]);

    return dataExists;
  }

  function Reset() {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }

    setPageData(pageDataPlaceholder);
    setChartData(chartDataPlaceholder);

    (document.getElementById("parentForm") as HTMLFormElement)?.reset();
  }

  function pageLoad() {
    var dataExists = LoadLocalStorage();
    if (!dataExists) {
      setChartData(chartDataPlaceholder);
    }
  }

  useEffect(() => {
    pageLoad();
  }, []);

  return (
    <Layout>
      <div id="titles" className="py-2">
        <Title />
      </div>
      <div id="parentDiv" className="flex w-full">
        <div id="leftDiv" className="flex-1 px-4">
          <form id="parentForm">
            <div id="compDiv" className="pt-1">
              <Compensation
                totalComp={pageData.totalComp}
                penContr={pageData.penContr}
                grossIncomeYearly={pageData.grossIncomeYearly}
                onBlur={Calculate}
              />
            </div>
            <div id="incomeDiv" className="pt-1">
              <Income
                netIncomeYearly={pageData.netIncomeYearly}
                netIncomeMonthly={pageData.netIncomeMonthly}
              />
            </div>
            <div id="expensesDiv" className="flex w-full py-1">
              <div id="monthlyDiv" className="px-4">
                <Expenses
                  rent={pageData.rent}
                  bills={pageData.bills}
                  subscr={pageData.subscr}
                  onBlur={Calculate}
                />
              </div>
              <div id="savingsDiv" className="px-4">
                <Savings savings={pageData.savings} onBlur={Calculate} />
              </div>
            </div>
            <div id="bottomLineDiv" className="pt-1">
              <BottomLine
                remainingMonthly={pageData.remainingMonthly}
                remainingWeekly={pageData.remainingWeekly}
                remainingDaily={pageData.remainingDaily}
                weeksInMonth={pageData.weeksInMonth}
                onBlur={Calculate}
                onClick={Reset}
              />
            </div>
          </form>
        </div>
        <div id="rightDiv" className="flex-1 px-4">
          <div id="taxDiv">
            <Tax
              incomeTax={pageData.incomeTax}
              nationalInsurance={pageData.nationalInsurance}
              studentLoan={pageData.studentLoan}
            />
          </div>
          <div id="chartDiv" className="m-auto w-3/5 pt-2">
            <DonutChart chartData={chartData} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
