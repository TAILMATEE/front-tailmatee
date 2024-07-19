import React from "react";
import { GeneralInput } from "../Input";
import { Select, SelectItem } from "@nextui-org/react";
import { validation } from "./Data";
import { ButtonAdoptionForm } from "./ButtonAdoptionForm";
import { rango } from "./EconomicRange";

export const AdoptionForm = () => {
    return (
        <main className="mb-10 flex flex-col">
            <form action="">
                <GeneralInput
                    type="occupation"
                    label="Ocupación"
                    placeholder="Ingresa tu ocupación"
                    isRequired
                    className={"max-w-xs mt-5 min-w-96 "}
                    isClearable
                />
                <GeneralInput
                    type="civilStatus"
                    label="Estado civil"
                    placeholder="Ingresa tu estado civil"
                    isRequired
                    className={"max-w-xs mt-5 min-w-96 "}
                    isClearable
                />
                <GeneralInput
                    type="whyAdopt"
                    label="¿Por qué quieres adoptar?"
                    placeholder="Ingresa tu respuesta"
                    isRequired
                    className={"max-w-xs mt-5 min-w-96 "}
                    isClearable
                />
                <Select
                    items={validation}
                    label="¿Tienes más mascotas?"
                    placeholder="Select an option"
                    className="max-w-xs mt-5 min-w-96"
                >
                    {(datayn) => <SelectItem>{datayn.label}</SelectItem>}
                </Select>
                <GeneralInput
                    type="number"
                    label="¿Cuántas mascotas tienes?"
                    placeholder="Ingresa tu respuesta"
                    isRequired
                    className={"max-w-xs mt-5 min-w-96 "}
                    isClearable
                />
                <Select
                    items={validation}
                    label="¿Tienes más mascotas?"
                    placeholder="Select an option"
                    className="max-w-xs mt-5 min-w-96"
                >
                    {(datayn) => <SelectItem>{datayn.label}</SelectItem>}
                </Select>
                <GeneralInput
                    type="whatHappen"
                    label="¿Qué pasó con la mascota?"
                    placeholder="Ingresa tu respuesta"
                    isRequired
                    className={"max-w-xs mt-5 min-w-96 "}
                    isClearable
                />
                <GeneralInput
                    type="number"
                    label="¿Cuántas personas viven en tu hogar?"
                    placeholder="Ingresa tu respuesta"
                    isRequired
                    className={"max-w-xs mt-5 min-w-96 "}
                    isClearable
                />
                <Select
                    items={validation}
                    label="¿Viven niños en casa?"
                    placeholder="Select an option"
                    className="max-w-xs mt-5 min-w-96"
                >
                    {(datayn) => <SelectItem>{datayn.label}</SelectItem>}
                </Select>
                <GeneralInput
                    type="number"
                    label="¿Cuántos niños viven?"
                    placeholder="Ingresa tu respuesta"
                    isRequired
                    className={"max-w-xs mt-5 min-w-96 "}
                    isClearable
                />
                <div className="flex flex-col">
                    <Select
                        items={validation}
                        label="¿Tu casa es rentada o propia?"
                        placeholder="Select an option"
                        className="max-w-xs mt-5 min-w-96"
                    >
                        {(datayn) => <SelectItem>{datayn.label}</SelectItem>}
                    </Select>
                    <Select
                        items={validation}
                        label="¿Si alquilas, el arrendador permite mascotas?"
                        placeholder="Select an option"
                        className="max-w-xs mt-5 min-w-96"
                    >
                        {(datayn) => <SelectItem>{datayn.label}</SelectItem>}
                    </Select>
                    <Select
                        items={validation}
                        label="¿Puedes cubrir los gastos?"
                        placeholder="Select an option"
                        className="max-w-xs mt-5 min-w-96"
                    >
                        {(datayn) => <SelectItem>{datayn.label}</SelectItem>}
                    </Select>
                    <Select
                        items={rango}
                        label="¿En cual rango esta tu ingreso mensual?"
                        placeholder="Select an option"
                        className="max-w-xs mt-5 min-w-96"
                    >
                        {(rang) => <SelectItem>{rang.label}</SelectItem>}
                    </Select>
                </div>
                <ButtonAdoptionForm />
            </form>
        </main>
    )
};