import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { Adsense } from "@ctrl/react-adsense";
import Layout from "../components/Layout";
import Compensation from "../components/Compensation";
import Tax from "../components/Tax";
import Income from "../components/Income";
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
import { PageData } from "../types/globalTypes";
import { CalculateTax } from "../functions/helperFunctions";
import MainTitle from "../components/titles/MainTitle";
import TaxTitle from "../components/titles/TaxTitle";
import ChartTitle from "../components/titles/ChartTitle";
import MonthlyExpensesTitle from "../components/titles/MonthlyExpensesTitle";
import BottomLineTitle from "../components/titles/BottomLineTitle";
import MonthlyExpenses from "../components/MonthlyExpenses";
import HelpButton from "../components/buttons/HelpButton";

const Home: NextPage = () => {
  const [pageData, setPageData] = useState<PageData>(pageDataPlaceholder);

  const [chartData, setChartData] = useState([0]);

  function Calculate() {
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
      <div id="topDiv" className="flex py-2">
        <div id="topContentDiv" className="flex">
          <div id="mainTitleDiv">
            <MainTitle />
          </div>
          <div id="buttonDiv" className="flex align-middle pl-6">
            <HelpButton />
          </div>
        </div>
      </div>
      <div id="parentDiv" className="sm:flex w-full">
        <div id="inputsDiv" className="flex-1 sm:px-4 sm:w-2/3">
          <form id="parentForm">
            <div id="compDiv" className="py-2">
              <Compensation
                totalComp={pageData.totalComp}
                penContr={pageData.penContr}
                onBlur={Calculate}
                onClick={Reset}
              />
            </div>

            <div id="incomeDiv" className="py-2">
              <Income
                grossIncomeYearly={pageData.grossIncomeYearly}
                netIncomeYearly={pageData.netIncomeYearly}
                netIncomeMonthly={pageData.netIncomeMonthly}
              />
            </div>

            <div id="taxTitleDive" className="pt-2">
              <TaxTitle />
            </div>
            <div id="taxDiv" className="py-2">
              <Tax
                incomeTax={pageData.incomeTax}
                nationalInsurance={pageData.nationalInsurance}
                studentLoan={pageData.studentLoan}
              />
            </div>

            <div id="monthlyExpensesTitleDiv" className="pt-2">
              <MonthlyExpensesTitle />
            </div>
            <div id="monthlyExpensesDiv" className="flex w-full py-2">
              <MonthlyExpenses
                rent={pageData.rent}
                bills={pageData.bills}
                subscr={pageData.subscr}
                savings={pageData.savings}
                onBlur={Calculate}
              />
            </div>

            <div id="monthlyExpensesTitleDiv" className="pt-2">
              <BottomLineTitle />
            </div>
            <div id="bottomLineDiv" className="py-2">
              <BottomLine
                remainingMonthly={pageData.remainingMonthly}
                remainingWeekly={pageData.remainingWeekly}
                remainingDaily={pageData.remainingDaily}
                weeksInMonth={pageData.weeksInMonth}
                onBlur={Calculate}
              />
            </div>
          </form>
        </div>

        <div id="chartMainDiv" className="flex-1">
          <ChartTitle />
          <div id="chartDiv" className="m-auto py-4 w-7/8 sm:w-2/3">
            <DonutChart chartData={chartData} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
