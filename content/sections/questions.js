import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const Question = () => {
    return (
        <StyledWrapper>
            <StyledContainer >
                <Title>
                    <h3>
                        <span>Task 1:</span> Personalize the Website
                    </h3>
                </Title>
                <List>
                    <ol type="1">
                        <li>Change the name of the website to your own name.</li>
                        <li>Attach your resume to the 'Resume' button on the navigation.</li>
                        <li>Link your email address to the 'Email' button on the navigation.</li>
                        <li>Link your phone number to the 'Contact me' button.</li>
                    </ol>
                </List>
            </StyledContainer>
        </StyledWrapper>
    )
}

export default Question

const StyledWrapper = styled(Wrapper)`
background:#FFFFFF;
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
const List = styled.div`
li{
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