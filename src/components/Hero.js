import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("hero.jpg");
    height: 60vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    grid-column: 1/13;
    align-items: center;
`;

const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
`;

const HeroTitle = styled.h1`
    margin: 0;
    font-size: 2.2em;
    font-weight: 300;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    word-spacing: 3px;
`;

const HeroSubTitle = styled.h2`
    color: #007edc;
  font-size: 1.8em;
`;

const ButtonRound = styled.a`
    display: inline-block;
    padding: 10px 30px;
    font-weight: 300;
    text-decoration: none;
    border-radius: 200px;
    margin: 8px;
`;

const ButtonRoundGhost = styled(ButtonRound)`
  &:hover, 
  &:active {
    background-color: #003a65;
    border: 1px solid #003a65;
    text-decoration: none;
  }  
  &:link,
  &:visited {
    border: 1px solid #007edc;
    text-decoration: none;
    color: white;   
  }
`;

const ButtonRoundFull = styled(ButtonRound)`
  &:link,
  &:visited {
    background-color: #007edc;
    border: 1px solid #007edc;
    color: white;
    text-decoration: none;
  }
  &:hover,
  &:visited {
    border: 1px solid #007edc;
    text-decoration: none;
    color: white;
  }
`;



const Hero =() => {
  return (
    <HeroSection className="hero">
      <HeroContainer className="hero-container">
        <div className="hero-text-box">
          <HeroTitle className="header">George Loaiza</HeroTitle>
          <HeroSubTitle className="subheader">Full Stack Developer</HeroSubTitle>
          <ButtonRoundGhost className="btn-round btn-round-ghost js--scroll-to-gallery" href="#projects">
            Check out my work
          </ButtonRoundGhost>
          <ButtonRoundFull className="btn-round btn-round-full js--scroll-to-contact " href="#contact">
            Get in touch
          </ButtonRoundFull>
        </div>
      </HeroContainer>
    </HeroSection>
  );
}
export default Hero;