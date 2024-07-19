import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import logo from "../assets/img/logoWhite.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../shared/hooks";

export const NavBarTailhouse = () => {
  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleHome = () => {
    navigate("/home");
  };

  return (
    <Navbar className="bg-yellow w-full h-24">
      <NavbarBrand onClick={handleHome} className="cursor-pointer">
        <img src={logo} alt="logo" className="w-[25px] h-[25px] mr-2.5" />
        <h1 className="font-sansita text-h3 text-blue">Tailmatee</h1>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/home">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/mytailfriends" aria-current="page" color="secondary">
            My TailFriends
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/petitionadoption">
            Peticiones de Adopción
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Bienvenid@ 👋</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="profile" onClick={handleProfile}>
              Mi perfil
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={logout}>
              Cerrar Sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
