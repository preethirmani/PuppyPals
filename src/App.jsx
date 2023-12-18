import { useState } from 'react';
import { puppyList } from './data.js'
import './App.css'
import './index.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeetPupId] = useState(null);
  console.log(puppies);

  function handleClick() {

  }
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log('FeaturedPup::', featuredPup);
  return (
    <>
      <div >
        {featPupId && (
        <div className='card'> 
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
        )}
        {
          puppies.map((puppy) => {
            return <p key={puppy.id}  onClick={() => 
              {console.log(puppy.id)
              setFeetPupId(puppy.id )
              return setFeetPupId;
              }}>
                {puppy.name}</p>
          })
        }
       
      </div>
      
    </>
  )
}

export default App
