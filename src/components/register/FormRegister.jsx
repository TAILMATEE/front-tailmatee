import { GeneralInput } from "../Input.jsx";
import { InputDate } from "./InputDate.jsx";
import { ButtonRegister } from "./ButtonRegister.jsx";
import { MailIcon } from "../../assets/Icons/FormIcons/MailIcon.jsx";
import UserName from "../../assets/Icons/FormIcons/UserName.svg";
import Password from "../../assets/Icons/FormIcons/Password.svg";
import Cell from "../../assets/Icons/FormIcons/Cell.svg";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import { useState } from "react";

import {

  validateName,
  validateNameMessage,
  validateLastname,
  validateLastnameMessage,
  validatePhone,
  validatePhoneMessage,
  validatePassword,
  validatePasswordMessage,
  validateConfirmPassword,
  validateConfirmPasswordMessage

} from '../../shared/validators'

import { useAuth } from "../../shared/hooks";

export const FormRegister = () => {

  const { register, isLoading } = useAuth();

  const [ selectTypeAccount, setSelectTypeAccount ] = useState();
  
  const [ formState, setFormState ] = useState({

    name: {

      value: '',
      isValid: false,
      showError: false

    },

    lastname: {

      value: '',
      isValid: false,
      showError: false

    },

    username: {

      value: '',
      isValid: false,
      showError: false

    },

    birthdate: {

      value: '',
      isValid: false,
      showError: false

    },

    gender: {

      value: '',
      isValid: false,
      showError: false

    },

    email: {

      value: '',
      isValid: false,
      showError: false

    },

    password: {

      value: '',
      isValid: false,
      showError: false

    },

    phone: {

      value: '',
      isValid: false,
      showError: false

    },

    confirmPassword: {

      value: '',
      isValid: false,
      showError: false

    }

  });

  const handleInputValueChange = (value, field) => {

    setFormState((prevState) => ({

      ...prevState,

      [field]: {

        ...prevState[field],

        value,

      },

    }));

  };

  const handleInputValidationOnBlur = (value, field) => {

    let isValid = false;

    switch(field){

      case 'name':

        isValid = validateName(value);

        break;

      case 'lastname':

        isValid = validateLastname(value);

        break;

      case 'phone':

        isValid = validatePhone(value);

        break;

      case 'password':

        isValid = validatePassword(value);

        break;

      case 'confirmPassword':

        isValid = validateConfirmPassword(formState.password.value, value);

        break;

      default:

        break;

    }

    setFormState((prevState) => ({

      ...prevState,

      [field]: {

        ...prevState[field],

        isValid,

        showError: !isValid,

      },

    }));

  };

  const handleSelect = (value) => {
    formState.gender.value=value.target.value;
  };

  const handleRegister = (event) => {

    event.preventDefault();

    register(

      formState.name.value,

      formState.lastname.value,

      formState.username.value,

      formState.birthdate.value,

      formState.gender.value,

      formState.email.value,

      formState.password.value,

      formState.phone.value

    )

  }

  const isDisabled = isLoading || !formState.name.isValid  || !formState.lastname.isValid || !formState.password.isValid || !formState.phone.isValid

  return (
    <form className="justify-items-center">
      <GeneralInput
        aria-label="name"
        type="name"
        label="Nombres"
        placeholder="Ingresa tus nombres"
        isRequired
        className={"max-w-xs mt-5 min-w-96 "}
        isClearable
        field='name'
        value={formState.name.value}
        onChangeHandler={handleInputValueChange}
        onBlurHandler={handleInputValidationOnBlur}
        showErrorMessage={formState.name.showError}
        validationMessage={validateNameMessage}

        startContent={
          <img
            src={UserName}
            alt="UserName"
            className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
          />
        }
      />
      <GeneralInput
        aria-label="lastname"
        type="name"
        label="Apellidos"
        placeholder="Ingresa tus apellidos"
        isRequired
        className={"max-w-xs mt-5 min-w-96 "}
        isClearable
        field='lastname'
        value={formState.lastname.value}
        onChangeHandler={handleInputValueChange}
        onBlurHandler={handleInputValidationOnBlur}
        showErrorMessage={formState.lastname.showError}
        validationMessage={validateLastnameMessage}
        startContent={
          <img
            src={UserName}
            alt="UserName"
            className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
          />
        }
      />

      <Select
        aria-label='gender'
        isRequired
        label="Género"
        placeholder="Selecciona tu género"
        className={"max-w-xs mt-5 min-w-96 "}
        name="gender"
        id="gender"
        value={formState.gender.value}
        onChange={handleSelect}
        onBlur={handleInputValidationOnBlur}
      >
        <SelectItem value="male" key='male'>Hombre</SelectItem>
        <SelectItem value="female" key="female">Mujer</SelectItem>
      </Select>

      <GeneralInput
        aria-label="email"
        type="email"
        label="Correo"
        placeholder="Ingresa tu correo electronico"
        isRequired
        className={"max-w-xs mt-5 min-w-96"}
        isClearable
        field='email'
        value={formState.email.value}
        onChangeHandler={handleInputValueChange}
        onBlurHandler={handleInputValidationOnBlur}
        showErrorMessage={formState.email.showError}

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
        field='username'
        value={formState.username.value}
        onChangeHandler={handleInputValueChange}
        onBlurHandler={handleInputValidationOnBlur}
        showErrorMessage={formState.username.showError}

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
        field='phone'
        value={formState.phone.value}
        onChangeHandler={handleInputValueChange}
        onBlurHandler={handleInputValidationOnBlur}
        showErrorMessage={formState.phone.showError}
        validationMessage={validatePhoneMessage}

        startContent={
          <img
            src={Cell}
            alt="UserName"
            className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
          />
        }
      />
      <InputDate 
        field='birthdate'
        onBlur={handleInputValidationOnBlur}
        onChange={(value) => (formState.birthdate.value =(`${value.month}/${value.day}/${value.year}`))}
      />
      <GeneralInput
        type="password"
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
        isRequired
        className={"max-w-xs mt-5 min-w-96"}
        isClearable
        field='password'
        value={formState.password.value}
        onChangeHandler={handleInputValueChange}
        onBlurHandler={handleInputValidationOnBlur}
        showErrorMessage={formState.password.showError}
        validationMessage={validatePasswordMessage}

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
        field='confirmPassword'
        value={formState.confirmPassword.value}
        onChangeHandler={handleInputValueChange}
        onBlurHandler={handleInputValidationOnBlur}
        showErrorMessage={formState.confirmPassword.showError}
        validationMessage={validateConfirmPasswordMessage}

        startContent={
          <img
            src={Password}
            alt="Password"
            className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
          />
        }
      />
      <Button
          radius="full"
          className={`max-w-xs mt-[50px] min-w-96 h-[50px] ${
            isDisabled ? "bg-gray-400" : "bg-warning-500"
          }`}
          color="warning"
          type="submit"
          onClick={handleRegister}
          disabled={isDisabled}
        >
          Register
        </Button>
    </form>
  );
};
