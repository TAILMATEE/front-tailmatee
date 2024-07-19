import React from "react";
import { Button, Link } from "@nextui-org/react";

export const ButtonAdoption = () => {
    return (
        <div>
            <Link href="/adoption">
                <Button radius="full" color="warning" className="text-white font-lato mt-8">
                    Adoptar
                </Button>
            </Link>
        </div>
    );
};