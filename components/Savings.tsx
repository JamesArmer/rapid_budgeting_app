import { Stack, Flex } from "@chakra-ui/react";
import { savingsInput } from "../constants/InputNames";
import { savingsPlaceholder } from "../constants/PlaceholderNumbers";
import GreyInput from "./inputs/GreyInput";

export default function Savings({
  savings,
  onBlur,
}: {
  savings: number;
  onBlur: Function;
}) {
  return (
    <>
      <div className="pl-3">
        <h3 className="font-bold text-2xl text-blue-main">Savings</h3>
      </div>
      <div className="flex">
        <Stack direction="row" spacing={6}>
          <Flex className="flex-1">
            <GreyInput
              name={savingsInput}
              title="General"
              titleSize="lg"
              defaultValue={
                savings > 0 ? new Intl.NumberFormat().format(savings) : ""
              }
              placeholderText={new Intl.NumberFormat().format(
                savingsPlaceholder
              )}
              htmlSize={6}
              onBlur={onBlur}
            />
          </Flex>
        </Stack>
      </div>
    </>
  );
}
