import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Map from './Map';

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`;

const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: space-between;
gap: 50px;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const Title = styled.h1`
font-weight: 200;
`;

const Form = styled.form`
width: 550px;
display: flex;
flex-direction: column;
gap: 15px;

`;

const Input = styled.input`
padding: 20px;
background-color: lightgray;
border: none;
border-radius: 10px;
`;

const TextArea = styled.textarea`
padding: 20px;
border: none;
border-radius: 10px;
background-color: lightgray;
`;

const Button = styled.button`
background-color: goldenrod;
color: white;
border: none;
font-weight:  bold;
cursor: pointer;
border-radius: 10px;
padding: 20px;
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
`;





 
const Contact = () => {
const ref= useRef();
const [success, setSuccess] = useState(null);

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_rk3zird', 'template_59u9zgd', ref.current, 'w6oKIMhJ71y3VuOmb')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
      });

};
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref}   onSubmit={handleSubmit}>
            <Title>Get in Touch</Title>
            <Input placeholder='Name' name="name"/>
            <Input placeholder='Email' name="email"/>
            <TextArea placeholder='Write your message' name="message" rows={12}/>
            <Button type="submit">Send</Button>
            {success && 
            "Your message has been sent. I will reach to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Container>
    </Section>
  );
};

export default Contact
