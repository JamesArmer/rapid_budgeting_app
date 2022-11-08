import { Stack, Flex } from "@chakra-ui/react";
import GreyInput from "./inputs/GreyInput";
import YellowInput from "./inputs/YellowInput";

export default function Compensation() {
  return (
    <div className="flex">
      <Stack direction="row" spacing={6}>
        <Flex className="flex-1">
          <GreyInput
            title="Total Compensation"
            titleSize="lg"
            placeholderText="32,000"
          />
        </Flex>
        <Flex className="flex-1">
          <GreyInput
            title="Pension Contribution"
            titleSize="lg"
            placeholderText="2%"
          />
        </Flex>
        <Flex className="flex-1">
          <YellowInput
            title="Net Income (Yearly)"
            titleSize="lg"
            placeholderText="31,360"
          />
        </Flex>
      </Stack>
    </div>
  );
}
