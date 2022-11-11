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

const Home: NextPage = () => {
  const [grossIncomeYearly, setGrossIncomeYearly] = useState(31360);

  const [incomeTax, setIncomeTax] = useState(3758);
  const [nationalInsurance, setNationalInsurance] = useState(2490);
  const [studentLoan, setStudentLoan] = useState(365.85);

  const [netIncomeYearly, setNetIncomeYearly] = useState(24746);
  const [netIncomeMonthly, setNetIncomeMonthly] = useState(2062.21);

  const [remainingMonthly, setRemainingMonthly] = useState(848.21);
  const [remainingWeekly, setRemainingWeekly] = useState(212.05);
  const [remainingDaily, setRemainingDaily] = useState(30.29);

  function Calculate() {
    var totalComp = Number(sessionStorage.getItem(totalCompInput));
    var penContr = Number(sessionStorage.getItem(penContrInput));
    var grossIncomeYearly = Number(
      sessionStorage.getItem(grossIncomeYearlyInput)
    );
    var netIncomeYearly = Number(sessionStorage.getItem(netIncomeYearlyInput));
    var netIncomeMonthly = Number(
      sessionStorage.getItem(netIncomeMonthlyInput)
    );
    var rent = Number(sessionStorage.getItem(rentInput));
    var bills = Number(sessionStorage.getItem(billsInput));
    var subscr = Number(sessionStorage.getItem(subscrInput));
    var savings = Number(sessionStorage.getItem(savingsInput));
    var weeksInMonth = Number(sessionStorage.getItem(weeksInMonthInput));

    if (weeksInMonth < 1) {
      weeksInMonth = weeksInMonthPlaceholder;
    }

    var grossIncomeYearly = totalComp - totalComp * (penContr / 100);

    var netIncomeYearly = CalculateTax(grossIncomeYearly);
    var netIncomeMonthly = netIncomeYearly / 12;

    var sumExpenses = rent + bills + subscr + savings;
    var remainingMonthly = netIncomeYearly / 12 - sumExpenses;
    var remainingWeekly = remainingMonthly / weeksInMonth;
    var remainingDaily = remainingWeekly / 7;

    sessionStorage.setItem(
      grossIncomeYearlyInput,
      grossIncomeYearly.toString()
    );
    sessionStorage.setItem(netIncomeYearlyInput, netIncomeYearly.toString());
    sessionStorage.setItem(netIncomeMonthlyInput, netIncomeMonthly.toString());
    sessionStorage.setItem(remainingMonthlyInput, remainingMonthly.toString());
    sessionStorage.setItem(remainingWeeklyInput, remainingWeekly.toString());
    sessionStorage.setItem(remainingDailyInput, remainingDaily.toString());

    setGrossIncomeYearly(grossIncomeYearly);
    setNetIncomeYearly(netIncomeYearly);
    setNetIncomeMonthly(netIncomeMonthly);
    setRemainingMonthly(remainingMonthly);
    setRemainingWeekly(remainingWeekly);
    setRemainingDaily(remainingDaily);
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
          <Tax
            incomeTax={incomeTax}
            nationalInsurance={nationalInsurance}
            studentLoan={studentLoan}
          />
        </div>
      </div>
      <div className="flex w-full pt-2">
        <div className="flex-1 px-4">
          <Income
            netIncomeYearly={netIncomeYearly}
            netIncomeMonthly={netIncomeMonthly}
          />
        </div>
      </div>
      <div className="flex w-2/3">
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
