import { Stack, Flex } from "@chakra-ui/react";
import RedInput from "./inputs/RedInput";

export default function Tax({
  incomeTax,
  nationalInsurance,
  studentLoan,
}: {
  incomeTax: number;
  nationalInsurance: number;
  studentLoan: number;
}) {
  return (
    <>
      <div className="flex">
        <Stack direction="row" spacing={6}>
          <Flex className="flex-1">
            <RedInput
              title="Income Tax"
              titleSize="lg"
              placeholderText={new Intl.NumberFormat("en-GB", {
                maximumFractionDigits: 2,
              }).format(incomeTax)}
            />
          </Flex>
          <Flex className="flex-1">
            <RedInput
              title="National Insurance"
              titleSize="lg"
              placeholderText={new Intl.NumberFormat("en-GB", {
                maximumFractionDigits: 2,
              }).format(nationalInsurance)}
            />
          </Flex>
          <Flex className="flex-1">
            <RedInput
              title="Student Loan"
              titleSize="lg"
              placeholderText={new Intl.NumberFormat("en-GB", {
                maximumFractionDigits: 2,
              }).format(studentLoan)}
            />
          </Flex>
        </Stack>
      </div>
    </>
  );
}
