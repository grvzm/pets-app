import React from 'react';
import './App.css';
import pets from './pets';

function App() {
    return (
    <div className='App'>
      <h1 className='header'>Pets</h1>
      <ul className='container'>
        {
          pets.map((pet, index)=>(
            <li key={index}>
              <h1>{pet.name}</h1>
              <p>{pet.description}</p>
              <img src={pet.image}
                alt={pet.name}
                width="200px"
                height="200px" />
              <ul className='skills'>
                {
                  pet.skills.map((skill,index)=>(
                    <li key={skill}>{skill}</li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;
