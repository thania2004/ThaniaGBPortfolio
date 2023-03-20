import React, {useState}from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';


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
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
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
color: rgb(255,181,0);;

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
margin: 10% 35%;
cursor: pointer;
&&:hover{
background-color:rgb(255,181,0);
color: white;
}
`;


const Right = styled.div`
flex: 3;
position: relative;

`;

const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@keyframes animate {
  to{
    transform: translateY(45px)
  }
}
`;


const Hero = () => {

 const [showFullStackText, setShowFullStackText] = useState(true);
 function handleButtonClick() {
    setShowFullStackText(!showFullStackText);
  }


  return (
    <Section>
      <Navbar/>
      <Container>
        <Left> 
          <Title>Think, Make, Solve</Title>
          <WhatIdo>
           <Line src="./img/Line.png"/>
            <PersonalSummary>Team-Oriented, Creative, Eager to Grow Professionally</PersonalSummary>
            </WhatIdo>
              <Desc>{showFullStackText ? "As a junior full stack developer, I possess a strong foundation in programming languages such as HTML, CSS, JavaScript, and various back-end technologies." : "I am familiar with front-end frameworks like React and Angular, as well as server-side frameworks like Node.js and Express. I have experience working with databases such as MySQL and MongoDB, and I understand the importance of version control using Git. My skills in problem-solving and attention to detail allow me to create efficient and effective solutions. I am eager to continue learning and growing as a developer while contributing my skills to a team of professionals."}</Desc>
            <Button id="LearnMoreB1" onClick={handleButtonClick}>Learn More</Button>
          </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[2,7,3]} />
            <Sphere args={[1,100,200]} scale={2.7}>
            <MeshDistortMaterial color="rgb(255,181,0);" attach="material" distort={0.5} speed={2}/>
          </Sphere>
          </Canvas>

          <Img src="./img/ImagenPrincipalPortfolio.png"/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
