import React from "react";
import { Link } from "@nextui-org/react";

export const MessageRegister = () => {
    return (
        <article className="content-start gap-y-10">
            <h1 className="font-lato font-bold text-5xl text-blue">
                Crea tu cuenta
            </h1>
            <section className="flex gap-2 justify-items-center mt-2">
                <h2 className="font-lato font-normal text-2xl text-blue">
                    Bienvenido a
                </h2>
                <h2 className="font-sansita font-semibold text-2xl text-blue">
                    tailmatee
                </h2>
            </section>
            <section className="mt-10">
                <p className="font-lato font-normal text-xl">
                    Si ya tienes una cuenta inicia sesión.
                </p>
                <Link isBlock showAnchorIcon href="/" color="primary">
                    ¡Inicia sesión aquí!
                </Link>
            </section>
        </article>
    );
};