import React, { useState } from 'react'
export function CreateFigure({onReload}){
    
    const[nameFigure,setNameFigure] = useState('')
    const[sidesFigure,setSidesFigure] = useState('')
    const[verticesFigure,setVerticesFigure] = useState('')
    const[error,seterror] = useState(false)
    const[repeatError,setRepeatError] = useState(false)

    const onSubmit = () =>{
        var list =  JSON.parse(localStorage.getItem('geometricFigures'))        
        const newId=list[list.length-1].id+1
        const filter = list.filter(figure=>figure.name.includes(nameFigure))
        seterror(false)
        setRepeatError(false)
        
        if(nameFigure==='' || sidesFigure==='' || verticesFigure ==='') seterror(true)
        
        if(filter.length !==0 && nameFigure!=='' ) setRepeatError(true)

        if(nameFigure!=='' && sidesFigure!=='' && verticesFigure !=='' && filter.length === 0){           
            list.push({id:newId, name:nameFigure, lados:sidesFigure, vertices:verticesFigure})
            localStorage.setItem('geometricFigures',JSON.stringify(list))
            setNameFigure('')
            setSidesFigure('')
            setVerticesFigure('')
            onReload()
        }
    }

    return(
        <div className='create'>
            <h3>Crear nueva figura</h3>
            <input className='text-input' type='text' value={nameFigure} placeholder='Nombre Ejemplo: Tetraedro'  onChange={(event)=>setNameFigure(event.target.value.toLowerCase())}/>
            <input className='text-input' type='number' value={sidesFigure} placeholder='N° lados Ejemplo: 5'  onChange={(event)=>setSidesFigure( event.target.value)}/>
            <input className='text-input' type='number' value={verticesFigure} placeholder='N° vertices Ejemplo: 5' onChange={(event)=>setVerticesFigure(event.target.value)}/>
            {error&&<p className='msg-error'>Todos los campos deben ser llenados</p>}
            {repeatError&&<p className='msg-error'>Esta figura ya existe</p>}
            <input className='bt-create-submit' type='submit' value='Añadir' onClick={onSubmit}/>
        </div>
    )
}