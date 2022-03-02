// import { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import Defence from "../../assets/Molecules/defence.svg";
import HealthCare from "../../assets/Molecules/healthcare.svg";
import Space from "../../assets/Molecules/space.svg";
import CommunityHelp from "../../assets/Molecules/community_help.svg";
import Agriculture from "../../assets/Molecules/agriculture.svg";
import OpenInnovation from "../../assets/Molecules/open_innovation.svg";
import Rect1 from "../../assets/PageSVGs/Domain/Rect1.svg";
import Rect2 from "../../assets/PageSVGs/Domain/Rect2.svg";
import CAD from "../../assets/PageSVGs/Domain/CAD.svg";

const Container = styled.div`
  height: 100vh;
  background-color: #2a044f;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
const Heading = styled.h1`
  height: 10vh;
  width: 80%;
  padding: 0;
  margin: 0;
  margin-bottom: 6vh;
  text-align: right;
  color: white;
  font-size: 2.5rem;
`;
const MoleculeContainer = styled.div`
  height: 60vh;
  width: 90%;
  padding: 0;
  margin: 0;
  position: relative;
`;
const Img = styled.img`
  height: ${(props) => props.size};
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  position: absolute;
  display: block;
  animation: animate 3s ease-in-out infinite;

  @keyframes animate {
    0% {
      transform: translateY(70px);
    }

    50% {
      transform: translateY(10px);
      width: -160px;
      height: +160px;
    }

    100% {
      transform: translateY(70px);
    }
  }
  @media only screen and (max-width: 1300px){
    height: ${props => props.med};
  }
  @media only screen and (max-width: 1100px){
    top: ${(props) => props.sTop};
    left: ${(props) => props.sLeft};
    height: ${(props) => props.sSize};
  }
`;
const Image = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  height: ${(props) => props.height};
  right: ${(props) => props.right};
`;
export default function Domains() {
  // const [isMobile, setIsMobile] = useState(false);
  // useLayoutEffect(() => {
  //   function updateSize() {
  //     if (window.innerWidth < 1100) {
  //       setIsMobile(true);
  //     } else {
  //       setIsMobile(false);
  //     }
  //   }
  //   window.addEventListener("resize", updateSize);
  //   updateSize();
  //   return () => window.removeEventListener("resize", updateSize);
  // }, []);


  return (
    <Container>
      <Image src={Rect1} alt="rect1" top={"10%"} left={"40%"} height={"3vh"} />
      <Image src={Rect2} alt="rect2" top={"75%"} height={"6vh"} right={"0%"} />
      <Image src={CAD} alt="cad" top={"90%"} right={"0%"} height={"15vh"} />
      <Heading>DOMAINS</Heading>
      <MoleculeContainer>
        <Img
          src={Defence}
          alt="def"
          size={"150px"}
          top={"50px"}
          left={"40px"}
          sTop={"0px"}
          sLeft={"0px"}
        />
        <Img
          src={HealthCare}
          alt="hltc"
          size={"200px"}
          top={"170px"}
          left={"240px"}
          sTop={"120px"}
          sLeft={"190px"}
        />
        <Img
          src={Space}
          alt="space"
          size={"100px"}
          top={"20px"}
          left={"430px"}
          sTop={"0px"}
          sLeft={"380px"}
        />
        <Img
          src={CommunityHelp}
          alt="commhelp"
          size={"170px"}
          top={"30px"}
          left={"640px"}
          sTop={"10px"}
          sLeft={"590px"}
        />
        <Img
          src={Agriculture}
          alt="agrc"
          size={"130px"}
          top={"180px"}
          left={"890px"}
          sTop={"130px"}
          sLeft={"840px"}
        />
        <Img
          src={OpenInnovation}
          alt="openinn"
          size={"200px"}
          top={"5px"}
          left={"1040px"}
          sTop={"0px"}
          sLeft={"590px"}
          med={"150px"}
        />
      </MoleculeContainer>
    </Container>
  );
}
