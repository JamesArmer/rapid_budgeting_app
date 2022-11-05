import {
  Input,
  InputLeftElement,
  InputGroup,
  Stack,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import YellowInput from "./inputs/YellowInput";

export default function Compensation() {
  return (
    <div className="flex">
      <Stack direction="row" spacing={6}>
        <Flex>
          <Box ml="3">
            <Text fontWeight="bold">Total Compensation</Text>
            <InputGroup className="flex-1">
              <InputLeftElement
                pointerEvents="none"
                color="gray.500"
                fontSize="1.2em"
                children="£"
              />
              <Input variant="filled" placeholder="32,000" size="lg" />
            </InputGroup>
          </Box>
        </Flex>
        <Flex className="flex-1">
          <Box ml="3">
            <Text fontWeight="bold">Pension Contribution</Text>
            <Input variant="filled" placeholder="2%" size="lg" />
          </Box>
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
