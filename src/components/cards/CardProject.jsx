import React from 'react'
import { Link } from 'react-router-dom'
import CardProjectArt from '../../styles/cardProject-art'

export const CardProject = ( props ) => {
  return (
    <CardProjectArt>
        <div className='card-project'>
            <div className='face front'>
                <img  src={props.img}/>
                <h3>{props.title}</h3>
            </div>
            <div className='face back'>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div className='link'>
                    <Link className='button-project' to={"/projects"}> Ver más</Link>
                </div>
            </div>
        </div>
    </CardProjectArt>
  )
}
