import React from "react";
import { Link } from "@nextui-org/react";

export const LoginText = () => {
    return (
        <article className="w-fit text-blue h-full content-center">
            <h1 className="font-lato text-[50px] ml-2">Ingresa</h1>
            <section className="flex flew-row w-fit items-center mt-3 ml-2">
                <h2 className="font-lato text-[35px] w-fit mr-3">Bienvenido de nuevo a</h2>
                <h1 className="font-sansita text-[35px] w-fit">tailmatee</h1>
            </section>
            <section className="mt-[110px]">
                <p className="font-lato text-[16px] mt-3 ml-2">Si no tienes una cuenta</p>
                <Link isBlock showAnchorIcon href="/register" color="primary">
                    Regístrate aquí!
                </Link>
            </section>
        </article>
    );
};