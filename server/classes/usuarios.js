export class Usuarios {
  constructor () {
    this.personas = []
  }

  agregarPersona (id, nombre) {
    this.personas.push({ id, nombre })
    return this.personas
  }

  getPersona (id) {
    return this.personas.find(p => p.id === id)
  }

  getPersonas () {
    return this.personas
  }

  getPersonasPorSala (sala) {
    // ...
  }

  borrarPersona (id) {
    const personaBorrada = this.getPersona(id)
    this.personas = this.personas.filter(p => p.id !== id)

    return personaBorrada
  }
}
