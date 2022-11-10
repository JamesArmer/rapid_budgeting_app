import { Stack, Flex } from "@chakra-ui/react";
import GreyInput from "./inputs/GreyInput";
import YellowInput from "./inputs/YellowInput";
import {
  grossIncomeYearlyInput,
  penContrInput,
  totalCompInput,
} from "../constants/InputNames";

export default function Compensation({
  grossIncomeYearly,
  onBlur,
}: {
  grossIncomeYearly: number;
  onBlur: Function;
}) {
  let totalComp = 32000;
  let penContr = 2;

  return (
    <div className="flex">
      <Stack direction="row" spacing={6}>
        <Flex className="flex-1">
          <GreyInput
            name={totalCompInput}
            title="Total Compensation"
            titleSize="lg"
            placeholderText={new Intl.NumberFormat().format(totalComp)}
            onBlur={onBlur}
          />
        </Flex>
        <Flex className="flex-1">
          <GreyInput
            name={penContrInput}
            title="Pension Contribution"
            titleSize="lg"
            placeholderText={penContr + "%"}
            onBlur={onBlur}
          />
        </Flex>
        <Flex className="flex-1">
          <YellowInput
            name={grossIncomeYearlyInput}
            title="Gross Income (Yearly)"
            titleSize="lg"
            placeholderText={new Intl.NumberFormat().format(grossIncomeYearly)}
          />
        </Flex>
      </Stack>
    </div>
  );
}
