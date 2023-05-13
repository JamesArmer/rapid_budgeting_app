import { Stack, Flex } from "@chakra-ui/react";
import GreyInput from "./inputs/GreyInput";
import GreyInputNonMonetary from "./inputs/GreyInputNonMonetary";
import { penContrInput, totalCompInput } from "../constants/InputNames";
import {
  penContrPlaceholder,
  totalCompPlaceholder,
} from "../constants/PlaceholderNumbers";

export default function Compensation({
  totalComp,
  penContr,
  onBlur,
}: {
  totalComp: number;
  penContr: number;
  onBlur: Function;
}) {
  return (
    <div className="flex">
      <Stack direction="row" spacing={0}>
        <Flex className="flex-1">
          <GreyInput
            name={totalCompInput}
            title="Total Compensation"
            titleSize="sm"
            defaultValue={
              totalComp > 0 ? new Intl.NumberFormat().format(totalComp) : ""
            }
            placeholderText={new Intl.NumberFormat().format(
              totalCompPlaceholder
            )}
            onBlur={onBlur}
          />
        </Flex>
        <Flex className="flex-1">
          <GreyInputNonMonetary
            name={penContrInput}
            title="Pension Contribution"
            titleSize="sm"
            defaultValue={
              penContr > 0 ? new Intl.NumberFormat().format(penContr) : ""
            }
            placeholderText={penContrPlaceholder + "%"}
            onBlur={onBlur}
          />
        </Flex>
      </Stack>
    </div>
  );
}
