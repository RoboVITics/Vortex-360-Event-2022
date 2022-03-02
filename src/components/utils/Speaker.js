import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "../../assets/yo.jpg";

const Container = styled.div`
  width: 32%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 940px) {
    height: 40%;
    margin-bottom: 4vh;
  }
`;
const Img = styled.img`
  width: 250px;
  height: 250px;
`;
const ContOne = styled.div`
  height: 60%;
  width: 35vh;
  border-radius: 50%;
  display: flex;
  overflow: hidden;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 200px;
  height: 200px;

  @media only screen and (max-width: 940px) {
    width: 76.5%;
  }
  @media only screen and (max-width: 800px) {
    width: 68.5%;
  }
  @media only screen and (max-width: 750px) {
    width: 81%;
    height: 49%;
  }
`;
const rotate = keyframes`
0%{
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Inner = styled.div`
  height: 100%;
  right: 0px;
  position: absolute;
  border: solid 5px transparent;
  border-top-color: #8652d1;
  border-radius: 50%;
  width: 100%;
  transform: rotate(135deg);
  animation: ${rotate} 1.3s steps(2) 0.2s infinite;
  -webkit-animation: ${rotate} 2.3s linear infinite;

  @media only screen and (max-width: 700px) {
    height:100%;
  }
`;

const Heading = styled.h1`
  color: white;
  font-size: 1.8rem;
  font-family: montserrat;

  @media only screen and (max-width: 700px) {
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
  }
`;
const Desc = styled.p`
  color: white;
  font-size: 1.3rem;
  font-family: montserrat;
  @media only screen and (max-width: 700px) {
    width: 150%;
    font-size: 1.1rem;
  }
`;
export default function Speaker(props) {
  return (
    <Container>
      <ContOne>
        <Inner></Inner>
        <Img src={Image} alt="" />
      </ContOne>
      <Heading>{props.speaker.name}</Heading>
      <Desc>{props.speaker.description}</Desc>
    </Container>
  );
}
