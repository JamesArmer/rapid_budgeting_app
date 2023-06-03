import { Stack, Flex } from "@chakra-ui/react";
import {
  weeksInMonthInput,
  weeksInMonthPlaceholder,
} from "../constants/InputNames";
import GreenInput from "./inputs/GreenInput";
import GreyInputNonMonetary from "./inputs/GreyInputNonMonetary";

export default function BottomLine({
  remainingMonthly,
  remainingWeekly,
  remainingDaily,
  weeksInMonth,
  onBlur,
}: {
  remainingMonthly: number;
  remainingWeekly: number;
  remainingDaily: number;
  weeksInMonth: number;
  onBlur: Function;
}) {
  return (
    <>
      <div className="pl-3">
        <h3 className="font-bold text-2xl text-green-main">The Bottom Line</h3>
      </div>
      <div className="flex">
        <Stack direction="row" spacing={0}>
          <Flex className="flex-1">
            <GreenInput
              title="Remaining Monthly"
              titleSize="sm"
              placeholderText={new Intl.NumberFormat("en-GB", {
                maximumFractionDigits: 2,
              }).format(remainingMonthly)}
            />
          </Flex>
          <Flex className="flex-1">
            <GreenInput
              title="Remaining Weekly"
              titleSize="sm"
              placeholderText={new Intl.NumberFormat("en-GB", {
                maximumFractionDigits: 2,
              }).format(remainingWeekly)}
            />
          </Flex>
          <Flex className="flex-1">
            <GreenInput
              title="Remaining Daily"
              titleSize="sm"
              placeholderText={new Intl.NumberFormat("en-GB", {
                maximumFractionDigits: 2,
              }).format(remainingDaily)}
            />
          </Flex>
          <Flex className="flex-1 self-end">
            <GreyInputNonMonetary
              name={weeksInMonthInput}
              title="Weeks / Month"
              titleSize="sm"
              defaultValue={new Intl.NumberFormat().format(
                weeksInMonthPlaceholder
              )}
              placeholderText={new Intl.NumberFormat().format(weeksInMonth)}
              htmlSize={5}
              onBlur={onBlur}
            />
          </Flex>
        </Stack>
      </div>
    </>
  );
}
