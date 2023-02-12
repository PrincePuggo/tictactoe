import React from 'react'
import Buttons from './Buttons'
import greyx from './assets/greyx.svg'
import greyo from './assets/greyo.svg'

export default function HomePage({ gameStart }) {
    return (
        <div className='body'>
            <img className='greyx' src={greyx} alt="" />
            <img className='greyo' src={greyo} alt="" />
            <div className='titletext'>
                <p className='TICTACTOE'>TIC-TAC-TOE</p>
            </div>
            <div className='first'>
                <p className='whoFirst'>Pick who goes first?</p>
            </div>
            <Buttons gameStart={gameStart} />
        </div>
    )
}
