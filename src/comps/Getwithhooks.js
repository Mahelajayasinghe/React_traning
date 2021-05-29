import React,{useEffect,useState} from 'react'
import axios from 'axios'

function Getwithhooks() {
    const [state, setstate] = useState({})
    const [num, changenum] = useState(1)
    const [num1, changenum1] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${num1}`)
        .then((response)=>{
            console.log(response)
            setstate(response.data)
        })
    }, [num1])
    return (
        <div>
          <input type="text" value={num} onChange={(e)=>{changenum(e.target.value)}}/>
          <button onClick={()=>{changenum1(num)}}>Click to enter</button>
          <h2>{state.title}</h2>
        </div>
    )
}

export default Getwithhooks
