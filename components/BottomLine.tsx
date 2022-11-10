import { Stack, Flex } from "@chakra-ui/react";
import { weeksInMonthInput } from "../constants/InputNames";
import GreenInput from "./inputs/GreenInput";
import GreyInput from "./inputs/GreyInput";

export default function BottomLine({
  remainingMonthly,
  remainingWeekly,
  remainingDaily,
  onBlur,
}: {
  remainingMonthly: number;
  remainingWeekly: number;
  remainingDaily: number;
  onBlur: Function;
}) {
  return (
    <>
      <div className="pl-3">
        <h3 className="font-bold text-2xl text-green-main">The Bottom Line</h3>
      </div>
      <div className="flex">
        <Stack direction="row" spacing={4}>
          <Flex className="flex-1">
            <GreenInput
              title="Remaining Monthly"
              titleSize="xl"
              placeholderText={new Intl.NumberFormat("en-GB", {
                maximumFractionDigits: 2,
              }).format(remainingMonthly)}
            />
          </Flex>
          <Flex className="flex-1">
            <GreenInput
              title="Remaining Weekly"
              titleSize="xl"
              placeholderText={new Intl.NumberFormat("en-GB", {
                maximumFractionDigits: 2,
              }).format(remainingWeekly)}
            />
          </Flex>
          <Flex className="flex-1 self-end">
            <GreyInput
              name={weeksInMonthInput}
              title="Weeks / Month"
              titleSize="lg"
              defaultValue="4"
              placeholderText="4"
              htmlSize={5}
              onBlur={onBlur}
            />
          </Flex>
        </Stack>
      </div>
      <div className="flex py-4">
        <Stack direction="row" spacing={6}>
          <GreenInput
            title="Remaining Daily"
            titleSize="lg"
            placeholderText={new Intl.NumberFormat("en-GB", {
              maximumFractionDigits: 2,
            }).format(remainingDaily)}
          />
        </Stack>
      </div>
    </>
  );
}
