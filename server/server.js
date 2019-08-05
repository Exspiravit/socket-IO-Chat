import express from 'express'
import socketIO from 'socket.io'
import http from 'http'

import { resolve } from 'path'

const app = express()
const server = http.createServer(app)

const publicPath = resolve(__dirname, '../public')
const port = process.env.PORT || 3000

app.use(express.static(publicPath))

// IO = esta es la comunicacion del backend
export const io = socketIO(server)
require('./sockets/socket')

server.listen(port, err => {
  if (err) throw new Error(err)

  console.log(`Servidor corriendo en puerto ${port}`)
})
