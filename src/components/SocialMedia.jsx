import React from 'react';
import styled from 'styled-components';
import SphereI from './SphereI';



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SpheresContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const SphereStyled = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  width: 30px;
  height: 30px;
  border-radius: 0%;
`;




const SocialMedia = () => {
  return (
    <Section>
      <Container>
        <SpheresContainer>
          <SphereI bgImage="./img/LinkedIn.png"  link="https://www.linkedin.com/in/thaniagb/"/>
          <SphereI bgImage="./img/Instagram.png" link="https://www.instagram.com/thaniaagb/"/>
        </SpheresContainer>
        <SpheresContainer>
          <SphereI bgImage="./img/GitHub.jpg"  link="https://github.com/thania2004"/>
          <SphereI bgImage="./img/discord.png" link="https://discord.com/users/ThaniaGamarraBruno#6740" />
        </SpheresContainer>
      </Container>
    </Section>
  );
};

export default SocialMedia;



