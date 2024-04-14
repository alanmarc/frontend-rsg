import styled from 'styled-components'

const ProjectArtStyled = styled.div`
*{
  margin: 0;
  box-sizing: border-box;
  font-family: serif;
  
}

.title-project{
    padding: 36px 24px;
    h1{
        text-align: center;
        background: none;
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
    margin: 20px 16px;
    align-items: flex-start;
}

.card-home{
  background: rgba(0, 0, 0, 0.1);
  height: auto;
  margin: 16px 16px;
  padding: 12px;
  width: 80%;
  justify-content: center;

  img, h3, p{
    margin: 8px 0;
  }
  img{
    width: 100%;
  }

  p{
    background: none;
  }
}

.table-container {
  margin-top: 20px;
}

.table-container table {
  width: 100%;
  border-collapse: collapse;
}

.table-container th,
.table-container td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.table-container th {
  background-color: #f2f2f2;
}

.table-container tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.table-container tbody tr:hover {
  background-color: #f1f1f1;
}

.button-contact{
    background-color: #16377C;
    border-radius: 10px;
    border: 2px solid #000;
    font-size: 28px;
    height: 60px;
    width: 180px;
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  
  }


@media screen and (min-width: 700px){
  .title-project{
    margin-top: 80px;
    text-align: center;
    background: none;
    color: #ba63eb;
    font-size: 42px;
    font-weight: 900;
    line-height: 56px;
    padding: 8px 0;

  }

  .section-projects{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px 0 40px 0;
    align-items: flex-start;
  }

  .card-home{
    background: rgba(0, 0, 0, 0.1);
    margin: 0 12px;
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