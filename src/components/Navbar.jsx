import React from 'react'
import styled from 'styled-components';


const Section = styled.div`
display: flex;
justify-content: center;
`;


const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0;
`;

const Links = styled.div`
display: flex;
align-items: center;
gap: 50px;
`;

const Logo = styled.img`
height: 140px;

`;

const List = styled.ul`
display: flex;
gap:20px;
list-style: none;
`;


const ListItem = styled.li`
cursor: pointer;
&&:hover{
  color: rgb(255,181,0);
}
`;

const Icons = styled.div`
display: flex;
align-items: center;
gap: 20px;

`;


const Icon = styled.img`
width: 50px;
cursor: pointer;
margin-left: 670px;
`;

const Button = styled.button`
width: 150px;
padding: 16px 35px;
background-color: rgb(255,181,0);
color: white;
cursor: pointer;
border: none;
border-radius: 35px;

`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
        <Logo src="./img/LogoPortfolio2.png"/>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem href="./Contact.jsx">Contact</ListItem>
        </List>
        </Links>
        <Icons>
            <Icon src="./img/SearchImage1.png"/>
        </Icons>
        <Button>Hire Now</Button>
      </Container>
    </Section>
  )
}

export default Navbar
