import { Stack, Flex } from "@chakra-ui/react";
import RedInput from "./inputs/RedInput";

export default function Tax() {
  return (
    <>
      <div className="flex">
        <Stack direction="row" spacing={6}>
          <Flex className="flex-1">
            <RedInput
              title="Income Tax"
              titleSize="lg"
              placeholderText="3,758"
            />
          </Flex>
          <Flex className="flex-1">
            <RedInput
              title="National Insurance"
              titleSize="lg"
              placeholderText="2,490"
            />
          </Flex>
          <Flex className="flex-1">
            <RedInput
              title="Student Loan"
              titleSize="lg"
              placeholderText="365.85"
            />
          </Flex>
        </Stack>
      </div>
    </>
  );
}
