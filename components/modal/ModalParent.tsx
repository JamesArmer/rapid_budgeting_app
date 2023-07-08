import { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import TaxAccordion from "./TaxAccordion";

export default function ModalParent({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [pageNumber, setPageNumber] = useState(0);

  function closeModal() {
    onClose();
    setPageNumber(0);
  }

  function SelectModalContent() {
    if (pageNumber === 0) {
      return (
        <ModalContent>
          <ModalHeader>What is Rapid Budgeting App?</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            Rapid Budgeting App is a UK based budgeting tool that aims to give
            users a basic understanding of their finances after entering just a
            handful of numbers.
            <br />
            <br />
            Many young professionals find themselves spending hours setting up
            tedious spreadsheets with complex formulas, just to understand how
            much money they will have at the end of the month. These quickly
            become inaccessible and often seem not worth the effort. Moreover,
            budgeting calculators you often find online have far too many
            options for something which could be so simple.
            <br />
            <br />
            With Rapid Budgeting App, the aim is to do the broad strokes well
            with an intuitive UI and leave the complexities as optional. We
            don't promise to get the the calculations right down to the penny,
            but we do promise to get you somewhere close so you can have easy
            access to your finances.
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setPageNumber(1);
              }}
            >
              Next
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                closeModal();
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      );
    } else {
      return (
        <ModalContent>
          <ModalHeader>How does it work?</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            The app works by taking the up to 7 inputs (but you only technically
            need salary) and calculating outputs step by step:
            <br />
            <br />
            <ol className="list-decimal list-inside">
              <li>
                Pension contribution isn't taxable and hence is deducted from
                your salary to give your taxable income.
              </li>
              <li>
                Net income is calculated by subtracting your income tax,
                national insurance, and student loan from your salary.
              </li>
              <li>
                Income tax, national insurance and student loan are calculated
                through 3 individual calculations (see links at the bottom for
                details).
              </li>
              <li>
                The bottom line of how much disposable income you have monthly
                is calulated by subracting your monthly expenses from your net
                income.
              </li>
            </ol>
            <br />
            <TaxAccordion />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setPageNumber(0);
              }}
            >
              Previous
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                closeModal();
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      );
    }
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        closeModal();
      }}
      size="lg"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <SelectModalContent />
    </Modal>
  );
}
