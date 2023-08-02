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