import { Stack, Flex } from "@chakra-ui/react";
import {
  grossIncomeYearlyInput,
  netIncomeMonthlyInput,
  netIncomeYearlyInput,
} from "../constants/InputNames";
import YellowInput from "./inputs/YellowInput";

export default function Income({
  grossIncomeYearly,
  netIncomeMonthly,
  netIncomeYearly,
}: {
  grossIncomeYearly: number;
  netIncomeMonthly: number;
  netIncomeYearly: number;
}) {
  return (
    <>
      <div className="flex">
        <Stack direction="row" spacing={0}>
          <Flex className="flex-1">
            <YellowInput
              name={grossIncomeYearlyInput}
              title="Taxable Income"
              titleSize="sm"
              placeholderText={new Intl.NumberFormat("en-GB", {
                maximumFractionDigits: 2,
              }).format(grossIncomeYearly)}
            />
          </Flex>
          <Flex className="flex-1">
            <YellowInput
              name={netIncomeYearlyInput}
              title="Net Income (Yearly)"
              titleSize="sm"
              placeholderText={new Intl.NumberFormat("en-GB", {
                maximumFractionDigits: 2,
              }).format(netIncomeYearly)}
            />
          </Flex>
          <Flex className="flex-1">
            <YellowInput
              name={netIncomeMonthlyInput}
              title="Net Income (Monthly)"
              titleSize="sm"
              placeholderText={new Intl.NumberFormat("en-GB", {
                maximumFractionDigits: 2,
              }).format(netIncomeMonthly)}
            />
          </Flex>
        </Stack>
      </div>
    </>
  );
}
