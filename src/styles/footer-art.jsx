import styled from 'styled-components'

const FooterArtStyled = styled.div`
*{
  margin: 0;
  box-sizing: border-box;
  font-family: serif;
}

.social, .info-footer, .social a, .social a img, .info-footer p{
  background: none;
}

.footer, social{
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  jsutify-content: center;
}

.footer{
  padding: 16px 24px;
  background: rgba(0, 0, 0, 0.2);
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.social{
  padding-bottom: 12px;
  a img{
    background: rgba(186,99,235, 1);
    border-radius: 8px;
    height: 50px;
    margin: 0 12px;
    width: 50px;
  }
}

.info-footer{
  width: 100%;
  height: 30px;

  p{
    color: #ba63eb;
    font-size: 18px;
    font-weight: 100;
    line-height: 16px;
    text-align: center;
  }
}




@media (min-width: 700px){
  .social{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    a img{
      width: 60px;
      height: 60px;
    }
  }
  .info-footer{

    p{
      font-size: 24px;
    }
  }

}
   

`

function FooterArt({ children }) {
    return (
      <FooterArtStyled>
        {children}
      </FooterArtStyled>
    )
  }
  
  export default FooterArt;