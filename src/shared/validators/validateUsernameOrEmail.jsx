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
  "The username need to be between 3 and 25 characters long | The email need to be valid";
