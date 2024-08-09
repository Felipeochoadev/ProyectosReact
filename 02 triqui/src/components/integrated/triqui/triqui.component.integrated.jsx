import { useState } from 'react';
import './triqui.component.integrated.css'
import 'canvas-confetti'
import confetti from 'canvas-confetti';

const Turnos = {
    X : 'X',
    O : 'O'
};

const ComboGanador = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8]
]


const Cuadro = ({ children, Seleccionado, update, index }) => {
    const ClaseJugador = `Cuadro ${ Seleccionado ? "Seleccionado" : "" }`;
    const HacerClick = () => {
        update(index);
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

    const [Ganador, setGanador] = useState(
        null
    )

    const ValidarGanador = (Tabla) => {
        for (const Combo of ComboGanador) {
            const [a, b, c] = Combo;
            if (
                Tabla[a] &&
                Tabla[a] === Tabla[b] &&
                Tabla[a] === Tabla[c]
            ){
                return Tabla[a];
            }
        }
        return null;
    }

    const ValidarJuego = (nuevaTabla) => {
        return nuevaTabla.every( (Cuadro) => Cuadro != null );
    }

    const update = (index) => {
        if(Tabla[index] || Ganador){
            return
        }
        const nuevaTabla = [ ... Tabla];
        nuevaTabla[index] = Jugador;
        setTabla(nuevaTabla);
        const NuevoTurno = Jugador == Turnos.X ? Turnos.O : Turnos.X;
        setJugador(NuevoTurno);

        const NuevoGanador = ValidarGanador(nuevaTabla);
        if(NuevoGanador){
            confetti();
            setGanador(NuevoGanador);
        } else if( ValidarJuego(nuevaTabla) ){
            setGanador(false);
        }

    }

    const Reiniciar = () => {
        setTabla( Array(9).fill(null) );
        setJugador( Turnos.X );
        setGanador( null );
    }
    
    return (
        <section className='Tabla'>
            <h1>
                Triqui
            </h1>
            <button className='BotonReiniciar' onClick={Reiniciar}>
                Reiniciar Juego
            </button>
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
                                        {Tabla[index]}
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
            {
                Ganador != null && (
                    <section className='Resultado'>
                        <div className='Texto'>
                            <h1>
                                { 
                                    Ganador == false
                                    ? 'Empate'
                                    : 'Gano'
                                }
                            </h1>
                        </div>
                        <header className='Ganador'>
                            {
                                Ganador && (
                                    <Cuadro> 
                                        {Ganador}
                                    </Cuadro>
                                )
                            }
                        </header>
                        <footer>
                            <button className='BotonReiniciar' onClick={Reiniciar}>
                                Reiniciar Juego
                            </button>
                        </footer>
                    </section>
                )
            }
        </section>
    )
}

export default Triqui