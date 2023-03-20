import React from 'react'
import styled from 'styled-components'



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


const LinkedInImage = () => {
  return (
    <Img src="./img/LinkedIn.png" href="_linkedin.com/in/thaniagb"/>
  )
}

export default LinkedInImage