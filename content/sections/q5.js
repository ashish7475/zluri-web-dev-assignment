import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";
import component from "../images/component-trial.png"

const Q5 = () => {
    return (
        <StyledWrapper>
            <Container >
                <Title>
                    <h4>
                        Additional question * (for fun)
                    </h4>
                    <h3>
                        Try to recreate the following component and display it below.
                    </h3>
                    <p>You can make use of the figma file for this. <a href="https://www.figma.com/file/HxNZcchT8DOI1UmMQY52Hb/Web-Development-Assignment?type=design&node-id=1-4&mode=design&t=BFbRQwTqbP479xam-4" target="_blank" > Click here </a> </p>
                </Title>
                <QuestionsDiv>
                    <img src={component} alt="component" />
                </QuestionsDiv>
            </Container>
        </StyledWrapper>
    )
}

export default Q5

const StyledWrapper=styled(Wrapper)`
`

const Title = styled.div`
h3{
    font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
    span{
        background:#FAE090;
    }
}
p{
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const QuestionsDiv = styled.div`
img{
    width:100%;
}

`
