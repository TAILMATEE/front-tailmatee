export const validateName = (name) => {
  const regex = /^\S{1,50}$/;

  return regex.test(name);
};

export const validateNameMessage =
  "Se necesita un nombre de entre 1 y 50 caracteres";
