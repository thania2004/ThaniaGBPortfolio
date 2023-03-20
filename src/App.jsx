import styled from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Principal from "./components/Principal"
import Who from "./components/Who"
import Works from "./components/Works"

const Container = styled.div`
height: 100vh;
color: white;
background: url("./img/purple-moon-thumb-1500x844.jpg");
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
&::-webkit-scrollbar{
  display: none;
}
`;

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
       <Principal/>
      <Contact/>
     </Container>
  )
}

export default App
