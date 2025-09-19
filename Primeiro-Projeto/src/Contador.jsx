import { useState } from 'react'

function contador(){

    const [count, setcount]=useState(0)
    return (
        <div style={{marginTop: '20px'}}>
            <h2>Contador: {count}</h2>
            <button onClick={() =>setcount(count + 1)}>Incrementar</button>
            <button onClick={() => setcount(count - 1)} style={{marginLeft:'10px'}}>Decrementar</button>
            <button onClick={() => setcount(0) } style={{marginLeft: '10px'}}>Resetar</button>
        </div>
    )
}
export default contador