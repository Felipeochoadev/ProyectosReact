import { Cuadro } from './Cuadro'

export const TablaJuego = ({ Tabla, Actualizar }) => {
  return (
    <section className='ContenedorJuego'>
      <div className='Juego'>
        {
          Tabla.map(
            (_, index) => {
              return (
                <Cuadro
                  key={index}
                  index={index}
                  update={Actualizar}
                >
                  {Tabla[index]}
                </Cuadro>
              )
            }
          )
        }
      </div>
    </section>
  )
}
