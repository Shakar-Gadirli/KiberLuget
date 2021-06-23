import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Home = props => {
    
    const [state, setState] = useState('')

    useEffect(() => {
      axios.get('http://localhost:5000/home')
        .then((res) => {
          setState(res.data)
        })
    }, [])


  return(
    <div>
      <p>{state}</p>
    </div>
 )
};

export default Home;