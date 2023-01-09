import './Contador.scss'
import { useState } from "react"

const Contador = (props) => {
    //Inicializamos los valores del componente
    const [ initialCant, setInitialCant ] = useState(Number(props.initVal) || 0)


    const increment = () => {
        setInitialCant(initialCant + (Number(props.sum) || 1)) 
    }

    const decrement = () => {
        setInitialCant(initialCant - (Number(props.res) || 1))
    }

    return (
        <div className="Contador">
            {/*<button onClick={increment()}>+</button> con () se llama al cargar el componente*/}
            <button onClick={increment}>+</button> {/*con () se llama al cargar el componente*/}
            <h1>{initialCant}</h1>
            {/*  */}
            <button onClick={()=> { decrement() }}>-</button>
        </div>
    )
}

export default Contador