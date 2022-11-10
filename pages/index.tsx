import type { NextPage } from "next";
import { useState } from "react";
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

const Home: NextPage = () => {
  const [grossIncomeYearly, setGrossIncomeYearly] = useState(31360);
  const [remainingMonthly, setRemainingMonthly] = useState(848.21);
  const [remainingWeekly, setRemainingWeekly] = useState(212.05);
  const [remainingDaily, setRemainingDaily] = useState(30.29);

  function Calculate() {
    var totalComp = Number(sessionStorage.getItem(totalCompInput));
    var penContr = Number(sessionStorage.getItem(penContrInput));
    var grossIncomeYearly = Number(
      sessionStorage.getItem(grossIncomeYearlyInput)
    );
    var rent = Number(sessionStorage.getItem(rentInput));
    var bills = Number(sessionStorage.getItem(billsInput));
    var subscr = Number(sessionStorage.getItem(subscrInput));
    var savings = Number(sessionStorage.getItem(savingsInput));
    var weeksInMonth = Number(sessionStorage.getItem(weeksInMonthInput));

    if (weeksInMonth < 1) {
      weeksInMonth = 4;
    }

    var grossIncomeYearly = totalComp - totalComp * (penContr / 100);

    var sumExpenses = rent + bills + subscr + savings;
    var remainingMonthly = grossIncomeYearly / 12 - sumExpenses;
    var remainingWeekly = remainingMonthly / weeksInMonth;
    var remainingDaily = remainingWeekly / 7;

    console.log(grossIncomeYearly);
    console.log(sumExpenses);

    sessionStorage.setItem(
      grossIncomeYearlyInput,
      grossIncomeYearly.toString()
    );
    sessionStorage.setItem(remainingMonthlyInput, remainingMonthly.toString());
    sessionStorage.setItem(remainingWeeklyInput, remainingWeekly.toString());
    sessionStorage.setItem(remainingDailyInput, remainingDaily.toString());

    setGrossIncomeYearly(grossIncomeYearly);
    setRemainingMonthly(remainingMonthly);
    setRemainingWeekly(remainingWeekly);
    setRemainingDaily(remainingDaily);
  }

  return (
    <Layout>
      <div className="py-4">
        <Title />
      </div>
      <div className="flex w-full">
        <div className="flex-1 px-4">
          <Compensation
            grossIncomeYearly={grossIncomeYearly}
            onBlur={Calculate}
          />
        </div>
        <div className="flex-1 px-4">
          <Tax />
        </div>
      </div>
      <div className="flex w-full pt-2">
        <div className="flex-1 px-4">
          <Income />
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex-1 px-4">
          <Expenses onBlur={Calculate} />
        </div>
        <div className="flex-1 px-4">
          <Savings onBlur={Calculate} />
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex-1 px-4">
          <BottomLine
            remainingMonthly={remainingMonthly}
            remainingWeekly={remainingWeekly}
            remainingDaily={remainingDaily}
            onBlur={Calculate}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
