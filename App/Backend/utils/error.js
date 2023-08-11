export class ConnectionError extends Error{
    constructor(message){
        super(message)
        this.name = 'ConnectionError',
        this.message = 'Error en la conexion, intente nuevamente mas tarde'
    }
}
export class MailError extends Error{
    constructor(message){
        super(message)
        this.name = 'MailError',
        this.message = 'El mail ya se encuentra asociado a otra persona'

    }
}

export class ServerError extends Error{
    constructor(message){
        super(message)
        this.name = 'Server Error',
        this.message = 'Error en el servidor, intente mas tarde!'

    }
}

export class PasswordError extends Error{
    constructor(message){
        super(message)
        this.name = 'Password Error',
        this.message = 'La contraseña ingresada es incorrecta'

    }
}

export class LoginMailError extends Error{
    constructor(message){
        super(message)
        this.name = 'Login Mail Error',
        this.message = 'El mail no se encuentra asociado a ninguna cuenta'

    }
}
export class FillError extends Error{
    constructor(message){
        super(message)
        this.name = 'Fill Error',
        this.message = 'No se han ingresado todos los datos'

    }
}

export class AuthError extends Error{
    constructor(message){
        super(message)
        this.name = 'Auth Error',
        this.message = 'Error al verificar la autenticación'

    }
}