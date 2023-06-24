import { Stack, Flex, useMediaQuery } from "@chakra-ui/react";
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
  const [isMediumScreen] = useMediaQuery("(min-width: 640px)");

  return (
    <div className="sm:flex">
      <div className="flex-1">
        <Stack direction="row" spacing={0}>
          <Flex className="flex-1">
            <GreenInput
              title="Remaining Monthly"
              titleSize="sm"
              placeholderText={new Intl.NumberFormat("en-GB", {
                maximumFractionDigits: 2,
              }).format(remainingMonthly)}
              htmlSize={20}
            />
          </Flex>
          <Flex className="flex-1">
            <GreenInput
              title="Remaining Weekly"
              titleSize="sm"
              placeholderText={new Intl.NumberFormat("en-GB", {
                maximumFractionDigits: 2,
              }).format(remainingWeekly)}
              htmlSize={20}
            />
          </Flex>
        </Stack>
      </div>
      <div className="flex-1 pt-2 sm:pt-0">
        <Stack direction="row" spacing={0}>
          <Flex className="flex-1">
            <GreenInput
              title="Remaining Daily"
              titleSize="sm"
              placeholderText={new Intl.NumberFormat("en-GB", {
                maximumFractionDigits: 2,
              }).format(remainingDaily)}
              htmlSize={20}
            />
          </Flex>
          <Flex className="flex-1">
            <GreyInputNonMonetary
              name={weeksInMonthInput}
              title="Weeks / Month"
              titleSize="sm"
              defaultValue={new Intl.NumberFormat().format(
                weeksInMonthPlaceholder
              )}
              placeholderText={new Intl.NumberFormat().format(weeksInMonth)}
              htmlSize={isMediumScreen ? 10 : 15}
              onBlur={onBlur}
            />
          </Flex>
        </Stack>
      </div>
    </div>
  );
}
