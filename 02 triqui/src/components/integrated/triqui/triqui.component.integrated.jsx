import './triqui.component.integrated.css'
const Turnos = {
    X : '×',
    O : 'o'
};

const Tabla = Array(9).fill(null);

const Cuadro = ({ children, update, index }) => {
    return (
        <div className='Cuadro'>
            {children}
        </div>
    )
}

function Triqui() {
    return (
        <section className='Tabla'>
            <h1>
                Juego Triqui
            </h1>
            <section className='ContenedorJuego'>
                <div className='Juego'>
                    {
                        Tabla.map( 
                            (_, index) =>  {
                                return (
                                    <Cuadro
                                        key={index}
                                        index={index}
                                    >
                                        {index}
                                    </Cuadro>
                                )
                            }
                        )
                    }
                </div>
            </section>
        </section>
    )
}

export default Triqui