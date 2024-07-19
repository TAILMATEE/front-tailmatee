import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";


export const PetInfo = () => {

    const [isSelected, setIsSelected] = React.useState(false);

    const petInfo = [
        {
            name: "Luna",
            username: "Lunatoon",
            birthday: "2021-10-10",
            age: "1 año",
            category: "Animal terrestre",
            specie: "Perro",
            race: "Labrador",
            gender: "Femenino",
            description: "Fue adoptada por uina familia muy bonita",
        },
    ]

    return (
        <section>
            <div>
                {petInfo.map((pet, index) => (
                    <Accordion variant="splitted" >
                        <AccordionItem className="w-80" key="1" aria-label="Accordion 1" title="Edad y Cumpleaños">
                            <div className="flex flex-col">
                                <p>{pet.birthday}</p>
                                <p>{pet.age}</p>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2" title="Tipo de animal">
                            <p>{pet.category}</p>
                            <p>{pet.specie}</p>
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Raza y sexo">
                            <p>{pet.race}</p>
                            <p>{pet.gender}</p>
                        </AccordionItem>
                        <AccordionItem key="4" aria-label="Accordion 4" title="Descripción">
                            <p>{pet.description}</p>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </section>
    );
}