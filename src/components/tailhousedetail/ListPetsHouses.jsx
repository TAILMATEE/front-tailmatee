/* eslint-disable no-unused-vars */
import React from "react";
import { Card, CardBody, CardFooter, Image, Avatar } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import { InformationPet } from "../tailhousedetail/InformationPet";
import { ButtonAdoption } from "./ButtonAdoption";

export const ListPetsHouses = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const sizes = ["5xl"];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  const pets = [
    {
      id: 1,
      name: "Dog 1",
      image:
        "https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales.jpg",
    },
    {
      id: 2,
      name: "Dog 2",
      image:
        "https://concepto.de/wp-content/uploads/2022/05/animales-e1653765030720.jpg",
    },
    {
      id: 3,
      name: "Dog 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHpFkcAEL69eoj6zusnHmBM0lWCOntnpWpA&s",
    },
    {
      id: 4,
      name: "Dog 4",
      image: "https://definicion.de/wp-content/uploads/2012/10/animal-1.jpg",
    },
  ];

  return (
    <>
      {pets.map((pet) => (
        <Card
          key={pet.id}
          isFooterBlurred
          radius="lg"
          className="border-none w-[300px] h-[280px] my-5 mx-8"
        >
          <div className="aspect-w-3 aspect-h-2">
            <Image
              src={pet.image}
              layout="fill"
              className="rounded-t-lg w-96 h-72 object-cover"
            />
          </div>
          <div>
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">{pet.name}</p>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <Button
                    className="bg-blue text-white"
                    key={size}
                    onPress={() => handleOpen(size)}
                  >
                    info
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
                          src="https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales.jpg"
                        />
                        <p>Name pet</p>
                      </ModalHeader>
                      <ModalBody>
                        <article className="flex h-80">
                          <section className="w-1/2 mr-16 mb-10 mt-5 flex items-center">
                            <Image
                              isZoomed
                              alt="NextUI Fruit Image with Zoom"
                              radius="lg"
                              src="https://definicion.de/wp-content/uploads/2012/10/animal-1.jpg"
                              width="100%"
                            />
                          </section>
                          <section>
                            <ScrollShadow
                              hideScrollBar
                              className="pb-2 w-[400px] h-[220px]"
                            >
                              <InformationPet />
                            </ScrollShadow>
                            <div className="flex justify-center">
                              <ButtonAdoption />
                            </div>
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
};
