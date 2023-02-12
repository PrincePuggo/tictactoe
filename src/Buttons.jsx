import React from 'react'
import ximage from './assets/x.svg'
import oimage from './assets/o.svg'



export default function Buttons({ gameStart }) {
    return (
        <div className='teamButtons'>
            <button className='XTeam' type='button' onClick={() => gameStart('X')} >
                <img src={ximage} alt="x image" />
            </button>
            <button className='OTeam' type='button' onClick={() => gameStart('O')}  >
                <img src={oimage} alt="o button" />
            </button>
        </div>
    )
}
