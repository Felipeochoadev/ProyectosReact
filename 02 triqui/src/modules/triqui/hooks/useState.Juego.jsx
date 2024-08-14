import { useState } from 'react'
import { Turnos } from '../constants/constants.global'
import { ValidarGanador, ValidarJuego } from '../logic/logic.global'
import confetti from 'canvas-confetti'
import { ReiniciarPartida, ObtenerPartida, GuardarPartida } from '../logic/storage/storage.global'

export const useStateJuego = () => {
  const [Tabla, setTabla] = useState(
    () => {
      const RecuperarTabla = ObtenerPartida('Tabla')
      return RecuperarTabla ? JSON.parse(RecuperarTabla) : Array(9).fill(null)
    }
  )

  const [Jugador, setJugador] = useState(
    () => {
      const RecuperarTurno = ObtenerPartida('Turno')
      return RecuperarTurno ?? Turnos.X
    }
  )

  const [Ganador, setGanador] = useState(
    null
  )

  const Reiniciar = () => {
    setTabla(Array(9).fill(null))
    setJugador(Turnos.X)
    setGanador(null)
    ReiniciarPartida()
  }

  const Actualizar = (index) => {
    if (Tabla[index] || Ganador) {
      return
    }
    const nuevaTabla = [...Tabla]
    nuevaTabla[index] = Jugador
    setTabla(nuevaTabla)
    const NuevoTurno = Jugador === Turnos.X ? Turnos.O : Turnos.X
    setJugador(NuevoTurno)
    GuardarPartida(
      {
        Tabla: nuevaTabla,
        Turno: NuevoTurno
      }
    )
    const NuevoGanador = ValidarGanador(nuevaTabla)
    if (NuevoGanador) {
      confetti()
      setGanador(NuevoGanador)
      ReiniciarPartida()
    } else if (ValidarJuego(nuevaTabla)) {
      setGanador(false)
    }
  }

  return {
    Tabla,
    setTabla,
    Jugador,
    setJugador,
    Ganador,
    setGanador,
    Reiniciar,
    Actualizar
  }
}
