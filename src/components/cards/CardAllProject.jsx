import React from 'react';
import ProjectAllArt from '../../styles/cardAllProject-art';

export const CardAllProject = ({ title, imgProjectUrl, content, altImg, srcImg, gitHubUrl, projectUrl }) => {
  return (
    <ProjectAllArt>
        <div className='project-container'>
            <h2>{ title }</h2>
            <img className='img-project' src={ imgProjectUrl }/>
            <p>{ content }</p>
            <div>
                <h3>Tecnologías</h3>
                <div className='container-img'>
                    <img className='img-tecnologias' alt='Javascript' src='https://img.icons8.com/ios-filled/100/000000/javascript-logo.png'/>
                    <img className='img-tecnologias' alt='HTML' src='https://img.icons8.com/windows/100/000000/html-5.png'/>
                    <img className='img-tecnologias' alt='CSS' src='https://img.icons8.com/material/100/000000/css3.png'/>
                    <img className='img-tecnologias' alt='React JS' src='https://img.icons8.com/ios/100/000000/react-native--v1.png'/>
                    <img className='img-tecnologias' alt='Git' src='https://img.icons8.com/material/100/000000/git.png'/>
                    <img className='img-tecnologias' alt={ altImg } src={ srcImg }/>
                </div>
            </div>
            <div className='more-info'>
                <a className='btn-projects' href={ gitHubUrl } target="_Blank">
                  <p>Github</p>
                </a>
                <a className='btn-projects' href={ projectUrl } target="_Blank">
                  <p>Proyecto</p>
                </a>
            </div>
        </div>
    </ProjectAllArt>
  )
}
