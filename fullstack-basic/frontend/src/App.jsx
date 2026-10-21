import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error);
      });
  }, []);

  return (
    <>
    <h1>Chai and full stack</h1>
    <p>JOKES: {jokes.length}</p>

    {
      jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App