import React ,{useState,useEffect} from 'react'

function Mousemove() {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)

    useEffect(() => {
        console.log('Use effect called now')
        window.addEventListener('mousemove',mouseposition)
    },[])

    const mouseposition = (e)=>{
        console.log('mouse position called')
        setx(e.clientX)
        sety(e.clientY)
    }

    return (
        <div>
            <h4>X position - {x}</h4>
            <h4>Y position - {y}</h4>
        </div>
    )
}

export default Mousemove
