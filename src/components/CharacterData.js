import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharCard from './CharCard'

export default function Charlist () {
  const [chars, setChars] = useState([])

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/?page=1&status=alive')    
      .then(res => {
        console.log(res)
        setChars(res.data.results)
      })
      .catch(err => {
        window.alert(err.message)
      })
  }, [])

  console.log('Characters:', chars)

  return (
    <div>

      <div>
        {/* gets data from CharCard component */}
        {chars.map(char => {
          return <CharCard key={char.id} char={char} /> 
        })}

      </div>

    </div>

  )
}