import { Stack, Flex } from "@chakra-ui/react";
import { savingsInput } from "../constants/InputNames";
import GreyInput from "./inputs/GreyInput";

export default function Savings({ onBlur }: { onBlur: Function }) {
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
              placeholderText="200"
              htmlSize={6}
              onBlur={onBlur}
            />
          </Flex>
        </Stack>
      </div>
    </>
  );
}
