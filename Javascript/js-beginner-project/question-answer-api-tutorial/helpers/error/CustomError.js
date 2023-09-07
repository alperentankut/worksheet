class CustomError extends Error {
    constructor(message,status){
        super(message); //Error classı içindeki message ı almak için super kullandık.
        this.status = status;
    }
}

module.exports = CustomError