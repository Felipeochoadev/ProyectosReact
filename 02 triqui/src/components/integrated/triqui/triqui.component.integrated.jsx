import { useState } from 'react';
import './triqui.component.integrated.css'

const Turnos = {
    X : 'X',
    O : 'O'
};

const Cuadro = ({ children, Seleccionado, update, index }) => {
    const ClaseJugador = `Cuadro ${ Seleccionado ? "Seleccionado" : "" }`;
    const HacerClick = () => {
        update();
    }

    return (
        <div onClick={HacerClick} className={ClaseJugador}>
            {children}
        </div>
    )
}

function Triqui() {
    const [Tabla, setTabla] = useState( 
        Array(9).fill(null)
    );

    const [Jugador, setJugador] = useState(
        Turnos.X
    );

    const update = () => {
        const NuevoTurno = Jugador == Turnos.X ? Turnos.O : Turnos.X;
        setJugador(NuevoTurno);
    }

    return (
        <section className='Tabla'>
            <h1>
                Triqui
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
                                        update={update}
                                    >
                                        
                                    </Cuadro>
                                )
                            }
                        )
                    }
                </div>
            </section>
            <section className='Jugador'>
                <Cuadro Seleccionado={ Jugador === Turnos.X } >
                    {Turnos.X}
                </Cuadro>
                <Cuadro Seleccionado={ Jugador === Turnos.O }>
                    {Turnos.O}
                </Cuadro>
            </section>
            
        </section>
    )
}

export default Triqui