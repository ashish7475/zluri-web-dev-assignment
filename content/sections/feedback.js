import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const Feedback = () => {
    return (
        <StyledWrapper>
        <Container >
            <Title>
                <h4>
                    Thanks for taking up this assignment.
                </h4>
                <p>Anything you would like to add over here?</p>
                <p>I have tried my best to solve every problem. Learned alot from this assignment.</p>
            </Title>

            <FeedbackDiv>
                <p>
                    Add your reply here
                </p>
                <p>
                   <i> It was an interesting way to give an assignment, I enjoyed the whole process. The assignment was nicely explained and I surely learned from this. Thank you!</i>
                </p>
            </FeedbackDiv>
            
        </Container>
        </StyledWrapper>
    )
}

export default Feedback

const StyledWrapper=styled(Wrapper)`
background:#FFFFFF;
`

const Title = styled.div`
h4{
    font-size: 24px;
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
    font-size: 16px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const FeedbackDiv= styled.div`
p{
    font-size:24px;
    color:#000000;
    font-family: Lexend Regular;
    font-style: normal;
    font-weight: 400;
    
}
`