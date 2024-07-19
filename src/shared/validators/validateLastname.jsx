export const validateLastname = (lastname) => {

    const regex = /^\S{1,50}$/

    return regex.test(lastname)

}

export const validateLastnameMessage = 'Se necesita que el apellido tenga entre 1 y 50 caracteres'