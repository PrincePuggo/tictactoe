import './App.css'
import HomePage from './HomePage'
import { useEffect, useState } from 'react'
import GamePage from './GamePage'



function App() {
  const [turnStatus, useTurnStatus] = useState('')
  const [boardSymbol, useBoardSymbol] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' })
  const [winner, useWinner] = useState('')
  useEffect(() => {
    console.log(winner)
    let z = turnStatus === 'X' ? 'O' : 'X'
    if (boardSymbol['1'] === z && boardSymbol['2'] === z && boardSymbol['3'] === z) useWinner(z)
    if (boardSymbol['4'] === z && boardSymbol['5'] === z && boardSymbol['6'] === z) useWinner(z)
    if (boardSymbol['7'] === z && boardSymbol['8'] === z && boardSymbol['9'] === z) useWinner(z)
    if (boardSymbol['1'] === z && boardSymbol['5'] === z && boardSymbol['9'] === z) useWinner(z)
    if (boardSymbol['1'] === z && boardSymbol['4'] === z && boardSymbol['7'] === z) useWinner(z)
    if (boardSymbol['2'] === z && boardSymbol['5'] === z && boardSymbol['8'] === z) useWinner(z)
    if (boardSymbol['3'] === z && boardSymbol['6'] === z && boardSymbol['9'] === z) useWinner(z)
    if (boardSymbol['3'] === z && boardSymbol['5'] === z && boardSymbol['7'] === z) useWinner(z)
  }, [boardSymbol])
  function gameStart(letter) {
    useTurnStatus(letter);
  }

  return (
    <div className="App">
      {turnStatus !== '' ? <GamePage winner={winner} useWinner={useWinner} boardSymbol={boardSymbol} useBoardSymbol={useBoardSymbol} turnStatus={turnStatus} useTurn={useTurnStatus} /> : <HomePage gameStart={gameStart} />}
    </div>
  )
}

export default App


