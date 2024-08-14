import { Cuadro } from './Cuadro'
import { Turnos } from '../constants/constants.global'

export const JugadorActivo = ({ Jugador }) => {
  return (
    <section className='Jugador'>
      <Cuadro Seleccionado={Jugador === Turnos.X}>
        {Turnos.X}
      </Cuadro>
      <Cuadro Seleccionado={Jugador === Turnos.O}>
        {Turnos.O}
      </Cuadro>
    </section>
  )
}
