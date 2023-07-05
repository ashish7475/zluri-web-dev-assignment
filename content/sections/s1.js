import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const S1 = () => {
    return (
        <StyledWrapper>
            <Container >
                <Title>
                    <h4>
                        Solution Here
                    </h4>
                    <p>Answer below this.</p>
                    <p>I have created a Grid of 4 items, and used grid-template-columns and media query to display it smoothly for all the screen sizes.</p>
                </Title>
                <Grid>
                        
                    <GridItem>
                        1st
                    </GridItem>
                    <GridItem>
                        2nd
                    </GridItem>
                
                
                    <GridItem>
                        3rd
                    </GridItem>
                    <GridItem>
                        4th
                    </GridItem>
                        
                </Grid>
            </Container>
        </StyledWrapper>
    )
}

export default S1

const StyledWrapper = styled(Wrapper)`
background:#F6F7F9;
`

const Title = styled.div`
h4{
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
ul{
    display:flex;
    flex-direction:column;
}
li{
    font-size:20px;
}
`
const Grid = styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
column-gap: 30px;
row-gap:20px;

@media (max-width: 867px) {
    
    grid-template-columns:repeat(3,1fr);
  }
  @media (max-width: 648px) {
    grid-template-columns:repeat(2,1fr);
  }
  @media (max-width: 437px) {
    grid-template-columns:repeat(1,1fr);
  }
`

const GridItem = styled.div`
padding:80px;
background:#FFFFFF;
border: 1px solid #000000;
border-radius: 20px;
`