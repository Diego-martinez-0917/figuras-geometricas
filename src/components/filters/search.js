import React from 'react'
export function SearchName ({change,value}){
    return(
        <div className='search'>
            <input type='text' value={value}  placeholder='Buscar por ejemplo: Triangulo' onChange={(event)=>change(event.target.value)}/>
        </div>
    )
}