import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DifficultyChoice from './components/DifficultyChoice'
import InitializeMap from './components/InitializeMap'



const App = () => {
  const[board,getBoard]=useState([])
  const[gameId, setGameId]=useState(0)
  const[dNumber, setDNumber]=useState(0)
  const[cellColor, setCellColor]=useState("grey")
  const[state,setState]=useState([])
  const [output, setOutput]=useState("")
  const[decision,setDecision]=useState("")
  
  

  const createTheBoard = async (difficulty) => {
    const response = await axios.post('https://minesweeper-api.herokuapp.com/games', {difficulty:difficulty})
    console.log(response.data)
    getBoard(response.data.board)
    setGameId(response.data.id)
    setState(response.data.state)
  }

  const sendCheck= async(x,y) => {
     const resp = await axios.post('https://minesweeper-api.herokuapp.com/games/' + gameId + '/check', {row: x, col: y})
    getBoard(resp.data.board)
    setState(resp.data.state)
    if (resp.data.state ==='lost') {
      console.log("yes")
      setOutput("loser")
      console.log(state)
      setDecision("loser")
    }
    if(resp.data.state==='won') {
      setOutput("Winner")
      setDecision("winner")
    }
}

const sendFlag= async(x,y) => {
  const resp = await axios.post('https://minesweeper-api.herokuapp.com/games/' + gameId + '/flag', {row: x, col: y})
  getBoard(resp.data.board)
  setState(resp.data.state)
}

  
      
       

  useEffect(() => {
    console.log('using the effect')
    createTheBoard()
  },[])

return(
  <>
  <section class="main-section">
<DifficultyChoice
dNumber={dNumber}
setDNumber={setDNumber}
createTheBoard={createTheBoard}
setOutput={setOutput}
/>
<h1 className={decision}>{output}</h1>
<InitializeMap
board={board}
gameId={gameId}
sendCheck={sendCheck}
cellColor={cellColor}
setCellColor={setCellColor}
state={state}
sendFlag={sendFlag}
/>
</section>
</>
)

}

export default App
