import styled from "styled-components";
import Union from '../../assets/PageSVGs/Timeline/Union.svg';
import Rect1 from '../../assets/PageSVGs/Timeline/Rect2.svg';
import Rect2 from '../../assets/PageSVGs/Timeline/Rect1.svg';
import Rect3 from '../../assets/PageSVGs/Timeline/Rect3.svg';
import AutoDesk from '../../assets/Sponsors/autodesk.svg';
import ClassMate from '../../assets/Sponsors/logo3.svg';
import Tesla from '../../assets/Sponsors/google.svg';
import Sandisk from '../../assets/Sponsors/microsoft.svg';
import Flogo from '../../assets/Sponsors/flogo.svg';

const Container = styled.div`
  height: 100vh;
  background-color: #2a044f;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position:relative;
`;
const Heading = styled.h1`
  height: 7vh;
  width: 80%;
  padding: 0;
  margin: 0 auto 8vh auto;
  text-align: center;
  color: white;
  z-index:2;
`;
const ContainerOne = styled.div`
  height: 55vh;
  width: 80%;
  margin: 0 auto;
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:space-around;

  @media only screen and (max-width: 520px){
    width: 90%;
  }
`;
const Sponsor = styled.img`
  height: 30%;
  margin: 4px;
  width: 32%;

  @media only screen and (max-width: 920px){
    width: 40%;
  }

`;
const Img = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  height: ${(props) => props.height};
  right: ${(props) => props.right};
  z-index: 1;

  @media only screen and (max-width: 520px){
    height: ${props => props.xs};
    top: ${(props) => props.xstop};
  }
`;

export default function Sponsors() {
  return (
    <Container>
      <Img src={Union} alt="union" top={"10%"} left={"35%"} height={"16vh"} xs={"8vh"} xstop={"13%"}/>
      <Img src={Rect1} alt="rect1" top={"18%"} right={"7%"} height={"4vh"} xs={"2vh"}/>
      <Img src={Rect3} alt="rect1" top={"60%"} right={"0%"} height={"4vh"} xs={"2vh"}/>
      <Img src={Rect2} alt="rect1" top={"68%"} left={"0%"} height={"4vh"} xs={"2vh"}/>
      <Heading>SPONSOR AND PARTNERS</Heading>
      <ContainerOne>
        <Sponsor src={AutoDesk} alt="logo1" />
        <Sponsor src={Tesla} alt="logo3" />
        <Sponsor src={ClassMate} alt="logo2" />
        <Sponsor src={Flogo} alt="logo5" />
        <Sponsor src={Sandisk} alt="logo4" />
      </ContainerOne>
    </Container>
  );
}



