import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const Q1 = () => {
    return (
        <StyledWrapper>
            <Container >
                <Title>
                    <h3>
                        <span>Task 2:</span> Create a Responsive Grid Layout
                    </h3>
                    <p>In this section, you will find four black-colored divs displayed in a flex layout. Your task is to transform them into a responsive grid layout. Implement the following changes:</p>
                </Title>
                <List>
                    <ol type="1">
                        <li>Convert the flex layout into a responsive grid layout.</li>
                        <li>Adjust the number of columns and rows based on different screen sizes.</li>
                        <li>Ensure that the grid elements resize and reposition themselves gracefully on different devices.</li>
                    </ol>
                </List>
                <QuestionsDiv>
                    <FlexColumn>
                        <FlexRow>
                            <FlexItem>
                                1st
                            </FlexItem>
                            <FlexItem>
                                2nd
                            </FlexItem>
                        </FlexRow>
                        <FlexRow>
                            <FlexItem>
                                3rd
                            </FlexItem>
                            <FlexItem>
                                4th
                            </FlexItem>
                        </FlexRow>
                    </FlexColumn>
                </QuestionsDiv>
            </Container>
        </StyledWrapper>
    )
}

export default Q1

const StyledWrapper = styled(Wrapper)`
background:#F6F7F9;
`
const List = styled.div`
margin-bottom:20px;
li{
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
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


`
const FlexColumn = styled.div`
display:flex;
flex-direction:column;
gap:20px;
`
const FlexRow = styled.div`
display:flex;
flex-direction:row;
gap:20px;
`
const FlexItem = styled.div`
padding:80px;
background:#FFFFFF;
border: 1px solid #000000;
border-radius: 20px;
`