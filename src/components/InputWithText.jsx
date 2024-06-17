import { useState } from 'react'
import '../css/InputWithText.css'

function InputWithText() {
    const [inputValue, setInputValue] = useState('')


    function onChangeHandler(event) {
        setInputValue(event.target.value)
        console.log(inputValue)
    }



    return (
        <div className='container'>
            <input type="text" placeholder='Digite aqui...' onChange={onChangeHandler}/>
            <h1>{inputValue}</h1>
        </div>
    )
}

export default InputWithText