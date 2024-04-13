import styled from "styled-components";

const CardStyled = styled.div`
*{
    margin: 0;
    box-sizing: border-box;
    font-family: serif;
    justify-content: center;
}

.form-contact, .form-contact form,.form-contact form p, .container-form , .container-form div, .container-form div p, .form-contact label, .form-contact input{
    background: none;
}

p, label, input, textarea{
    font-size: 20px;
    line-height: 26px;
}


.container-contact{
    background: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 12px 34px 40px;
    width: 400px;
}
.container-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.form-contact form{
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 12px;

    p{
        padding: 16px 12px 0;
    }
    
    input{
        height: 30px;
        background: rgba(255, 255, 255, 0.12);
        border: #FFF .1px solid;
        border-radius: 4px;
        color: #FFF;
        margin: 12px;
        padding: 6px;
    }
    button{
        background-color: #16377C;
        border-radius: 10px;
        border: 1px solid #FFF;
        font-size: 28px;
        height: 50px;
        width: 180px;
        text-decoration: none;
        text-align: center;
        color: white;
        display: flex;
        align-self: center;
        justify-content: center;
        margin: 24px 0 8px 0;
        padding: 8px;
    }
}



@media screen and (min-width: 780px) {
    
    p, label, input, textarea{
        font-size: 28px;
        line-height: 26px;
    }

    .container-contact{
        margin: 12px 34px 50px;
        width: 700px;
    }

    .container-form{
        flex-direction: row;
        width: 100%;
        justify-content: center;
        padding: 16px;

        .form-contact{
            width: 70%;
            height: 100%;
            justify-content: space-around;

            input{
                height: 40px;
            }

            button{
                font-size: 32px;
                height: 60px;
                width: 240px;
                margin: 40px 0 8px 0;
                padding: 10px;
            }

        }


    }

}

`

function CardContactArt({ children}) {
    return (
        <CardStyled>
            {children}
        </CardStyled>
    )
}

export default CardContactArt;