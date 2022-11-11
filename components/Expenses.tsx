import { Stack, Flex } from "@chakra-ui/react";
import { billsInput, rentInput, subscrInput } from "../constants/InputNames";
import GreyInput from "./inputs/GreyInput";

export default function Expenses({ onBlur }: { onBlur: Function }) {
  let rent = 900;
  let bills = 60;
  let subscr = 54;

  return (
    <>
      <div className="pl-3">
        <h3 className="font-bold text-2xl text-blue-main">Monthly Expenses</h3>
      </div>
      <div className="flex">
        <Stack direction="row" spacing={3}>
          <Flex className="flex-1">
            <GreyInput
              name={rentInput}
              title="Rent"
              titleSize="lg"
              placeholderText={rent.toString()}
              htmlSize={6}
              onBlur={onBlur}
            />
          </Flex>
          <Flex className="flex-1">
            <GreyInput
              name={billsInput}
              title="Bills"
              titleSize="lg"
              placeholderText={bills.toString()}
              htmlSize={6}
              onBlur={onBlur}
            />
          </Flex>
          <Flex className="flex-1">
            <GreyInput
              name={subscrInput}
              title="Subscriptions"
              titleSize="lg"
              placeholderText={subscr.toString()}
              htmlSize={6}
              onBlur={onBlur}
            />
          </Flex>
        </Stack>
      </div>
    </>
  );
}
