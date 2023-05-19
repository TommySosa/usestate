import { useState, useEffect } from "react";
import ListaEquipaje from "./ListaEquipaje";
function CountWithHooks() {

    const [count, setCount] = useState(0);

    function handleCount() {
        setCount(count + 1);
    }
    useEffect(()=> {
        document.title = 'Clicks realizados: ' + count
    }, [count])

    useEffect(()=>{
        document.title = 'Contador de clicks realizados'
    },[]) 

    return (
        <div>
            <h2>Contador: {count}</h2>
            <button onClick={(handleCount) } className="btn btn-primary">Click aquí</button>
        </div>
    );
}

export default CountWithHooks;