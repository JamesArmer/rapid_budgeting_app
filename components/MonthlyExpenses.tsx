import { Stack, Flex, useMediaQuery } from "@chakra-ui/react";
import {
  billsInput,
  rentInput,
  savingsInput,
  subscrInput,
} from "../constants/InputNames";
import {
  billsPlaceholder,
  rentPlaceholder,
  savingsPlaceholder,
  subscrPlaceholder,
} from "../constants/PlaceholderNumbers";
import GreyInput from "./inputs/GreyInput";

export default function Expenses({
  rent,
  bills,
  subscr,
  savings,
  onBlur,
}: {
  rent: number;
  bills: number;
  subscr: number;
  savings: number;
  onBlur: Function;
}) {
  const [isMediumScreen] = useMediaQuery("(min-width: 640px)");

  return (
    <div className="sm:flex">
      <div className="flex-1">
        <Stack direction="row" spacing={0}>
          <Flex className="flex-1">
            <GreyInput
              name={rentInput}
              title="Rent"
              titleSize="sm"
              defaultValue={
                rent > 0 ? new Intl.NumberFormat().format(rent) : ""
              }
              placeholderText={new Intl.NumberFormat().format(rentPlaceholder)}
              htmlSize={isMediumScreen ? 8.5 : 15}
              onBlur={onBlur}
            />
          </Flex>
          <Flex className="flex-1">
            <GreyInput
              name={billsInput}
              title="Bills"
              titleSize="sm"
              defaultValue={
                bills > 0 ? new Intl.NumberFormat().format(bills) : ""
              }
              placeholderText={new Intl.NumberFormat().format(billsPlaceholder)}
              htmlSize={isMediumScreen ? 8.5 : 15}
              onBlur={onBlur}
            />
          </Flex>
        </Stack>
      </div>
      <div className="flex-1 pt-2 sm:pt-0">
        <Stack direction="row" spacing={0}>
          <Flex className="flex-1">
            <GreyInput
              name={subscrInput}
              title="Subscriptions"
              titleSize="sm"
              defaultValue={
                subscr > 0 ? new Intl.NumberFormat().format(subscr) : ""
              }
              placeholderText={new Intl.NumberFormat().format(
                subscrPlaceholder
              )}
              htmlSize={isMediumScreen ? 8.5 : 15}
              onBlur={onBlur}
            />
          </Flex>
          <Flex className="flex-1">
            <GreyInput
              name={savingsInput}
              title="Savings"
              titleSize="sm"
              defaultValue={
                savings > 0 ? new Intl.NumberFormat().format(savings) : ""
              }
              placeholderText={new Intl.NumberFormat().format(
                savingsPlaceholder
              )}
              htmlSize={isMediumScreen ? 8.5 : 15}
              onBlur={onBlur}
            />
          </Flex>
        </Stack>
      </div>
    </div>
  );
}
