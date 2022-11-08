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

export default function Savings() {
  return (
    <>
      <div className="pl-3">
        <h3 className="font-bold text-2xl text-blue-main">Savings</h3>
      </div>
      <div className="flex">
        <Stack direction="row" spacing={6}>
          <Flex className="flex-1">
            <GreyInput title="General" titleSize="lg" placeholderText="200" />
          </Flex>
        </Stack>
      </div>
    </>
  );
}
