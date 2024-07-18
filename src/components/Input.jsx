import React from "react";
import { input, Input } from "@nextui-org/react";

export const GeneralInput = ({
    isRequired,
    isClearable,
    type,
    label,
    variant,
    placeholder,
    onClear,
    className,
    startContent,
    color,
    labelPlacement
}) => {
    return (
        <Input
            isRequired={isRequired}
            isClearable={isClearable}
            type={type}
            label={label}
            variant={variant}
            placeholder={placeholder}
            onClear={onClear}
            className={className}
            startContent={startContent}
            color={color}
            labelPlacement={labelPlacement}
        />
    );
}