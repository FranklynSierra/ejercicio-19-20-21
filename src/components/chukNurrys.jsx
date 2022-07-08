import React, {useState, useEffect} from 'react';

import axios from 'axios'

const ChukNurris = () => {
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [state, setstate] = useState({
        joke:''
    });
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        fetchData();
   
    }, []);
    const fetchData=async()=>{
        const result=await axios.get('https://api.chucknorris.io/jokes/random')
    setstate({
        ...state,
        joke:result.data.value
    })
    }
    const handleButtonClick = () => {
        setButtonClicked(true)
    }
    const handleClick1 = () => {
        // Counter state is incremented
        setCounter(counter + 1)
      }
      const handleClick2 = () => {
        // Counter state is incremented
        setCounter2(counter2 + 1)
      }
 
    return (
        <div>
            <h1>Chuck Norris</h1>
            <button className='boton-principal' 
                onClick={handleButtonClick}> Jokes
            </button>
            
           {buttonClicked ? (<h2>{state.joke}</h2>): null}

      
      <div style={{
        fontSize: '120%',
     
        top: '10vh',
      }}>
      
        <button className='like' onClick={handleClick1}>Like</button>
       
    
    
        {counter}
  
      </div>
      <div style={{
        fontSize: '120%',
       
        top: '10vh',
      }}>
     <button className='dislike' onClick={handleClick2}>disLike</button>
        {counter2}
      </div>
    
       
        </div>
    );
}

export default ChukNurris;
