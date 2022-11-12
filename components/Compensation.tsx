import { Stack, Flex } from "@chakra-ui/react";
import GreyInput from "./inputs/GreyInput";
import GreyInputNonMonetary from "./inputs/GreyInputNonMonetary";
import YellowInput from "./inputs/YellowInput";
import {
  grossIncomeYearlyInput,
  penContrInput,
  totalCompInput,
} from "../constants/InputNames";
import {
  penContrPlaceholder,
  totalCompPlaceholder,
} from "../constants/PlaceholderNumbers";
import { useEffect } from "react";

export default function Compensation({
  totalComp,
  grossIncomeYearly,
  onBlur,
}: {
  totalComp: number;
  grossIncomeYearly: number;
  onBlur: Function;
}) {
  return (
    <div className="flex">
      <Stack direction="row" spacing={6}>
        <Flex className="flex-1">
          <GreyInput
            name={totalCompInput}
            title="Total Compensation"
            titleSize="lg"
            defaultValue={
              totalComp > 0 ? new Intl.NumberFormat().format(totalComp) : ""
            }
            placeholderText={new Intl.NumberFormat().format(
              totalCompPlaceholder
            )}
            onBlur={onBlur}
          />
        </Flex>
        <Flex className="flex-1">
          <GreyInputNonMonetary
            name={penContrInput}
            title="Pension Contribution"
            titleSize="lg"
            placeholderText={penContrPlaceholder + "%"}
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
