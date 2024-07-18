export const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[1-9])(?=.*[!$%#])\S{6,12}$/
  
    return regex.test(password)
  }
  
  export const validatePasswordMessage =
    'Uno de los parámetros necesarios falta: una letra mayúscula, un número del 1 al 9, un carácter especial, mínimo 6 caracteres.'