import styled from 'styled-components'

const CardAllArtStyled = styled.div`
*{
    margin: 0;
    box-sizing: border-box;
    font-family: serif;
}
p, div, h3, h2, img, a{
    background: none;
}

.project-container{
  background: rgba(138, 165, 175, 0.2);
  border-radius: 20px;
  box-shadow: 10px 20px 5px #000;
  color: #FFF;
  height: 100%;
  max-width: 560px;
  margin: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .img-project{
    width: 80%;
  } 

  h2, p {
    padding: 16px; 
  }

  .img-tecnologias{
    height: 60px;
    background: #FFF;
    margin: 8px;
    border-radius: 16px;
  }

  .more-info{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    .btn-projects{
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #FFF;
      height: 40px;
      p{
        line-height: 20px;
      } 
    }
  }
}

.btn-projects:hover{
      background: rgba(200, 200, 200, 0.4);
      border-radius: 8px;
      margin: 8px;
      height: 50px;
      p{
        font-size: 28px;
      }
}

.img-project:hover {
  width: 100%;
  border-radius: 12px;
  border: 2px solid #000;
}

@media screen and (min-width: 780px) {
  .project-container {
    max-width: 800px;

    .container-img{
      margin: 12px;
    }

    .img-tecnologias{
      height: 80px;
    }

  }

  

}
`


function ProjectAllArt({ children }) {
    return (
      <CardAllArtStyled>
        {children}
      </CardAllArtStyled>
    )
  }
  
  export default ProjectAllArt;