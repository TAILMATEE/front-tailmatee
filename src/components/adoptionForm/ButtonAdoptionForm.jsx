import { Button, Link } from "@nextui-org/react";

export const ButtonAdoptionForm = () => {
  return (
    <Link href="/tailhousedetail">
      <Button
        radius="full"
        className="max-w-xs mt-5 min-w-96 text-white"
        color="warning"
      >
        Adoptar
      </Button>
    </Link>
  );
};
