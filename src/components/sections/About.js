import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Carousel from '../Carousel';
import Button from '../Button'
import {dark} from '../../styles/Themes'

const Section= styled.section`
min-height:100vh;
width:100%;
background-color:${props=>props.theme.text};
display:flex;
justify-content:center;
align-items: center;
position: relative;
`

const Container=styled.div`
width:75%;
margin: 0 auto;
// background-color: lightblue;
display: flex;
justify-content: center;
align-items: center; 

@media (max-width:70em){
    width:85%;
}

@media (max-width:64em){
    width:100%;
    flex-direction:column;

    &>*:last-child{
        width:80%;
    }
}

@media (max-width: 40em){

    &>*:last-child{
        width:90%;
    }
}
`

const Box=styled.div`
width:50%;
height:100%;
min-height: 60vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media (max-width:40em){
    min-height: 50vh;
}
`

const Title=styled.h2`
font-size:${props=>props.theme.fontxxxl};
font-family: "Attack Of Monster";
text-transform:Capitalize;
color:${props=>props.theme.blue};
align-self:flex-start;
width:100%;
margin: 0 auto;

@media (max-width:64em){
    width:100%;
    text-align:center;
}

@media (max-width:40em){
    font-size:${props=>props.theme.fontxl};
}
@media (max-width:30em){
    font-size:${props=>props.theme.fontlg};
}


`

const SubText=styled.p`
font-size:${props=>props.theme.fontlgg};
font-family: "Dankosaurus";
color:${props=>props.theme.body};
align-self:flex-start;
width:100%;
margin: 1rem auto;
font-weight:300;

@media (max-width:64em){
    width:100%;
    text-align:center;
    font-size:${props=>props.theme.fontmd};
}

@media (max-width:40em){
    font-size:${props=>props.theme.fontmd};
}
@media (max-width:30em){
    font-size:${props=>props.theme.fontsm};
}
`

const SubTextLight=styled.p`
font-size:${props=>props.theme.fontlgg};
font-family: "Dankosaurus";
color:${props=>`rgba(${props.theme.bodyRgba},0.6)`};
align-self:flex-start;
width:100%;
margin: 1rem auto;
font-weight:400;

@media (max-width:64em){
    width:100%;
    text-align:center;
    font-size:${props=>props.theme.fontsm};
}

@media (max-width:40em){
    font-size:${props=>props.theme.fontsm};
}
@media (max-width:30em){
    font-size:${props=>props.theme.fontxs};
}
`
const ButtonContainer=styled.div`
width:80%;
margin: 1rem auto;
display:flex;
align-items:center;
justify-content:center;
align-self: flex-start;

@media (max-width:64em){
    width:100%;
   
    button{
        margin: 0 auto;
    }
}
`

const About = () => {
    return(
        <Section id="about"> 
        <Container>
            <Box> <Carousel/> </Box>
            <Box> 
                <Title>Goblin Imposters</Title>
                <SubText>
                Welcome to the imposter's lobby where things are a little more suspicious than it seems.
                The quest of taking down the goblin king was always on the list. A total of 10,000 imposters all unique, are on their way toward the land of goblins.

                </SubText>
                <SubTextLight>
                We kept 500 for the team because we wanted to. totally community-driven and yes we always liked wars but not gas wars, so we got us gas optimized.<br></br>
                <br></br>
                No roadmap No fake promises, Just art.
                </SubTextLight>

                <ButtonContainer>
                <ThemeProvider theme={dark}>
                <Button text="Get one?"/>
                {/* <Button text="Get one?" link="https://twitter.com/GoblinImposters"/> */}
                </ThemeProvider>
                </ButtonContainer>
             </Box>
             </Container>
        </Section>
    )
}

export default About;
