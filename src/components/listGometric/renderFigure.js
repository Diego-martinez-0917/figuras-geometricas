import React,{useState} from 'react'
import { AiOutlineEdit,AiFillDelete } from "react-icons/ai";
export function FigureRender ({figure,onReload}){
    
    const [edit,SetEdit]= useState(false)
    const [newName,SetNewName]= useState(figure.name)
    const [newSides,SetNewSides]= useState(figure.lados)
    const [newVertices,SetVertices]= useState(figure.vertices)
    
    const onClickEdit = () => SetEdit(!edit)
    
    const onClickDelete = () => {        
        const newList = JSON.parse(localStorage.getItem('geometricFigures')).filter(elem => elem.id !== figure.id)
        localStorage.setItem('geometricFigures',JSON.stringify(newList))
        onReload()
    }
    
    const onSubmit = () =>{     
        const newList = JSON.parse(localStorage.getItem('geometricFigures')).map(elem => {
            if(elem.name===figure.name) {
                elem.name=newName
                elem.lados = newSides
                elem.vertices = newVertices 
            }
            return elem
        })
        localStorage.setItem('geometricFigures',JSON.stringify(newList))
        onClickEdit()
        onReload()
    }    

    return(
        <div className='item'>
            {edit ? 
                <div className='conten-edit'>  
                 <span className='title-name' >Nombre</span>                  
                    <input className='input-name' type='text'  value={newName}  onChange={(event)=>SetNewName(event.target.value.toLowerCase())}/>
                 <span className='title-sides' >N° Lados</span>
                    <input className='input-sides' type='number'  value={newSides}  onChange={(event)=>SetNewSides(event.target.value)}/>
                 <span className='title-vertices' >N° Vertices</span> 
                    <input className='input-vertices' type='number'  value={newVertices}  onChange={(event)=>SetVertices(event.target.value)}/>
                    <button className='save' onClick={onSubmit}>Guardar </button>
                </div>
             :  <div className='conten-info'>
                 <span className='title-name' >Nombre</span>
                    <span className='sp-name'>{figure.name.charAt(0).toUpperCase().concat(figure.name.substring(1, figure.name.length))}</span>
                 <span className='title-sides' >N° Lados</span>
                    <span className='sp-sides'>{figure.lados}</span>
                 <span className='title-vertices' >N° Vertices</span>
                    <span className='sp-vertices'>{figure.vertices}</span>
                </div>
            }  
            <button className={`bt-edit ${edit &&'edit-hide'}`}  onClick={onClickEdit}><AiOutlineEdit style={{color:'white'}} size={25} /></button>
            <button className={`bt-delete  ${edit&&'edit-hide'}`}  onClick={onClickDelete}><AiFillDelete style={{color:'white'}} size={35}/></button>
        </div>
    )
}