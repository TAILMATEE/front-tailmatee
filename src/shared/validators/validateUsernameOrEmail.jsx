export const validateUsernameOrEmail = (usernameOrEmail) => {
  if (usernameOrEmail.includes("@")) {
    const regex = /\S+@\S+\.\S+/;

    return regex.test(usernameOrEmail);
  } else {
    const regex = /^\S{3,25}$/;

    return regex.test(usernameOrEmail);
  }
};
export const validateUsernameOrEmailMessage =
  "El nombre de usuario debe tener entre 3 y 25 caracteres de longitud | El correo electrónico debe ser válido.";
