import styled from 'styled-components'

const IndexArtStyled = styled.div`
*{
  margin-top: 0;
  box-sizing: border-box;
  font-family: serif;
}

  .presentation{
    height: 500px;
    display: flex;
    justify-content: center;
    align-self: center;
    text-align: center;
    margin-top: 60px;
  }

  .info{
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    border: 2px solid black;
    flex-direction: column;
    align-items: center;
    align-self: center;
    justify-content: center;
    margin: 0 24px;
    
    h1{
      background: none;
      padding: 8px 0;
    }
    h2{
      background: none;
      padding: 8px 0;
    }

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
    margin: 24px 0 8px 0;
  
  }
  

  @media screen and (min-width: 780px) {
    .presentation{
      margin-top: 80px;
      height: 800px;
      display: flex;
      justify-content: center;
      align-self: center;
      margin-top: 0;
      
    }
  
    .info{
      width: 800px;
      height: 480px;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: center;

    }
  }
  

`

function IndexArt({ children }) {
    return (
      <IndexArtStyled>
        {children}
      </IndexArtStyled>
    )
  }
  
  export default IndexArt;