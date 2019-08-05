import { io } from '../server'
import { Usuarios } from '../classes/usuarios'
import { crearMensaje } from '../utils/util'

const usuarios = new Usuarios()

io.on('connection', client => {
  console.log('usuario connectado.')

  const listarPersonas = () => {
    client.broadcast.emit('listarPersonas', usuarios.getPersonas())
  }
  const adminMessage = (persona, accion) => {
    client.broadcast.emit(
      'crearMensaje',
      crearMensaje(
        'Administrador',
        `El usuario ${persona.nombre} a ${accion} el chat.`
      )
    )
  }
  client.on('entrarChat', (usuario, callback) => {
    if (!usuario.nombre) {
      callback({
        err: true,
        mensaje: 'el nombre es necesario.'
      })
    }
    usuarios.agregarPersona(client.id, usuario.nombre)
    callback({ res: usuarios.getPersonas() })
    adminMessage(usuario, 'ingreso')
    listarPersonas()
  })

  client.on('disconnect', () => {
    const personaBorrada = usuarios.borrarPersona(client.id)

    adminMessage(personaBorrada, 'abandono')
    listarPersonas()
  })

  client.on('crearMensaje', data => {
    const persona = usuarios.getPersona(client.id)
    client.broadcast.emit(
      'crearMensaje',
      crearMensaje(persona.nombre, data.mensaje)
    )
  })
})
