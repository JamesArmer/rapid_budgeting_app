import { Stack, Flex } from "@chakra-ui/react";
import {
  netIncomeMonthlyInput,
  netIncomeYearlyInput,
} from "../constants/InputNames";
import YellowInput from "./inputs/YellowInput";

export default function Income({
  netIncomeMonthly,
  netIncomeYearly,
}: {
  netIncomeMonthly: number;
  netIncomeYearly: number;
}) {
  return (
    <>
      <div className="flex">
        <Stack direction="row" spacing={6}>
          <Flex className="flex-1">
            <YellowInput
              name={netIncomeYearlyInput}
              title="Net Income (Yearly)"
              titleSize="lg"
              placeholderText={new Intl.NumberFormat("en-GB", {
                maximumFractionDigits: 2,
              }).format(netIncomeYearly)}
            />
          </Flex>
          <Flex className="flex-1">
            <YellowInput
              name={netIncomeMonthlyInput}
              title="Net Income (Monthly)"
              titleSize="lg"
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
