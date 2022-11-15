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
  netIncomeMonthlyInput,
  netIncomeYearlyInput,
  penContrInput,
  remainingDailyInput,
  remainingMonthlyInput,
  remainingWeeklyInput,
  rentInput,
  savingsInput,
  subscrInput,
  totalCompInput,
  weeksInMonthInput,
  weeksInMonthPlaceholder,
} from "../constants/InputNames";
import DonutChart from "../components/charts/DonutChart";
import { chartDataPlaceholder } from "../constants/PlaceholderNumbers";

const Home: NextPage = () => {
  const [totalComp, setTotalComp] = useState(-1);
  const [penContr, setPenContr] = useState(-1);
  const [grossIncomeYearly, setGrossIncomeYearly] = useState(31360);

  const [incomeTax, setIncomeTax] = useState(3758);
  const [nationalInsurance, setNationalInsurance] = useState(2490);
  const [studentLoan, setStudentLoan] = useState(365.85);

  const [netIncomeYearly, setNetIncomeYearly] = useState(24746);
  const [netIncomeMonthly, setNetIncomeMonthly] = useState(2062.21);

  const [rent, setRent] = useState(-1);
  const [bills, setBills] = useState(-1);
  const [subscr, setSubscr] = useState(-1);

  const [savings, setSavings] = useState(-1);

  const [weeksInMonth, setWeeksInMonth] = useState(-1);

  const [remainingMonthly, setRemainingMonthly] = useState(848.21);
  const [remainingWeekly, setRemainingWeekly] = useState(212.05);
  const [remainingDaily, setRemainingDaily] = useState(30.29);

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

    var netIncomeYearly = CalculateTax(grossIncomeYearly);
    var netIncomeMonthly = netIncomeYearly / 12;

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

    setGrossIncomeYearly(grossIncomeYearly);
    setNetIncomeYearly(netIncomeYearly);
    setNetIncomeMonthly(netIncomeMonthly);
    setRemainingMonthly(remainingMonthly);
    setRemainingWeekly(remainingWeekly);
    setRemainingDaily(remainingDaily);

    setChartData([
      incomeTax / 12,
      nationalInsurance / 12,
      studentLoan / 12,
      penContrCalc / 12,
      rent,
      bills,
      subscr,
      savings,
      remainingMonthly,
    ]);
  }

  function CalculateTax(grossIncomeYearly: number): number {
    var incomeTax;

    if (grossIncomeYearly > 52070) {
      incomeTax =
        (grossIncomeYearly - 52070) * 0.4 +
        (grossIncomeYearly - 12570 - (grossIncomeYearly - 52070)) * 0.2;
    } else {
      incomeTax = (grossIncomeYearly - 12570) * 0.2;
    }

    var nationalInsurance = (grossIncomeYearly - 12570) * 0.1325;
    var studentLoan = (grossIncomeYearly - 27295) * 0.09;

    var netIncomeYearly =
      grossIncomeYearly - incomeTax - nationalInsurance - studentLoan;

    setIncomeTax(incomeTax);
    setNationalInsurance(nationalInsurance);
    setStudentLoan(studentLoan);

    return netIncomeYearly;
  }

  function LoadLocalStorage() {
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

    setTotalComp(totalComp);
    setPenContr(penContr);
    if (grossIncomeYearly > 0) {
      setGrossIncomeYearly(grossIncomeYearly);
    }
    if (netIncomeYearly > 0) {
      setNetIncomeYearly(netIncomeYearly);
    }
    if (netIncomeMonthly > 0) {
      setNetIncomeMonthly(netIncomeMonthly);
    }
    if (rent > 0) {
      setRent(rent);
    }
    if (bills > 0) {
      setBills(bills);
    }
    if (subscr > 0) {
      setSubscr(subscr);
    }
    if (savings > 0) {
      setSavings(savings);
    }
    if (weeksInMonth > 0) {
      setWeeksInMonth(weeksInMonth);
    }
  }

  useEffect(() => {
    LoadLocalStorage();
    setChartData(chartDataPlaceholder);
  }, []);

  return (
    <Layout>
      <div id="titles" className="py-4">
        <Title />
      </div>
      <div id="parentDiv" className="flex w-full">
        <div id="leftDiv" className="flex-1 px-4">
          <div id="compDiv" className="pt-1">
            <Compensation
              totalComp={totalComp}
              penContr={penContr}
              grossIncomeYearly={grossIncomeYearly}
              onBlur={Calculate}
            />
          </div>
          <div id="incomeDiv" className="pt-1">
            <Income
              netIncomeYearly={netIncomeYearly}
              netIncomeMonthly={netIncomeMonthly}
            />
          </div>
          <div id="expensesDiv" className="flex w-full py-1">
            <div id="monthlyDiv" className="px-4">
              <Expenses onBlur={Calculate} />
            </div>
            <div id="savingsDiv" className="px-4">
              <Savings onBlur={Calculate} />
            </div>
          </div>
          <div id="bottomLineDiv" className="pt-1">
            <BottomLine
              remainingMonthly={remainingMonthly}
              remainingWeekly={remainingWeekly}
              remainingDaily={remainingDaily}
              onBlur={Calculate}
            />
          </div>
        </div>
        <div id="rightDiv" className="flex-1 px-4">
          <div id="taxDiv">
            <Tax
              incomeTax={incomeTax}
              nationalInsurance={nationalInsurance}
              studentLoan={studentLoan}
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
