import React from "react";
import { User } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";

export const TailFriends = () => {

    const tailFriends = [
        {
            imageProfile: "https://www.mundodeportivo.com/files/article_gallery_microformat/uploads/2018/03/08/60e7b57554602.jpeg",
            tailFriend: "Lassie",
            typeOfPet: "Dog"
        },
        {
            imageProfile: "https://www.mistermascotas.com.mx/cdn/shop/articles/chi.jpg?v=1626977829",
            tailFriend: "Daisy",
            typeOfPet: "Dog"
        },
    ];

    return (
        <section className="mt-10 flex justify-center flex-col w-1/2 ml-40">
            <h1 className="text-[20px]">Tail Friends</h1>
            <Divider className="my-4 w-[200px]" />
            <div className="flex flex-wrap">
                {tailFriends.map((data, index) => (
                    <div key={index} className="flex items-center mr-10 w-fit">
                        <User
                            name={data.tailFriend}
                            description={data.typeOfPet}
                            avatarProps={{
                                src: data.imageProfile,
                                size: "lg",
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};