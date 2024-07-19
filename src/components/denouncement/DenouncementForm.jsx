import { DatePicker } from "@nextui-org/react";
import { GeneralInput } from "../Input";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Button,
  Textarea,
} from "@nextui-org/react";

export const DenouncementForm = () => {
  return (
    <>
      <section className="p-20">
        <Card className="w-auto h-full">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="font-lato text-blue font-bold">
                Fecha, hora y lugar del abuso
              </p>
              <p className="text-small text-default-500">Ingresa los datos</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="flex flex-row flex-wrap gap-2 items-center justify-around mb-6">
              <DatePicker
                className="max-w-md"
                granularity="second"
                label="Fecha y hora del abuso"
              />
              <GeneralInput
                type="text"
                label="Ubicación exacta del abuso"
                placeholder="Ingresa la dirección"
                isRequired
                className={"max-w-md"}
                isClearable
                onClear={() => console.log("Clear")}
                color="default"
              />
            </div>
            <div className="flex flex-row flex-wrap gap-2 items-center justify-around mb-6">
              <GeneralInput
                type="text"
                label="Tipo de mascota"
                placeholder="Perro, gato, etc."
                isRequired
                className={"max-w-md"}
                isClearable
                onClear={() => console.log("Clear")}
                color="default"
              />
              <GeneralInput
                type="text"
                label="Tipo de abuso"
                placeholder="Violencia, abandono, etc."
                isRequired
                className={"max-w-md"}
                isClearable
                onClear={() => console.log("Clear")}
                color="default"
              />
            </div>

            <div className="flex flex-row flex-wrap gap-2 items-center justify-around mb-6">
              <Textarea
                isRequired
                label="Descripción del abuso"
                labelPlacement="outside"
                placeholder="Describe de manera detallada el abuso"
                className="max-w-xl"
              />
            </div>
            <div className="flex justify-center items-center">
              <Button
                radius="full"
                className="max-w-xs mb-4 min-w-96 h-12"
                color="warning"
              >
                Enviar denuncia
              </Button>
            </div>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://www.worldanimalprotection.cr/apoyanos/actua-ahora/guia-denuncia-maltrato-animal/"
            >
              Guía de denuncia de maltrato animal
            </Link>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};
