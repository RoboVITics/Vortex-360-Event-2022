import styled from "styled-components";
import img1 from "../../assets/logo.svg";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaDiscord,
} from "react-icons/fa";
import Counter from "../utils/Counter";
import "../component-styles/Home.css";
import Rect1 from "../../assets/PageSVGs/Home/Rect1.svg";
import Rect2 from "../../assets/PageSVGs/Home/Rect2.svg";
import Rect3 from "../../assets/PageSVGs/Home/Rect3.svg";
import Rect4 from "../../assets/PageSVGs/Home/Rect4.svg";
import Rect5 from "../../assets/PageSVGs/Home/Rect5.svg";
import Rect from '../../assets/PageSVGs/Header/Rect.svg';

const Container = styled.div`
  height: 100vh;
  background-color: #2a044f;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const ContOne = styled.div`
  width: 20%;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const ContTwo = styled.div`
  height: 40vh;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3vh;
`;
const ContThree = styled.div`
  height: 10vh;
  width: 84%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;
const Helper = styled.div`
height: 35vh;
width: 40%;
display:flex;
flex-direction:column;
align-items-center;
justify-content:center;

@media only screen and (max-width: 1200px){
  width:100%;
  text-align:center;
}
`;
const Img = styled.img`
  height: 35vh;

  @media only screen and (max-width: 1200px) {
    height: 25vh;
  }
`;
const BoxOne = styled.h1`
  height: 10vh;
  width: 100%;
  color: #ba8aff;

  @media only screen and (max-width: 1200px) {
    margin-top: 8vh;
    font-size: 1.7rem;
  }
`;
const BoxTwo = styled.h1`
  height: 20vh;
  width: 100%;
`;
const BoxThree = styled.h1`
  height: 10vh;
  width: 100%;

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;
const ButtonOne = styled.button`
  width: 42%;
  height: 90%;
  margin-right: 0.3rem;
  font-size: 1.5rem;
  background-color: transparent;
  border: 4px solid #8341e1;
  color: white;
  box-shadow: -2px 3px 8px -1px rgba(0, 0, 0, 0.64);
  -webkit-box-shadow: -2px 3px 8px -1px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: -2px 3px 8px -1px rgba(0, 0, 0, 0.64);
  z-index:2;

  &:hover {
    background-color: #8341e1;
  }
  @media only screen and (max-width: 1200px) {
    width: 70%;
    margin: auto;
    padding: 2vh;
    margin-bottom: 2vh;
  }
`;
const ButtonTwo = styled.button`
  width: 42%;
  height: 90%;
  font-size: 1.5rem;
  background-color: #8341e1;
  border: 4px solid #8341e1;
  color: white;
  box-shadow: -2px 3px 8px -1px rgba(0, 0, 0, 0.64);
  -webkit-box-shadow: -2px 3px 8px -1px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: -2px 3px 8px -1px rgba(0, 0, 0, 0.64);
  z-index:3;

  &:hover {
    background-color: transparent;
  }
  @media only screen and (max-width: 1200px) {
    width: 70%;
    margin: auto;
    padding: 2vh;
    margin-bottom: 2vh;
  }
`;
const Span = styled.span`
  color: #8341e1;
  height: 200px;
`;
const Image = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  height: ${(props) => props.height};
  right: ${(props) => props.right};
  z-index:${props => props.z};

  @media only screen and (max-width: 610px) {
    height:${props => props.sm};
  }
`;
export default function Home() {
  return (
    <Container>
      <Image src={Rect} alt="rect" top={"-8%"} left={"0%"} height={"6vh"} sm={"3vh"} z={"2"}/>
      <Image src={Rect1} alt="rect1" top={"8%"} left={"0%"} height={"5vh"} sm={"3vh"} z={"2"}/>
      <Image src={Rect2} alt="rect2" top={"15%"} left={"40%"} height={"6vh"} sm={"4vh"} z={"2"}/>
      <Image src={Rect3} alt="rect3" top={"55%"} right={"0%"} height={"6vh"} sm={"4vh"} z={"2"}/>
      <Image src={Rect4} alt="rect4" top={"75%"} left={"10%"} height={"3vh"} sm={"1vh"} z={"2"}/>
      <Image src={Rect5} alt="rect5" top={"90%"} right={"0%"} height={"3vh"} sm={"1vh"} z={"2"}/>

      <ContOne>
        <Img src={img1} alt="logo-vortex" />
      </ContOne>
      <Helper>
        <ContTwo>
          <BoxOne>
            Oct 29, 2021 <Span>|</Span> 09: 00 pm IST
          </BoxOne>
          <BoxTwo>
            <Counter countdownTimestampMs={1645983662000} />
          </BoxTwo>
          <BoxThree>
            <ButtonOne>REGISTER</ButtonOne>
            <ButtonTwo>
              <FaDiscord /> DISCORD
            </ButtonTwo>
          </BoxThree>
        </ContTwo>
        <ContThree>
          <FaInstagram size={35} color="white" style={{ cursor: "pointer" }} />
          <FaFacebook size={35} color="white" style={{ cursor: "pointer" }} />
          <FaEnvelope size={35} color="white" style={{ cursor: "pointer" }} />
          <FaLinkedin size={35} color="white" style={{ cursor: "pointer" }} />
        </ContThree>
      </Helper>
    </Container>
  );
}
