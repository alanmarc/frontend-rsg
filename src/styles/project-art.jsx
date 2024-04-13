import styled from 'styled-components'

const ProjectArtStyled = styled.div`
*{
  margin: 0;
  box-sizing: border-box;
  font-family: serif;
  background-color: rgba(15, 24, 79, 0.8);
}

.title-project{
    padding: 36px 24px;
    h1{
        text-align: center;
        background: none;
        color: #ba63eb;
        font-size: 42px;
        font-weight: 900;
        line-height: 56px;
        padding: 8px 0;
    }
}
.section-projects{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0 40px 0;
}


@media screen and (min-width: 700px){
  .title-project{
    margin-top: 80px;

  }

}



`

function ProjectArt({ children }) {
    return (
      <ProjectArtStyled>
        {children}
      </ProjectArtStyled>
    )
  }
  
  export default ProjectArt;