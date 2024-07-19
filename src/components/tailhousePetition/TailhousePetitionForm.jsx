import { DatePicker } from "@nextui-org/react";
import { GeneralInput } from "../Input";
import { Select, SelectItem } from "@nextui-org/react";
import { validation } from "../adoptionForm/Data";
import { ButtonPetitionTailhouse } from "./ButtonPetitionTailhouse";

export const TailhousePetitionForm = () => {
  return (
    <main className="mb-10 flex flex-col">
      <form action="" content="multipart/form-data">
        <DatePicker
          className="max-w-xs mt-5 min-w-96"
          granularity="second"
          label="Fecha y hora"
        />
        <GeneralInput
          type="text"
          label="Nombre del Manager"
          placeholder="Ingresa el nombre del manager"
          isRequired
          className={"max-w-xs mt-5 min-w-96"}
          isClearable
          onClear={() => console.log("Clear")}
          color="default"
        />
        <GeneralInput
          type="file"
          label="Dpi"
          placeholder="Ingresa el dpi"
          isRequired
          className={"max-w-xs mt-5 min-w-96"}
          isClearable
          onClear={() => console.log("Clear")}
          color="default"
        />
        <GeneralInput
          type="file"
          label="Fotografias del lugar"
          placeholder="Ingresa las fotografias del lugar"
          isRequired
          className={"max-w-xs mt-5 min-w-96"}
          isClearable
          onClear={() => console.log("Clear")}
          color="default"
        />
        <Select
          items={validation}
          label="¿El lugar es tuyo?"
          placeholder="Select an option"
          className="max-w-xs mt-5 min-w-96"
        >
          {(datayn) => <SelectItem>{datayn.label}</SelectItem>}
        </Select>
        <GeneralInput
          type="file"
          label="Adjunta evidencia de propiedad"
          placeholder="Ingresa la evidencia de propiedad"
          isRequired
          className={"max-w-xs mt-5 min-w-96"}
          isClearable
          onClear={() => console.log("Clear")}
          color="default"
        />
        <Select
          items={validation}
          label="¿Estarias dispuesto a recibir una visita?"
          placeholder="Select an option"
          className="max-w-xs mt-5 min-w-96"
        >
          {(datayn) => <SelectItem>{datayn.label}</SelectItem>}
        </Select>
        <GeneralInput
          type="text"
          label="Di fecha y hora de disponibilidad"
          placeholder="Ingresa tu respuesta"
          isRequired
          className={"max-w-xs mt-5 min-w-96"}
          isClearable
          onClear={() => console.log("Clear")}
          color="default"
        />
        <ButtonPetitionTailhouse />
      </form>
    </main>
  );
};
