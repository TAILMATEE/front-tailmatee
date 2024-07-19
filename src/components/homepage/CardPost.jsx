/* eslint-disable no-unused-vars */
import React from "react";
import { Checkbox } from "@nextui-org/react";
import { HeartIcon } from "../../assets/Icons/CardIcon/Like";
import { Card, CardBody, CardFooter, Image, Avatar } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { InputComment } from "./InputComment";
import { Comments } from "./Comments";

export const CardPost = () => {
  const variants = ["underlined"];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const sizes = ["5xl"];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  const list = [
    {
      profile: "/images/profile-1.jpeg",
      title: "Oscar",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQTQYDktR1rua2gBriTfJ9UuB8chmR24l0w&s",
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
    },
  ];

  return (
    <div className="gap-2 grid sm:grid-cols-1 w-96">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          onPress={() => console.log("item pressed")}
        >
          <CardBody>
            <div className="flex ml-5 mb-4 mt-4 items-center gap-4 ">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src="https://nextui.org/avatars/avatar-1.png"
              />
              <b>{item.title}</b>
            </div>
            <Image
              shadow="sm"
              width="100%"
              radius="lg"
              className="w-96 h-100 object-cover"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small items-start flex-col">
            <div className="flex gap-4 ml-3 mb-3">
              <Checkbox defaultSelected icon={<HeartIcon />}></Checkbox>
            </div>
            <p className="font-semibold text-default-400 text-small ml-4">
              97.1K
            </p>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <Button
                  className="bg-white"
                  key={size}
                  onPress={() => handleOpen(size)}
                >
                  Ver comentarios
                </Button>
              ))}
            </div>
            <Modal size={size} isOpen={isOpen} onClose={onClose}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex items-center gap-5 mb-3">
                      <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src="https://nextui.org/avatars/avatar-1.png"
                      />
                      <p> Name User</p>
                    </ModalHeader>
                    <ModalBody>
                      <article className="flex h-80">
                        <section className="w-1/2 mr-16 flex items-center">
                          <Image
                            isZoomed
                            alt="NextUI Fruit Image with Zoom"
                            radius="lg"
                            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                            width="100%"
                          />
                        </section>
                        <section>
                          <ScrollShadow className="w-full h-3/4">
                            <Comments />
                          </ScrollShadow>
                          <InputComment className="h-1/4" />
                        </section>
                      </article>
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
