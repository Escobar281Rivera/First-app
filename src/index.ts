import dotnev from 'dotenv'
import Server from './server/server'
dotnev.config()
const server = new Server()
server.listen()