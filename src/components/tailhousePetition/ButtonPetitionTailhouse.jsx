import React from "react";
import { Button, Link } from "@nextui-org/react";

export const ButtonPetitionTailhouse = () => {
  return (
    <Link href="/home">
      <Button
        radius="full"
        className="max-w-xs mt-5 min-w-96 text-white"
        color="warning"
      >
        Solicitar
      </Button>
    </Link>
  );
}