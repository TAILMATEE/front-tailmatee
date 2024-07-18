import { GeneralInput } from '../../Input';
import { MailIcon } from '../../../assets/Icons/FormIcons/MailIcon.jsx';
import { Button, user } from "@nextui-org/react";
import Password from '../../../assets/Icons/FormIcons/Password.svg';
 
import {Link} from 'react-router-dom';
 
import { useState } from 'react';
 
import { useAuth } from '../../../shared/hooks';
 
import  {
 
    validatePasswordMessage,
    validatePassword,
    validateUsernameOrEmail,
    validateUsernameOrEmailMessage
 
} from '../../../shared/validators';
 
export const FormLogin = () => {
 
    const { login, isLoading } = useAuth();
 
    const [formState, setFormState] = useState({
 
        usernameOrEmail: {
 
            value: '',
            isValid: false,
            showError: false
 
        },
 
        password: {
               
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
 
    }
 
    const handleInputValidationOnBlur = ( value, field ) => {
 
        let isValid = false;
 
        switch(field){
 
 
            case 'usernameOrEmail':
 
                isValid = validateUsernameOrEmail(value);
 
                break;
 
            case 'password':
 
                isValid = validatePassword(value);
 
                break;
 
            default:
 
                break;
 
        }
 
        setFormState((prevState) => ({
 
            ...prevState,
 
            [field]: {
 
                ...prevState[field],
 
                isValid,

                showError: !isValid
 
            },
 
        }));
 
    }
 
    const handleLogin = (event) => {
 
        event.preventDefault();
 
        login(formState.usernameOrEmail.value, formState.password.value);
 
    }
 
    const buttonDisabled = isLoading || !formState.usernameOrEmail.isValid || !formState.password.isValid
 
    return (
        <form className="w-[50%] h-full content-center basis-1/4">
            <h1 className='font-lato text-[30px] font-bold text-center mb-[55px]'>
                Inicia Sesión
            </h1>
            <section>
                <GeneralInput
                    field='usernameOrEmail'
                    type="text"
                    label="Correo o Usuario"
                    placeholder="Ingresa tu correo o usuario"
                    isRequired
                    className={"max-w-xs mt-[25px] min-w-96"}
                    isClearable
                    onClear={() => console.log("Clear")}
                    startContent={
                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" fill="#EAA023" />
                    }
                    color="default"
                    value={formState.usernameOrEmail.value}
                    onChangeHandler={handleInputValueChange}
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.usernameOrEmail.showError}
                    validationMessage={validateUsernameOrEmailMessage}
                />
                <GeneralInput
                    field='password'
                    type="password"
                    label="Contraseña"
                    placeholder="Ingresa tu contraseña"
                    isRequired
                    className={"max-w-xs mt-[25px] min-w-96"}
                    color="default"
                    isClearable
                    startContent={
                        <img src={Password} alt="Password" className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={validatePasswordMessage}
                />
                <Button
                    radius="full"
                    className={`max-w-xs mt-[50px] min-w-96 h-[50px] ${buttonDisabled ? 'bg-gray-400' : 'bg-warning-500'}`}
                    color="warning"
                    type='submit'
                    onClick={handleLogin}
                    disabled={buttonDisabled}
                >
                    Login
                </Button>
            </section>
        </form>
    );
};