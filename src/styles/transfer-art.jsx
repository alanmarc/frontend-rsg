import styled from 'styled-components'

const TranferArtStyled = styled.div`
*{
  margin: 0;
  box-sizing: border-box;
  font-family: serif;
}
.title-contact{
  margin: 100px 0;
  width: 100%;
  h1{
    text-align: center;
    background: none;
  }
}

.container-principal{
    width: 100%;
    margin: auto 32px; 
  }

.form-tran{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;

    label, select, input, input::placeholder{
      font-size: 18px;
      text-align: left;
      color: white;
      border: solid 0.5px transparent;
    }
    label{
      margin-top: 14px;
    }
    button{
      margin: 12px auto;
    }
    select{
    }
}

.container-transfer{
  border: solid 1px #fff;
  width: 300px;
  border-radius: 8px;
  margin-bottom: 40px;
}

.table-container th,
.table-container td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
  width: 250px;
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



@media (min-width: 700px){
  .title-contact{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 36px 24px 12px;
    margin-top: 80px;

  } 
  
  h4{
    color: #fff;
    margin: 12px 0;
    width: auto;
  }
  .container-principal{
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 34px 0;
  }

  .container-transfer{
    width: 500px;
    margin: auto;
  }

  .form-tran{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 34px auto;
    width: 80%;

    label, select{
      font-size: 34px;
    }
  }

}
   

`

function TranferArt({ children }) {
    return (
      <TranferArtStyled>
        {children}
      </TranferArtStyled>
    )
  }
  
  export default TranferArt;