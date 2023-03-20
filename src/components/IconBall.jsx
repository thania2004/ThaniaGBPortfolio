import React from 'react'
import styled from 'styled-components'

const IconBalls = styled.div`
display: flex;
width: 100%;
height: calc(100vh - 80px);
justify-content: center;
padding: 0 10%;
overflow: hidden;
&&::before{
    content: '';
    height: 600px;
    width: 600px;
    border-radius: 50%;
    left: -12%;
    top: 40%;
    background: linear-gradient(45deg, goldenrod, violet);
    animation: object1 6s linear infinite;

}
&&::after{
    content: '';
    height: 200px;
    width: 200px;
    border-radius: 50%;
    left: 35%;
    top: 12%;
    background: linear-gradient(45deg, goldenrod, violet);
    animation: object2 6s linear infinite;
}

@keyframes object1 {
 50%{
    left: -13%;
    top: 41%;
 }
}
@keyframes object2 {
 50%{
    left: 35%;
    top: 10%;
 }
}
`;



const IconBall = () => {
  return (
  <IconBalls></IconBalls>
  )
}

export default IconBall