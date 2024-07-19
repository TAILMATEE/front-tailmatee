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
      <section className="p-20 justify-center">
        <Card className="w-auto h-full justify-center">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="font-lato text-blue font-bold">
                Datos de la dennuncia
              </p>
              <p className="text-small text-default-500">Ingresa los datos</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="justify-center items-center">
            <div className="flex flex-col justify-center">
              <DatePicker
                className="mt-5 max-w-screen-sm"
                granularity="second"
                label="Fecha y hora del abuso"
              />
              <GeneralInput
                type="text"
                label="Ubicación exacta del abuso"
                placeholder="Ingresa la dirección"
                isRequired
                className={"mt-5 max-w-screen-sm"}
                isClearable
                onClear={() => console.log("Clear")}
                color="default"
              />
              <GeneralInput
                type="text"
                label="Tipo de mascota"
                placeholder="Perro, gato, etc."
                isRequired
                className={"mt-5 max-w-screen-sm"}
                isClearable
                onClear={() => console.log("Clear")}
                color="default"
              />
              <GeneralInput
                type="text"
                label="Tipo de abuso"
                placeholder="Violencia, abandono, etc."
                isRequired
                className={"mt-5 max-w-screen-sm"}
                isClearable
                onClear={() => console.log("Clear")}
                color="default"
              />
              <Textarea
                isRequired
                label="Descripción del abuso"
                labelPlacement="outside"
                placeholder="Describe de manera detallada el abuso"
                className="mt-5 max-w-screen-sm"
              />
              <Button
                radius="full"
                className="max-w-xs mb-4 min-w-96 h-12 mt-5"
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
