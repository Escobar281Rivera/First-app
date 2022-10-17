import express, { Application } from 'express'
import morgan from 'morgan'

class Server {
    private app: Application
    public static readonly PORT: 3000
    public port: string | number

    constructor() {
        this.app = express()
    }

    middlewares() {

        this.app.use(morgan('dev'))
        //*  WRITING TO THE BODY
        this.app.use(express.json({ limit: '50mb' }))

        // * PARSE TO THE BODY
        this.app.use(express.urlencoded({ extended: true, limit: '50mb' }))
    }

    listen() {
        this.app.listen((this.port = process.env.PORT || Server.PORT), () => {
            console.log(`Server running in  ${this.port}`)
        })
    }

}

export default Server 