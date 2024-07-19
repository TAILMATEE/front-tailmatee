import React from "react";
import { Avatar } from "@nextui-org/react";

export const InfoHouseDetail = () => {

    const profileData = [
        {
            imageProfile: "https://nextui.org/images/hero-card.jpeg",
            name: "House 1",
            description: "Albergue dedicado a la ayuda de animales callejeros. Estamos ubicados en la 10 calle 5-96 zona 9 Guatemala",
        },
    ]

    return (
        <main className="font-lato mt-5 flex justify-center">
            {profileData.map((data, index) => (
                <section key={index} className="flex">
                    <Avatar src={data.imageProfile} className="w-40 h-40 text-large" />
                    <article className="w-fit flex flex-col ml-10 justify-center">
                        <p className="mb-1 font-bold">{data.name}</p>
                        <p>{data.description}</p>
                    </article>
                </section>
            ))}
        </main>
    )
}