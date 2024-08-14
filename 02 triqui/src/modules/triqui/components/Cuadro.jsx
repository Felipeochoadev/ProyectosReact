export const Cuadro = ({ children, Seleccionado, update, index }) => {
  const ClaseJugador = `seleccion Cuadro ${Seleccionado ? 'Seleccionado' : ''}`
  const HacerClick = () => {
    update(index)
  }

  return (
    <div onClick={HacerClick} className={ClaseJugador}>
      {children}
    </div>
  )
}
