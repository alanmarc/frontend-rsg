import styled from 'styled-components'

const ContactArtStyled = styled.div`
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
  .form{
    justify-content: center;
  }

}


@media (min-width: 700px){
  .title-contact{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 36px 24px 12px;
    margin-top: 80px;

    .info-contact{
      display: flex;
      flex-direction: row;
    }

  }  

}
   

`

function ContactArt({ children }) {
    return (
      <ContactArtStyled>
        {children}
      </ContactArtStyled>
    )
  }
  
  export default ContactArt;