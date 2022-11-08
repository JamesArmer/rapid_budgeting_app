import {
  Input,
  InputLeftElement,
  InputGroup,
  Stack,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import GreyInput from "./inputs/GreyInput";

export default function Expenses() {
  return (
    <>
      <div className="pl-3">
        <h3 className="font-bold text-2xl text-blue-main">Monthly Expenses</h3>
      </div>
      <div className="flex">
        <Stack direction="row" spacing={3}>
          <Flex className="flex-1">
            <GreyInput title="Rent" titleSize="lg" placeholderText="900" />
          </Flex>
          <Flex className="flex-1">
            <GreyInput title="Bills" titleSize="lg" placeholderText="60" />
          </Flex>
          <Flex className="flex-1">
            <GreyInput
              title="Subscriptions"
              titleSize="lg"
              placeholderText="54"
            />
          </Flex>
        </Stack>
      </div>
    </>
  );
}
