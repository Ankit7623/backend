import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/jokes')
    .then((response) => {
      setJokes(response.data);
    })
    .catch((error) => {
      console.error('Error fetching jokes:', error);
    });
  })

  return (
    <>
    <h1>Chai and full stack</h1>
    <p>JOKES: {jokes.length}</p>

    {
      jokes.map((joke, index) => {
        <dev key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </dev>
      })
    }
    </>
  )
}

export default App