import { Stack, Flex } from "@chakra-ui/react";
import YellowInput from "./inputs/YellowInput";

export default function Income() {
  return (
    <>
      <div className="flex">
        <Stack direction="row" spacing={6}>
          <Flex className="flex-1">
            <YellowInput
              title="Net Income (Yearly)"
              titleSize="lg"
              placeholderText="24,746"
            />
          </Flex>
          <Flex className="flex-1">
            <YellowInput
              title="Net Income (Monthly)"
              titleSize="lg"
              placeholderText="2,062.21"
            />
          </Flex>
        </Stack>
      </div>
    </>
  );
}
