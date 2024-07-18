import React from "react";
import { Checkbox } from "@nextui-org/react";
import { HeartIcon } from '../../assets/Icons/CardIcon/Like';
import { Card, CardBody, CardFooter, Image, Avatar, Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export const CardPost = () => {

    const variants = ["underlined",];

    const list = [
        {
            profile: "/images/profile-1.jpeg",
            title: "Oscar",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-6_BzWagEHVHRqV4Jfmfz7M4lq99jdl3IQ&s",
        },
        {
            title: "Angel",
            img: "https://nextui-docs-v2.vercel.app/images/album-cover.png",

        },
        {
            title: "Chino",
            img: "https://nextui.org/avatars/avatar-1.png",

        },
        {
            title: "Revo",
            img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",

        },
        {
            title: "Soto",
            img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",

        }
    ];

    return (
        <div className="gap-2 grid sm:grid-cols-1 w-80">
            {list.map((item, index) => (
                <Card shadow="sm" key={index} onPress={() => console.log("item pressed")}>
                    <CardBody className="">
                        <div className="flex ml-5 mb-4 mt-4 items-center gap-4 ">
                            <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
                            <b>{item.title}</b>
                        </div>
                        <Image
                            shadow="sm"
                            width="100%"
                            radius="lg"
                            alt={item.title}
                            className="w-96 h-100 object-cover"
                            src={item.img}
                        />
                    </CardBody>
                    <CardFooter className="text-small items-start flex-col">
                        <div className="flex gap-4 ml-3 mb-3">
                            <Checkbox defaultSelected icon={<HeartIcon />}></Checkbox>
                        </div>
                        <p className="font-semibold text-default-400 text-small ml-4">97.1K</p>
                        <Button className="text-tiny" color="none" radius="full" size="te">
                            Ver comentarios
                        </Button>
                        <div className="w-full flex flex-col gap-4 ">
                            {variants.map((variant) => (
                                <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                    <Input type="comment" variant={variant} placeholder="Comentar" />
                                </div>
                            ))}
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};