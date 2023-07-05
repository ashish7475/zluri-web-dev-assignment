import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const QuestionsHeading = () => {
    return (
        <StyledWrapper>
            <StyledContainer >
                <Title>
                    <h3>
                        Lets Begin
                    </h3>
                    <p>
                        Hi! We appreciate your interest in joining our web development team. Thank you for applying. Please follow the instructions below to complete the assignment. Scroll down for further instructions.
                    </p>
                </Title>
            </StyledContainer>
        </StyledWrapper>
    )
}

export default QuestionsHeading

const StyledWrapper = styled(Wrapper)`
background:#F6F7F9;
`
const Title = styled.div`
text-align:center;
max-width:900px;
margin:auto;
margin-bottom:40px;
h3{
    text-align: center;
font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
}
p{
    text-align: center;
font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const StyledContainer = styled(Container)`
margin-top:0;
`