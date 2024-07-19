import React from "react";
import { Card, CardFooter, Image, Button, Link } from "@nextui-org/react";

export const ListPetsHouses = () => {

    const pets = [
        {
            id: 1,
            name: "Dog 1",
            image: "https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales.jpg",
        },
        {
            id: 2,
            name: "Dog 2",
            image: "https://concepto.de/wp-content/uploads/2022/05/animales-e1653765030720.jpg",
        },
        {
            id: 3,
            name: "Dog 3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHpFkcAEL69eoj6zusnHmBM0lWCOntnpWpA&s",
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
                            <Button
                                className="text-tiny text-white bg-blue"
                                variant="flat"
                                color="secondary"
                                radius="lg"
                                size="sm"
                                onClick={() => handlePetClick(pet.id)}
                            >
                                <Link className="text-white" href="">
                                    info
                                </Link>
                            </Button>
                        </CardFooter>
                    </div>
                </Card>
            ))}
        </>
    );
}