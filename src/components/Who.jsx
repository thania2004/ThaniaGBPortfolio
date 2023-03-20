import { OrbitControls } from '@react-three/drei';
import React, {useState} from 'react'
import { Canvas } from 'react-three-fiber';
import styled from 'styled-components';
import Cube from './Cube';

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

const Left = styled.div`
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
color:rgb(255,181,0);;

`;

const Desc = styled.p`

`;

const Button = styled.button`
border: rgb(255,181,0) 3px solid;
background-color: rgba(255, 183, 0, 0.374);
letter-spacing: 2px;
color: #e9e208ad;
font-weight: 300px;
font-size: 17px;
width: 200px;
padding: 16px 35px;
border-radius: 35px;
margin: 10% 35%;
cursor: pointer;
&&:hover{
background-color:rgb(255,181,0);
color: white;}
`;


const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;

`;







const Who = () => {

const [showFullStackText, setShowFullStackText] = useState(true);
 function handleButtonClick() {
    setShowFullStackText(!showFullStackText);
  }



  return (
    <Section>
      <Container>
        <Left> 
          <Canvas camera={{fov:25, position:[5,5,5]}}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={0.7} color="yellow"/>
            <directionalLight position={[3,2,1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Always creating Out of the Box Solutions</Title>
          <WhatIdo>
           <Line src="./img/Line.png"/>
            <PersonalSummary>Who I am</PersonalSummary>
            </WhatIdo>
          <Desc>{showFullStackText ? "As a technology enthusiast, I am passionate about exploring the latest trends in the field and keeping up-to-date with the rapidly evolving industry." : "I have always been fascinated by the waysin which technology can transform our daily lives and create innovative solutions to complex problems. With a strong background in computer science and a keen eye for detail, I have developed skills in programming languages such as Python and JavaScript. I have also honed my abilities in front-end development, including proficiency with HTML, CSS, and React. My experience working with databases, such as MySQL and MongoDB, has provided me with a solid foundation in back-end development as well. Above all, my love for technology stems from the potential it holds to create positive change in the world. I am driven by the opportunity to use my skills to make a meaningful impact on society and look forward to continuing to pursue my passion in this exciting field."}</Desc>
            <Button onClick={handleButtonClick}>Are you curious?</Button>
          </Right>
      </Container>
    </Section>
  )
}

export default Who
