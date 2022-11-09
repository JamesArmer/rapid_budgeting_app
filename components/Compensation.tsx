import { Stack, Flex } from "@chakra-ui/react";
import GreyInput from "./inputs/GreyInput";
import YellowInput from "./inputs/YellowInput";
import { useState, useEffect } from "react";

export default function Compensation() {
  const totalCompInput = "TotalCompensationInput";
  const penContrInput = "PensionContributionInput";
  const netIncomeYearlyInput = "NetIncomeYearlyInput";

  let totalComp = 32000;
  let penContr = 2;
  let netIncome = 31360;

  const [netIncomeYearly, setNetIncomeYearly] = useState(netIncome);

  function CalculateNetIncomeYearly() {
    totalComp = Number(sessionStorage.getItem(totalCompInput));
    penContr = Number(sessionStorage.getItem(penContrInput));

    var netIncome = totalComp - totalComp * (penContr / 100);
    setNetIncomeYearly(netIncome);
  }

  return (
    <div className="flex">
      <Stack direction="row" spacing={6}>
        <Flex className="flex-1">
          <GreyInput
            name={totalCompInput}
            title="Total Compensation"
            titleSize="lg"
            placeholderText={new Intl.NumberFormat().format(totalComp)}
            onBlur={CalculateNetIncomeYearly}
          />
        </Flex>
        <Flex className="flex-1">
          <GreyInput
            name={penContrInput}
            title="Pension Contribution"
            titleSize="lg"
            placeholderText={penContr + "%"}
            onBlur={CalculateNetIncomeYearly}
          />
        </Flex>
        <Flex className="flex-1">
          <YellowInput
            name={netIncomeYearlyInput}
            title="Net Income (Yearly)"
            titleSize="lg"
            placeholderText={new Intl.NumberFormat().format(netIncomeYearly)}
          />
        </Flex>
      </Stack>
    </div>
  );
}
