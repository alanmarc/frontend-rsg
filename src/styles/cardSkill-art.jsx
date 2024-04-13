import styled from "styled-components";

const CardStyled = styled.div`
*{
    margin: 0;
    box-sizing: border-box;
    font-family: serif;
}

.card-skill{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 150px;
    margin: 16px 10px;
    img{
        width: 150px;
        height: 150px;
    }
    h4{
        color: #FFF;
    }
}


@media screen and (min-width: 780px) {

    .card-skill{
        max-width: 240px;
        margin: 24px 10px;
        img{
            width: 210px;
            height: 210px;
        }
    }
}

`;

function CardSkillArt({ children }){
    return(
        <CardStyled>
            {children}
        </CardStyled>
    )
}

export default CardSkillArt;