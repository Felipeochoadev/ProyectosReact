import { Cuadro } from './Cuadro'
import { BotonReiniciar } from './BotonReiniciar'

export const GanadorModal = ({ Ganador, Reiniciar }) => {
  if (Ganador === null) {
    return null
  }
  const Resultado = Ganador === false ? 'Empate' : 'Gano'

  return (
    <section className='Resultado'>
      <div className='Texto'>
        <h1>
          {Resultado}
        </h1>
      </div>
      <header className='Ganador '>
        {
            Ganador && (
              <Cuadro>
                {Ganador}
              </Cuadro>
            )
        }
      </header>
      <footer>
        <BotonReiniciar Reiniciar={Reiniciar}> </BotonReiniciar>
      </footer>
    </section>
  )
}
