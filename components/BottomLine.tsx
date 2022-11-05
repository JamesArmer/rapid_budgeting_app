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

export default function BottomLine() {
  return (
    <>
      <div className="pl-3">
        <h3 className="font-bold text-2xl text-green-main">The Bottom Line</h3>
      </div>
      <div className="flex">
        <Stack direction="row" spacing={6}>
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
          <Flex className="flex-1">
            <Box ml="3">
              <Text fontWeight="bold">Weeks / Month</Text>
              <Input
                variant="filled"
                placeholder="4"
                size="lg"
                htmlSize={12}
                width="auto"
              />
            </Box>
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
