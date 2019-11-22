import React, {useState, useEffect} from 'react'
import HelloWorld from './components/HelloWorld'
import axios from 'axios'
import DifficultyChoice from './components/DifficultyChoice'
import InitializeMap from './components/InitializeMap'


const App = () => {
  const[table,getTable]=useState([])
  const[gameId, setGameId]=useState(0)
  const[dNumber, setDNumber]=useState(0)
  
  

  const createTheTable = async (difficulty) => {
    const response = await axios.post('https://minesweeper-api.herokuapp.com/games', {difficulty:difficulty})
    console.log(response.data)
    getTable(response.data.board)
    setGameId(response.data.id)
    
    
    
  }

  useEffect(() => {
    console.log('using the effect')
    createTheTable()
  },[])

return(
  <>
<DifficultyChoice
dNumber={dNumber}
setDNumber={setDNumber}
createTheTable={createTheTable}
/>
<InitializeMap
table={table}
/>
  </>
)

}

export default App
