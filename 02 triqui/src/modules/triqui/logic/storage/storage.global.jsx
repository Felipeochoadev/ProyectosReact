export const GuardarPartida = ({ Tabla, Turno }) => {
  window.localStorage.setItem('Tabla', JSON.stringify(Tabla))
  window.localStorage.setItem('Turno', Turno)
}

export const ReiniciarPartida = () => {
  window.localStorage.removeItem('Tabla')
  window.localStorage.removeItem('Turno')
}

export const ObtenerPartida = (Elemento) => {
  switch (Elemento) {
    case 'Turno':
    case 'Tabla':

      break
    default:
      // eslint-disable-next-line no-undef
      alert('ObtenerPartida() ::: El elemento ' + Elemento + ' No esta permitido')
      return false
  }
  return window.localStorage.getItem(Elemento)
}
