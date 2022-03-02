import styled from "styled-components";
import TimelineImg from "../../assets/Timeline.svg";
import Union from "../../assets/PageSVGs/Timeline/Union.svg";
import Circle from "../../assets/PageSVGs/Timeline/Circle.svg";
import Rect1 from "../../assets/PageSVGs/Timeline/Rect1.svg";
import Rect2 from "../../assets/PageSVGs/Timeline/Rect2.svg";
import Rect3 from "../../assets/PageSVGs/Timeline/Rect3.svg";
import Rect4 from "../../assets/PageSVGs/Timeline/Rect4.svg";
import Rect5 from "../../assets/PageSVGs/Timeline/Rect5.svg";
import Design from "../../assets/PageSVGs/Timeline/DESIGN.svg";
import Tech from "../../assets/PageSVGs/Timeline/TECH.svg";

const Container = styled.div`
  height: 300vh;
  width: 100%;
  background-color: #2a044f;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 850px){
    height:200vh;
  }
  @media only screen and (max-width: 500px){
    height:150vh;
  }
`;
const Heading = styled.h1`
  height: 10vh;
  width: 80%;
  padding: 0;
  margin: 0;
  text-align: right;
  color: white;
  font-size: 2.5rem;
  z-index: 2;

  @media only screen and (max-width: 1024px) {
    text-align: center;
  }
  @media only screen and (max-width: 940px){
    text-align:center;
    font-size:3.3rem;
    margin:5vh 0;
  }
  @media only screen and (max-width: 830px){
    margin:7vh 0 10vh 0;
    font-size:2.3rem;
  }
`;
const TimeLineContainer = styled.div`
  height: 250vh;
  width: 80%;
  margin: 10vh auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    justify-content:flex-start;
    align-items: flex-start;
  }
  @media only screen and (max-width: 920px) {
    margin:0 auto;
  }
`;
const Image = styled.img`
  height: 2000px;
  @media only screen and (max-width: 800px) {
    height:1500px;
  }
  @media only screen and (max-width: 650px) {
    height:800px;
  }
`;
const Img = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  height: ${(props) => props.height};
  right: ${(props) => props.right};
  z-index: 1;
  @media only screen and (max-width: 1024px) {
    left: ${(props) => props.xs};
    height: ${(props) => props.xsmall};
  }
`;

export default function Timeline() {
  return (
    <Container>
      <Img
        src={Union}
        alt="hex"
        top={"3.7%"}
        right={"16%"}
        height={"15vh"}
        xs={"40%"}
        xsmall={"10vh"}
      />
      <Img
        src={Circle}
        alt="circle"
        top={"-2%"}
        left={"0%"}
        height={"30vh"}
        xsmall={"15vh"}
      />
      <Img
        src={Rect1}
        alt="rect1"
        top={"10%"}
        left={"14%"}
        height={"4vh"}
        xsmall={"2vh"}
      />
      <Img
        src={Rect2}
        alt="rect2"
        top={"20%"}
        right={"0%"}
        height={"4vh"}
        xsmall={"2vh"}
      />
      <Img
        src={Rect3}
        alt="rect3"
        top={"50%"}
        right={"0%"}
        height={"4vh"}
        xsmall={"2vh"}
      />
      <Img
        src={Rect4}
        alt="rect4"
        top={"55%"}
        left={"10%"}
        height={"6vh"}
        xsmall={"4vh"}
      />
      <Img
        src={Rect5}
        alt="rect5"
        top={"73%"}
        right={"25%"}
        height={"3vh"}
        xsmall={"2vh"}
      />
      <Img
        src={Rect4}
        alt="rect4"
        top={"85%"}
        left={"5%"}
        height={"6vh"}
        xsmall={"4vh"}
      />
      <Img
        src={Design}
        alt="design"
        top={"25%"}
        left={"0%"}
        height={"15vh"}
        xsmall={"8vh"}
      />
      <Img
        src={Tech}
        alt="design"
        top={"88%"}
        right={"0%"}
        height={"15vh"}
        xsmall={"8vh"}
      />
      <Heading>TIMELINE</Heading>
      <TimeLineContainer>
        <Image src={TimelineImg} alt="timeline" />
      </TimeLineContainer>
    </Container>
  );
}
