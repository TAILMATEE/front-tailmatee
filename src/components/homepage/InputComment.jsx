import React from "react";
import { Input } from "@nextui-org/react";
import Send from '../../assets/Icons/CommentIcon/Send.svg';

export const InputComment = () => {

    const variants = ["underlined"];


    return (
        <div className="w-full flex flex-col gap-4">
            {variants.map((variant) => (
                <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 items-center">
                    <Input type="comment" variant={variant} label="Comentario" placeholder="Ingresa un comentario..." />
                    <button className="w-6 h-6 text-tiny rounded-lg">
                        <img src={Send} alt="Send" />
                    </button>
                </div>
            ))}
        </div>
    );
}