import React from "react";
import { Link } from "@nextui-org/react";

export const MessageRegister = () => {
    return (
        <article className="content-start gap-y-10 text-yellow">
            <h1 className="font-lato font-bold text-[50px] ml-2">
                Crea tu cuenta
            </h1>
            <section className="flex gap-2 justify-items-center mt-2 ml-2">
                <h2 className="font-lato font-normal text-[35px]">
                    Bienvenido a
                </h2>
                <h2 className="font-sansita font-semibold text-[35px]">
                    tailmatee
                </h2>
            </section>
            <section className="mt-[110px]">
                <p className="font-lato font-normal text-[16px] ml-2">
                    Si ya tienes una cuenta inicia sesión.
                </p>
                <Link isBlock showAnchorIcon href="/" color="primary">
                    ¡Inicia sesión aquí!
                </Link>
            </section>
        </article>
    );
};