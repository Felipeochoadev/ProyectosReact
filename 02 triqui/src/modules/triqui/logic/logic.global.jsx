import { ComboGanador } from '../constants/constants.global'

export const ValidarJuego = (nuevaTabla) => {
  return nuevaTabla.every((Cuadro) => Cuadro != null)
}

export const ValidarGanador = (Tabla) => {
  for (const Combo of ComboGanador) {
    const [a, b, c] = Combo
    if (
      Tabla[a] &&
      Tabla[a] === Tabla[b] &&
      Tabla[a] === Tabla[c]
    ) {
      return Tabla[a]
    }
  }
  return null
}
