import { DatePicker } from "@nextui-org/react";
import { GeneralInput } from "../Input";
import { Link, Button, Textarea } from "@nextui-org/react";

export const DenouncementForm = () => {
  return (
    <>
      <section className="p-20 flex flex-col gap-5 items-center">
        <DatePicker
          className={"max-w-xs mt-5 min-w-96 "}
          granularity="second"
          label="Fecha y hora del abuso"
        />
        <GeneralInput
          type="text"
          label="Ubicación exacta del abuso"
          placeholder="Ingresa la dirección"
          isRequired
          className={"max-w-xs mt-5 min-w-96 "}
          isClearable
          onClear={() => console.log("Clear")}
          color="default"
        />
        <GeneralInput
          type="text"
          label="Tipo de mascota"
          placeholder="Perro, gato, etc."
          isRequired
          className={"max-w-xs mt-5 min-w-96 "}
          isClearable
          onClear={() => console.log("Clear")}
          color="default"
        />
        <GeneralInput
          type="text"
          label="Tipo de abuso"
          placeholder="Violencia, abandono, etc."
          isRequired
          className={"max-w-xs mt-5 min-w-96 "}
          isClearable
          onClear={() => console.log("Clear")}
          color="default"
        />

        <Textarea
          isRequired
          label="Descripción del abuso"
          labelPlacement="outside"
          placeholder="Describe de manera detallada el abuso"
          className={"max-w-xs mt-5 min-w-96 "}
        />

        <Button
          radius="full"
          className="max-w-xs mb-4 min-w-96 h-12"
          color="warning"
        >
          Enviar denuncia
        </Button>
        <Link
          isExternal
          showAnchorIcon
          href="https://www.worldanimalprotection.cr/apoyanos/actua-ahora/guia-denuncia-maltrato-animal/"
        >
          Guía de denuncia de maltrato animal
        </Link>
      </section>
    </>
  );
};
