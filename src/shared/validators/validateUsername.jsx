export const validateUsername = (username) => {

    const regex = /^\S{1,19}$/

    return regex.test(username)

}

export const validateUsernameMessage = 'El nombre de usuario debe tener entre 1 y 20 caracteres'