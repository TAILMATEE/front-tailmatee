import React from "react";
import { Checkbox } from "@nextui-org/react";
import { HeartIcon } from '../../assets/Icons/CardIcon/Like';
import { Card, CardBody, CardFooter, Image, Avatar } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Comments } from "./Comments";

export const CardPost = () => {

    const variants = ["underlined",];
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('md')

    const sizes = ["5xl"];

    const handleOpen = (size) => {
        setSize(size)
        onOpen();
    }


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
                        <div className="flex flex-wrap gap-3">
                            {sizes.map((size) => (
                                <Button className="bg-white" key={size} onPress={() => handleOpen(size)}>Ver comentarios</Button>
                            ))}
                        </div>
                        <Modal
                            size={size}
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex items-center gap-5 mb-3">
                                            <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
                                            <p> Name User</p>
                                        </ModalHeader>
                                        <ModalBody >
                                            <article className="flex">
                                                <section className="w-1/2 mr-16">
                                                    <Image
                                                        isZoomed
                                                        alt="NextUI Fruit Image with Zoom"
                                                        radius="lg"
                                                        className=""
                                                        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                                                        width="100%"
                                                    />
                                                </section>
                                                <section className="w-1/2">
                                                    <Comments />
                                                </section>
                                            </article>
                                        </ModalBody>
                                        {/* <ModalFooter>
                                            <Button color="danger" variant="light" onPress={onClose}>
                                                Close
                                            </Button>
                                            <Button color="primary" onPress={onClose}>
                                                Action
                                            </Button>
                                        </ModalFooter> */}

                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </CardFooter>
                </Card>
            ))
            }
        </div >
    );
};