import React from "react";
import { Button } from "@nextui-org/react";

export const ButtonRegister = ({
  
  onClick

}) => {

  const handleRegister = (event) => {

    onClick(event.target.value, field)

  }

  return (
    <Button
      radius="full"
      className="max-w-xs mt-5 min-w-96"
      color="warning"
      onClick={onClick}
    >
      Registrar
    </Button>
  );
}