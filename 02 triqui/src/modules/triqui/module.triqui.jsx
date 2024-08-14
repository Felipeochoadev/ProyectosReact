// [Requerido] ::::: npm install canvas-confetti -E
import './module.triqui.css'
import { useStateJuego } from './hooks/useState.Juego.jsx'
import { GanadorModal } from './components/GanadorModal.jsx'
import { JugadorActivo } from './components/JugadorActivo.jsx'
import { BotonReiniciar } from './components/BotonReiniciar.jsx'
import { TablaJuego } from './components/TablaJuego.jsx'

function Triqui () {
  const { Tabla, Jugador, Ganador, Reiniciar, Actualizar } = useStateJuego()
  return (
    <section className='Tabla'>
      <h1>
        Triqui
      </h1>
      <BotonReiniciar Reiniciar={Reiniciar}> </BotonReiniciar>
      <TablaJuego Tabla={Tabla} Actualizar={Actualizar}> </TablaJuego>
      <JugadorActivo Jugador={Jugador}> </JugadorActivo>
      <GanadorModal Ganador={Ganador} Reiniciar={Reiniciar}> </GanadorModal>
    </section>
  )
}

export default Triqui
