import { GeneralInput } from './Input';
import { MailIcon } from '../assets/Icons/FormIcons/MailIcon.jsx';
import Password  from '../assets/Icons/FormIcons/Password.svg';

export const Form = () => {

    return (
        <form>
            {/* EmailInput */}
            <GeneralInput
                type="email"
                label="Email"
                placeholder="Enter your email"
                isRequired
                className={"max-w-xs h-[60px]"}
                isClearable
                onClear={() => console.log("Clear")}
                startContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" fill="#EAA023" />
                }
                color="warning"
            />
            <GeneralInput
                type="password"
                label="Password"
                placeholder="Enter your password"
                isRequired
                className={"max-w-xs mt-3"}
                color="warning"
                isClearable
                startContent={
                    <img src={Password} alt="Password" className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
            />
        </form>
    );
}