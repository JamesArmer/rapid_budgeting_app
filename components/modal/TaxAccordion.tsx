import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

export default function TaxAccordion() {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" className="text-red-700">
              Tax Calculation Details
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <ul className="list-disc list-inside">
            <li>
              Income tax rates and thresholds can be found here{" "}
              <a
                href="https://www.gov.uk/income-tax-rates"
                target="about:blank"
                className="underline"
              >
                https://www.gov.uk/income-tax-rates
              </a>
            </li>
            <li>
              National insurance rates and thresholds can be found here{" "}
              <a
                href="https://www.gov.uk/national-insurance-rates-letters"
                target="about:blank"
                className="underline"
              >
                https://www.gov.uk/national-insurance-rates-letters
              </a>
            </li>
            <li>
              Student Loan (assumed student finance plan 2) rates and thresholds
              can be found here{" "}
              <a
                href="https://www.gov.uk/repaying-your-student-loan/what-you-pay"
                target="about:blank"
                className="underline"
              >
                https://www.gov.uk/repaying-your-student-loan/what-you-pay
              </a>
            </li>
          </ul>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
