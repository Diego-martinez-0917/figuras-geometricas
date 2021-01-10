import React, { useEffect, useState } from 'react'
import { CreateFigure } from '../../components/Create/createElement'
import { SearchName } from '../../components/filters/search'
import { Header } from '../../components/header/header'
import { ListGeometric } from '../../components/listGometric/list-Geometric'
import './main.scss'

export function MainPage (){
    const [geometricList,setGeometricList]= useState([])
    const [nameFilter,setnameFilter]= useState('')
    const [reload,setReload]= useState(true)
    
    
    useEffect(()=>{
        if(!localStorage.getItem('geometricFigures')){
            const intialList=[
                {id:0, name:'circulo', lados:0, vertices:0},
                {id:1, name:'triangulo', lados:3, vertices:3},
                {id:2, name:'cuadrado', lados:4, vertices:4},
                {id:3, name:'rectangulo', lados:4, vertices:4},
                {id:4, name:'pentagono', lados:5, vertices:5},
                {id:5, name:'hexagono', lados:6, vertices:6},
                {id:6, name:'heptagono', lados:7, vertices:7},
            ]
            localStorage.setItem('geometricFigures',JSON.stringify(intialList))
        }
        setGeometricList(JSON.parse(localStorage.getItem('geometricFigures')))
    },[reload])

    useEffect(()=>{
        const filter = JSON.parse(localStorage.getItem('geometricFigures')).filter(figure=>figure.name.includes(nameFilter))
        setGeometricList(filter)
    },[nameFilter])
    
    const onChangeName = (value) => setnameFilter(value)
    const onReload = () => setReload(!reload)


    return(
        <div className='main-content'>
            <Header/>
            <SearchName value={nameFilter} change={onChangeName}/>
            <CreateFigure onReload={onReload}/>
            <ListGeometric list={geometricList} onReload={onReload}/>
        </div>
    )
}