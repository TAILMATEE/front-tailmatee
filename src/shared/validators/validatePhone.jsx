export const validatePhone = (phone) => {

    const regex = /^\S{1,8}$/

    return regex.test(phone)

}

export const validatePhoneMessage = 'Se necesita un teléfono de entre 1 y 8 caracteres'