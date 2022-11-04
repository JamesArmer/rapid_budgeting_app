import {
  Input,
  InputLeftElement,
  InputGroup,
  Stack,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";

export default function BottomLine() {
  return (
    <>
      <div className="pl-3">
        <h3 className="font-bold text-2xl text-green-main">The Bottom Line</h3>
      </div>
      <div className="flex">
        <Stack direction="row" spacing={6}>
          <Flex className="flex-1">
            <Box ml="3">
              <Text fontWeight="bold" fontSize="xl">
                Remaining Monthly
              </Text>
              <InputGroup className="flex-1">
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.500"
                  fontSize="1.2em"
                  children="£"
                />
                <Input variant="filled" placeholder="848.21" size="lg" />
              </InputGroup>
            </Box>
          </Flex>
          <Flex className="flex-1">
            <Box ml="3">
              <Text fontWeight="bold" fontSize="xl">
                Remaining Weekly
              </Text>
              <InputGroup className="flex-1">
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.500"
                  fontSize="1.2em"
                  children="£"
                />
                <Input variant="filled" placeholder="212.05" size="lg" />
              </InputGroup>
            </Box>
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
          <Box ml="3">
            <Text fontWeight="bold">Remaining Daily</Text>
            <InputGroup className="flex-1">
              <InputLeftElement
                pointerEvents="none"
                color="gray.500"
                fontSize="1.2em"
                children="£"
              />
              <Input variant="filled" placeholder="212.05" size="lg" />
            </InputGroup>
          </Box>
        </Stack>
      </div>
    </>
  );
}
