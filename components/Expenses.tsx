import { Stack, Flex } from "@chakra-ui/react";
import { billsInput, rentInput, subscrInput } from "../constants/InputNames";
import {
  billsPlaceholder,
  rentPlaceholder,
  subscrPlaceholder,
} from "../constants/PlaceholderNumbers";
import GreyInput from "./inputs/GreyInput";

export default function Expenses({
  rent,
  bills,
  subscr,
  onBlur,
}: {
  rent: number;
  bills: number;
  subscr: number;
  onBlur: Function;
}) {
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
              defaultValue={
                rent > 0 ? new Intl.NumberFormat().format(rent) : ""
              }
              placeholderText={new Intl.NumberFormat().format(rentPlaceholder)}
              htmlSize={6}
              onBlur={onBlur}
            />
          </Flex>
          <Flex className="flex-1">
            <GreyInput
              name={billsInput}
              title="Bills"
              titleSize="lg"
              defaultValue={
                bills > 0 ? new Intl.NumberFormat().format(bills) : ""
              }
              placeholderText={new Intl.NumberFormat().format(billsPlaceholder)}
              htmlSize={6}
              onBlur={onBlur}
            />
          </Flex>
          <Flex className="flex-1">
            <GreyInput
              name={subscrInput}
              title="Subscriptions"
              titleSize="lg"
              defaultValue={
                subscr > 0 ? new Intl.NumberFormat().format(subscr) : ""
              }
              placeholderText={new Intl.NumberFormat().format(
                subscrPlaceholder
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
