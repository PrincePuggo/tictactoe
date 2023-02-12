import React from 'react'
import ximage from './assets/x.svg'
import oimage from './assets/o.svg'



export default function GamePage({ useTurn, turnStatus, boardSymbol, useBoardSymbol, winner, useWinner }) {
    function handleClick(cell) {
        if (boardSymbol[cell] === '' && winner === '') {
            useBoardSymbol(previousState => ({ ...previousState, [cell]: turnStatus === 'X' ? 'X' : 'O' }))
            turnStatus === 'X' ? useTurn('O') : useTurn('X')
        }

    }


    return (
        <div className='GamePage'>
            <div className='playerTurn'>
                {winner !== '' ? <>Player <b className={`winners${winner}`}>{winner}</b> Wins!</> :
                    turnStatus === 'O' ? 'Player O\'s Turn' : 'Player X\'s Turn'}
            </div>
            <div className='gameBoard'>
                <div className='g1' onClick={() => handleClick('1')}>
                    {boardSymbol['1'] === '' ? '' : boardSymbol['1'] === 'X' ? <img className='cellImages' src={ximage}></img> : <img className='cellImages' src={oimage}></img>}
                </div>
                <div className='g2' onClick={() => handleClick('2')}>
                    {boardSymbol['2'] === '' ? '' : boardSymbol['2'] === 'X' ? <img className='cellImages' src={ximage}></img> : <img className='cellImages' src={oimage}></img>}
                </div>
                <div className='g3' onClick={() => handleClick('3')}>
                    {boardSymbol['3'] === '' ? '' : boardSymbol['3'] === 'X' ? <img className='cellImages' src={ximage}></img> : <img className='cellImages' src={oimage}></img>}
                </div>
                <div className='g4' onClick={() => handleClick('4')}>
                    {boardSymbol['4'] === '' ? '' : boardSymbol['4'] === 'X' ? <img className='cellImages' src={ximage}></img> : <img className='cellImages' src={oimage}></img>}
                </div>
                <div className='g5' onClick={() => handleClick('5')}>
                    {boardSymbol['5'] === '' ? '' : boardSymbol['5'] === 'X' ? <img className='cellImages' src={ximage}></img> : <img className='cellImages' src={oimage}></img>}
                </div>
                <div className='g6' onClick={() => handleClick('6')}>
                    {boardSymbol['6'] === '' ? '' : boardSymbol['6'] === 'X' ? <img className='cellImages' src={ximage}></img> : <img className='cellImages' src={oimage}></img>}
                </div>
                <div className='g7' onClick={() => handleClick('7')}>
                    {boardSymbol['7'] === '' ? '' : boardSymbol['7'] === 'X' ? <img className='cellImages' src={ximage}></img> : <img className='cellImages' src={oimage}></img>}
                </div>
                <div className='g8' onClick={() => handleClick('8')}>
                    {boardSymbol['8'] === '' ? '' : boardSymbol['8'] === 'X' ? <img className='cellImages' src={ximage}></img> : <img className='cellImages' src={oimage}></img>}
                </div>
                <div className='g9' onClick={() => handleClick('9')}>
                    {boardSymbol['9'] === '' ? '' : boardSymbol['9'] === 'X' ? <img className='cellImages' src={ximage}></img> : <img className='cellImages' src={oimage}></img>}
                </div>
            </div>
        </div>
    )
}




// if (turnStatus === 'O') return <img src={ximage}></img>
 // else if (turnStatus === 'X') return <img src={oimage}></img>