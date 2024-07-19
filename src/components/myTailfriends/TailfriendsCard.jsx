import { Card, CardFooter, Image, Button, Avatar } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import { PetInfo } from "../tailhousedetail/PetInfo";
import React from "react";

export const TailfriendsCard = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('md')

    const sizes = ["5xl"];

    const handleOpen = (size) => {
        setSize(size)
        onOpen();
    }

    const tailfriends = [
        {
            id: 1,
            name: "Firulais",
            image: "https://www.orchardroadanimalhospital.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=q7VNmAD8",
        },
        {
            id: 1,
            name: "Firulais",
            image: "https://www.orchardroadanimalhospital.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=q7VNmAD8",
        },
        {
            id: 1,
            name: "Firulais",
            image: "https://www.orchardroadanimalhospital.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=q7VNmAD8",
        },
        {
            id: 1,
            name: "Firulais",
            image: "https://www.orchardroadanimalhospital.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=q7VNmAD8",
        },
        {
            id: 1,
            name: "Firulais",
            image: "https://www.orchardroadanimalhospital.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=q7VNmAD8",
        },
    ]

    return (
        <>
            {tailfriends.map((tailfriend) => (
                <Card
                    key={tailfriend.id}
                    isFooterBlurred
                    radius="lg"
                    className="border-none w-[300px] h-[280px] my-5 mx-8"
                >
                    <div className="aspect-w-3 aspect-h-2">
                        <Image
                            src={tailfriend.image}
                            layout="fill"
                            className="rounded-t-lg w-96 h-72 object-cover"
                        />
                    </div>
                    <div>
                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-tiny text-white/80">{tailfriend.name}</p>
                            <div className="flex flex-wrap gap-3">
                                {sizes.map((size) => (
                                    <Button className="bg-blue text-white" key={size} onPress={() => handleOpen(size)}>info</Button>
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
                                                <Avatar isBordered radius="full" size="md" src="https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales.jpg" />
                                                <p>Name pet</p>
                                            </ModalHeader>
                                            <ModalBody >
                                                <article className="mb-10 mt-5 flex justify-center">
                                                    <section>
                                                        <PetInfo />
                                                    </section>
                                                </article>
                                            </ModalBody>
                                        </>
                                    )}
                                </ModalContent>
                            </Modal>
                        </CardFooter>
                    </div>
                </Card>
            ))}
        </>
    );
}