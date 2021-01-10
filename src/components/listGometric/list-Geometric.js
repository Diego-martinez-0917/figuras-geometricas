import React from 'react'
import { FigureRender } from './renderFigure'

export function ListGeometric({list,onReload}){   
    return(
        <div className='list-content'>
            {!list && <h1>Loading</h1>}
            {list.length === 0 && <p>No se encontro ningun resultado</p>}
            {list && list.map(figure => <FigureRender key={figure.id} figure={figure} onReload={onReload}/>)}            
        </div>
    )
}