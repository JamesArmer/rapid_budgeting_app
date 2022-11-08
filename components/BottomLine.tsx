import {
  Input,
  InputLeftElement,
  InputGroup,
  Stack,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import GreenInput from "./inputs/GreenInput";
import GreyInput from "./inputs/GreyInput";

export default function BottomLine() {
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
              placeholderText="848.21"
            />
          </Flex>
          <Flex className="flex-1">
            <GreenInput
              title="Remaining Weekly"
              titleSize="xl"
              placeholderText="212.05"
            />
          </Flex>
          <Flex className="flex-1 self-end">
            <GreyInput
              title="Weeks / Month"
              titleSize="lg"
              placeholderText="4"
              htmlSize={5}
            />
          </Flex>
        </Stack>
      </div>
      <div className="flex py-4">
        <Stack direction="row" spacing={6}>
          <GreenInput
            title="Remaining Daily"
            titleSize="lg"
            placeholderText="30.29"
          />
        </Stack>
      </div>
    </>
  );
}
