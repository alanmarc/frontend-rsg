import styled from 'styled-components'

const HeaderArtStyled = styled.div`

*{
  margin: 0;
  box-sizing: border-box;
  font-family: serif;
  z-index: 10;
}
.navbar{
  background-color: rgba(0, 0, 0, 0.4);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
}
.nav_container {
  background: none;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.nav_logo{
  border-radius: 12px;
  div{
    cursor: pointer;
    background: none;
    padding: 2px;
    img{
      border-radius: 12px;
    }
  }
}
 
.nav_img{
  width: 60px;
  display: block;
}

.list{
  background: #323D7B;
  border-radius: 10px 0 0 10px;
  width: 100%;
  max-width: 280px;
  position: fixed;
  right: 0;
  top: 80px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transform: translate(100%);
  transition: transform 1s;

}
a.list_item{
  background-color: #323D7B; 
}

.navbar:hover .list{
  transform: translate(0);
} 

.list--show{
  transform: translate(0);
}
ul > .list_item{
 list-style:none;
 color: #FFF;;
 font-size: 34px;
 margin: 0 10px 0 10px;
 line-height: 30px;
 text-align: rigth;
 align-self: self-start;
 border-bottom: solid 2px #FFF;
}



@media (min-width: 700px){
  .navbar{
    position: fixed;
    top: 0;
    width: 100%
  }
  .list{
      position: unset;
      flex-direction: row;
      background: none;
      max-width: 580px;
      transform:  unset;
      transition: none;
      
      
  }

  .nav_logo{
    display: none;
  }
  
  .nav_container{
    margin: 0;
  }

  ul{
    
    a.list_item{
      font-size: 32px;
      border-bottom: none;
      background: none;
    }
  } 

}

    

`

function HeaderArt({ children }) {
    return (
      <HeaderArtStyled>
        {children}
      </HeaderArtStyled>
    )
  }
  
  export default HeaderArt;