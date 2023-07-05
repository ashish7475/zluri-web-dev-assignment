import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";
import hero from "../images/hero.png"
import bg from "../images/hero-bg.svg"

const Header = () => {
    return (
        <StyledWrapper>
            <StyledContainer >
                <QuestionsGrid>
                <Title>
                    <h3>
                        Hey! 👋
                    </h3>
                    <h1>
                        Thanks for applying to Zluri<br />
                        Lets get started with the assignment.
                    </h1>
                    <p>
                    Follow the instructions below and provide solutions.
                    </p>
                </Title>
                    <ImageDiv>
                        <img src={hero} alt="hero" />
                    </ImageDiv>
                </QuestionsGrid>
            </StyledContainer>
        </StyledWrapper>
    )
}

export default Header

const StyledWrapper = styled(Wrapper)`
padding:160px 0 80px;
background-image: url(${bg});
background-repeat: no-repeat;
    background-size: cover;
`
const Title = styled.div`
margin-bottom:40px;
h1{
    font-family: Lexend Semibold;
    line-height: 40px;
    font-size:32px;
    color: #FFFFFF;
}
h3{
    font-family: Lexend Semibold;
    font-size:32px;
    color: #FFFFFF;
}
p{
    font-family: Lexend Regular;
    font-size:24px;
    color: #FFFFFF;
}
`
const QuestionsGrid = styled.div`
display:grid;
grid-template-columns: 2fr 1fr;
grid-gap:20px;
@media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
const StyledContainer = styled(Container)`
margin-top:0;
`
const ImageDiv = styled.div`
img{
    width:300px;
}
`