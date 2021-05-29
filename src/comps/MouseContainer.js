import React ,{useState} from 'react'
import Mousemove from './Mousemove'

function MouseContainer() {
    const [state, setstate] = useState(true)

    return (
        <div>
            <button onClick={()=>setstate(!state)}>Click to change</button>
            {state && <Mousemove/>}
        </div>
    )
}

export default MouseContainer
