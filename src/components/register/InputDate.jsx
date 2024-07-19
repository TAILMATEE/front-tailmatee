import { DatePicker } from "@nextui-org/react";

export const InputDate = () => {
  return (
    <DatePicker
      className="max-w-xs mt-5 min-w-96"
      isClearable
      labelPlacement="outside"
    />
  );
};
