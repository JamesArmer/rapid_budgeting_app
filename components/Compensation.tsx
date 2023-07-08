import { Stack, Flex } from "@chakra-ui/react";
import GreyInput from "./inputs/GreyInput";
import GreyInputNonMonetary from "./inputs/GreyInputNonMonetary";
import { penContrInput, totalCompInput } from "../constants/InputNames";
import {
  penContrPlaceholder,
  totalCompPlaceholder,
} from "../constants/PlaceholderNumbers";
import ResetButton from "./buttons/ResetButton";

export default function Compensation({
  totalComp,
  penContr,
  onBlur,
  onClick,
}: {
  totalComp: number;
  penContr: number;
  onBlur: Function;
  onClick: Function;
}) {
  return (
    <div className="flex">
      <Stack direction="row" spacing={0}>
        <Flex className="sm:flex-1">
          <GreyInput
            name={totalCompInput}
            title="Salary"
            titleSize="sm"
            defaultValue={
              totalComp > 0 ? new Intl.NumberFormat().format(totalComp) : ""
            }
            placeholderText={new Intl.NumberFormat().format(
              totalCompPlaceholder
            )}
            onBlur={onBlur}
            htmlSize={30}
          />
        </Flex>
        <Flex className="sm:flex-1">
          <GreyInputNonMonetary
            name={penContrInput}
            title="Pension Contribution"
            titleSize="sm"
            defaultValue={
              penContr > 0 ? new Intl.NumberFormat().format(penContr) : ""
            }
            placeholderText={penContrPlaceholder + "%"}
            onBlur={onBlur}
            htmlSize={25}
          />
        </Flex>
        <Flex className="sm:flex-1 justify-center">
          <ResetButton onClick={onClick} />
        </Flex>
      </Stack>
    </div>
  );
}
