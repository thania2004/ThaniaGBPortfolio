import React, {useState} from 'react'
import styled from 'styled-components'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`;

const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
`;

const Point = styled.div`
border-radius: 50%;
height: 100px;
background-color: red;
`;


const Left = styled.div`
flex: 1;
position: relative;
`;

const Right = styled.div`
flex: 1;
position: relative;
`;

const Title = styled.h1`
font-size: 74px;
`;

const WhatIdo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

const Line = styled.img`
height: 5px;
`;

const PersonalSummary = styled.h2`
color: goldenrod;

`;

const Desc = styled.p`

`;

const Button = styled.button`
border: rgb(255,181,0) 3px solid;
background-color: rgba(255, 183, 0, 0.374);
letter-spacing: 2px;
color: #e9e208ad;
font-weight: 900px;
font-size: 17px;
width: 200px;
padding: 16px 35px;
border-radius: 35px;
margin-top: 11%;
cursor: pointer;
&&:hover{
background-color:rgb(255,181,0);
color: white;
}

`;

const ButtonCV = styled.a`
border: rgb(255,181,0) 3px solid;
padding: 16px 35px;
text-decoration: none;
border-radius: 35px;
letter-spacing: 2px;
color: white;
font-weight: 500px;
position: absolute;
margin: 10% 35%;
cursor: pointer;
&&:hover{
background-color:rgb(255,181,0);
}

`;




const Principal = () => {
const [showFullStackText, setShowFullStackText] = useState(true);
 function handleButtonClick() {
    setShowFullStackText(!showFullStackText);
  }

  return (
    <Section>
        <Container>
            <Left></Left>
            <Right>
            <Title>My Personal Summary</Title>
            <WhatIdo>
           <Line src="./img/Line.png"/>
            <PersonalSummary>"Crafting digital experiences that delight and inspire, one pixel at a time."</PersonalSummary>
           </WhatIdo> 
           <Desc>{showFullStackText ? "As a technology enthusiast, I am passionate about exploring the latest trends in the field and keeping up-to-date with the rapidly evolving industry." : "I have always been fascinated by the waysin which technology can transform our daily lives and create innovative solutions to complex problems. With a strong background in computer science and a keen eye for detail, I have developed skills in programming languages such as Python and JavaScript. I have also honed my abilities in front-end development, including proficiency with HTML, CSS, and React. My experience working with databases, such as MySQL and MongoDB, has provided me with a solid foundation in back-end development as well. Above all, my love for technology stems from the potential it holds to create positive change in the world. I am driven by the opportunity to use my skills to make a meaningful impact on society and look forward to continuing to pursue my passion in this exciting field."}</Desc>
             <Button onClick={handleButtonClick}>See my Work</Button>
             <ButtonCV href="public\CV Thania Gamarra Full Stack Developer (2).pdf" download>Download my CV</ButtonCV>
            </Right>
        </Container>
        
    </Section>
  )
}

export default Principal