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
    labelPlacement,
    value,
    field,
    onChangeHandler,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
        ...restProps
}) => {
 
    const handleValueChange = (event) => {
 
        onChangeHandler(event.target.value, field);
 
    }
 
    const handleInputBlur = (event) => {
        onBlurHandler(event.target.value, field);
      };
 
    return (
        <>
            <div>
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
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleInputBlur}
                    {...restProps}
                />
                <span>
                    {showErrorMessage && validationMessage}
                </span>
            </div>
        </>
    );
}