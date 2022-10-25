import type { NextPage } from "next";
import Layout from "../components/Layout";
import {
  Input,
  InputLeftElement,
  InputGroup,
  Stack,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex w-full flex-1 flex-col items-center justify-center sm:px-20 py-4">
        <h1 className="font-bold text-4xl text-red-main">
          Rapid Budgeting App
        </h1>
        <h2 className="italic text-2xl text-red-main">
          Your finances at a glance
        </h2>
      </div>
      <div className="flex w-1/2 px-4">
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
            <Box ml="3">
              <Text fontWeight="bold">Taxable Income</Text>
              <InputGroup className="flex-1">
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.500"
                  fontSize="1.2em"
                  children="£"
                />
                <Input variant="filled" placeholder="31,360" size="lg" />
              </InputGroup>
            </Box>
          </Flex>
        </Stack>
      </div>
    </Layout>
  );
};

export default Home;
