import { Accordion, AccordionItem } from "@nextui-org/react";

export const DenouncementForm = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <section className="p-20">
        <Accordion variant="splitted">
          <AccordionItem
            key="1"
            aria-label="Ubicación y lugar"
            title="Ubicación y lugar"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Tipo de mascota y de abuso"
            title="Tipo de mascota y de abuso"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Detalles de la denuncia"
            title="Detalles de la denuncia"
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
        <div>
            
        </div>
      </section>
    </>
  );
};
