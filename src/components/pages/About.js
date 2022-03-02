import styled from "styled-components";
import Circle from "../../assets/PageSVGs/About/Circle.svg";
import Rect1 from "../../assets/PageSVGs/About/Rect1.svg";
import Rect2 from "../../assets/PageSVGs/About/Rect2.svg";
import Ellipse from "../../assets/PageSVGs/About/Ellips.svg";

const Container = styled.div`
  height: 100vh;
  background-color: #2a044f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const InsideContainer = styled.p`
  height: 45vh;
  width: 80%;
`;
const Heading = styled.h1`
  height: 8vh;
  width: 80%;
  padding: 0;
  margin-bottom: 3vh;
  color: white;
  font-size: 2.5rem;

  @media only screen and (max-width: 930px) {
    text-align: center;
    z-index: 2;
    font-size: 3.3rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;
const Para = styled.p`
  width: 70%;
  color: white;
  font-size: 1.5rem;
  font-family: montserrat;

  @media only screen and (max-width: 930px) {
    width: 100%;
    z-index: 200;
    font-size:2rem;
  }
  @media only screen and (max-width: 800px) {
    font-size:1.5rem;
  }
  @media only screen and (max-width: 520px) {
    font-size:1.2rem;
  }
`;
const Image = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  height: ${(props) => props.height};
  right: ${(props) => props.right};
  z-index: 1;

  @media only screen and (max-width: 930px){
      display: ${props => props.dis}
  }
  @media only screen and (max-width: 600px){
    height: ${props => props.xs}
}
`;
export default function About() {
  return (
    <Container >
      <Image
        src={Circle}
        alt="circle"
        top={"-8%"}
        left={"0%"}
        height={"35vh"}
        xs={"25vh"}
      />
      <Image src={Rect1} alt="rect1" top={"25%"} left={"70%"} height={"3vh"} />
      <Image src={Rect2} alt="rect1" top={"85%"} left={"10%"} height={"5vh"} />
      <Image
        src={Ellipse}
        alt="elps1"
        top={"30%"}
        height={"35vh"}
        right={"0px"}
        dis={"none"}
      />
      <Heading>ABOUT US</Heading>
      <InsideContainer>
        <Para>
          VORTEX 360 is a 30 days online CAD modelling hack organized by
          RoboVITics, the official RObotics Club of VIT, and powered by
          AutoDesk. This hack aims to provide a platform where you can unwrap
          your skills and discover the extent of yor abilities. RoboVITics team
          cordially invites you to be a part of this endeavour to showcase and
          emrich your skills, grab your opportunity and unleash the vortex
          within.
        </Para>
      </InsideContainer>
    </Container>
  );
}
