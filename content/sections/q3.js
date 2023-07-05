import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";
import Dropdown from "../dropdown";


const Q3 = () => {
    return (
        <StyledWrapper>
            <StyledContainer >
                <Title>
                    <h3>
                        <span>Task 3:</span> Build a dropdown
                    </h3>
                    <p>Your objective is to replicate the design and functionality of the given Figma design. Pay attention to details such as colors, fonts, and spacing to achieve a faithful representation of the design.</p>
                </Title>
                <QuestionsGrid>
                    <AnswerDiv>
                        <a href="https://www.figma.com/file/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=16-26&mode=design&t=LMCvfVQBL3S5dApY-0" target="_blank" ><FigmaButton>Figma</FigmaButton></a>
                        <a href="https://www.figma.com/proto/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=36-670&t=56Qr3ehXorgFodbH-1&scaling=min-zoom&page-id=36%3A647&starting-point-node-id=36%3A670" target="_blank" ><PrototypeButton>Prototype</PrototypeButton></a>
                    </AnswerDiv>
                </QuestionsGrid>
                <QuestionsGrid>
                    <AnswerDiv>
                       <Dropdown question="3"/>
                    </AnswerDiv>
                </QuestionsGrid>
            </StyledContainer>
        </StyledWrapper>
    )
}

export default Q3

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
const QuestionsGrid = styled.div`

`
const StyledContainer = styled(Container)`
margin-top:0;
`
const AnswerDiv = styled.div`
align-self:center;
display: flex;
flex-direction:row;
button{
    margin:0 10px;
}
`
const FigmaButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #2684FE;
min-width:150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #FFF;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor:pointer;
`
const PrototypeButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #FFFFFF;
min-width:150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #2684FE;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor:pointer;
`