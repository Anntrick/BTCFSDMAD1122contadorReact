import { useState } from "react"
import './Contador.scss'

const Contador = () => {
    //Inicializamos los valores del componente
    const [ initialCant, setInitialCant ] = useState(0)

    const increment = () => {
        setInitialCant(initialCant + 1) 
    }

    const decrement = (cant) => {
        setInitialCant(initialCant - cant)
    }

    return (
        <div className="Contador">
            {/*<button onClick={increment()}>+</button> con () se llama al cargar el componente*/}
            <button onClick={increment}>+</button> {/*con () se llama al cargar el componente*/}
            <h1>{initialCant}</h1>
            {/*  */}
            <button onClick={()=> { decrement(3) }}>-</button>
        </div>
    )
}

export default Contador