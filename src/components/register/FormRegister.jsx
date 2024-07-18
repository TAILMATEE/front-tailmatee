import { GeneralInput } from "../Input.jsx";
import { InputDate } from "./InputDate.jsx";
import { ButtonRegister } from "./ButtonRegister.jsx";
import { MailIcon } from "../../assets/Icons/FormIcons/MailIcon.jsx";
import UserName from "../../assets/Icons/FormIcons/UserName.svg";
import Password from "../../assets/Icons/FormIcons/Password.svg";
import Cell from "../../assets/Icons/FormIcons/Cell.svg";
import { Select, SelectItem } from "@nextui-org/react";

export const FormRegister = () => {
  return (
    <form className="justify-items-center">
      <GeneralInput
        type="name"
        label="Nombres"
        placeholder="Ingresa tus nombres"
        isRequired
        className={"max-w-xs mt-5 min-w-96 "}
        isClearable
        startContent={
          <img
            src={UserName}
            alt="UserName"
            className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
          />
        }
      />
      <GeneralInput
        type="name"
        label="Apellidos"
        placeholder="Ingresa tus apellidos"
        isRequired
        className={"max-w-xs mt-5 min-w-96 "}
        isClearable
        startContent={
          <img
            src={UserName}
            alt="UserName"
            className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
          />
        }
      />

      <Select
        isRequired
        label="Género"
        placeholder="Selecciona tu género"
        className={"max-w-xs mt-5 min-w-96 "}
      >
        <SelectItem value="male">Hombre</SelectItem>
        <SelectItem value="female">Mujer</SelectItem>
      </Select>

      <GeneralInput
        type="email"
        label="Correo"
        placeholder="Ingresa tu correo electronico"
        isRequired
        className={"max-w-xs mt-5 min-w-96"}
        isClearable
        onClear={() => console.log("Clear")}
        startContent={
          <MailIcon
            className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
            fill="#EAA023"
          />
        }
      />
      <GeneralInput
        type="userName"
        label="Nombre Usuario"
        placeholder="Ingresa tu nombre de usuario"
        isRequired
        className={"max-w-xs mt-5 min-w-96"}
        isClearable
        startContent={
          <img
            src={UserName}
            alt="UserName"
            className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
          />
        }
      />
      <GeneralInput
        type="cell"
        label="Teléfono"
        placeholder="Ingresa tu teléfono"
        isRequired
        className={"max-w-xs mt-5 min-w-96"}
        isClearable
        startContent={
          <img
            src={Cell}
            alt="UserName"
            className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
          />
        }
      />
      <InputDate />
      <GeneralInput
        type="password"
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
        isRequired
        className={"max-w-xs mt-5 min-w-96"}
        isClearable
        startContent={
          <img
            src={Password}
            alt="Password"
            className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
          />
        }
      />
      <GeneralInput
        type="password"
        label="Confirmar Contraseña"
        placeholder="Confirma tu contraseña"
        isRequired
        className={"max-w-xs mt-5 min-w-96"}
        isClearable
        startContent={
          <img
            src={Password}
            alt="Password"
            className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
          />
        }
      />
      <ButtonRegister />
    </form>
  );
};
