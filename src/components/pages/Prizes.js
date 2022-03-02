import styled from "styled-components";
import SVG from "../../assets/Domain.svg";
import Parallel from "../../assets/PageSVGs/Prizes/Parallel.svg";
import Rect1 from "../../assets/PageSVGs/Prizes/Rect1.svg";
import Rect2 from "../../assets/PageSVGs/Prizes/Rect2.svg";

const Container = styled.div`
  height: 300vh;
  background-color: #2a044f;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  @media only screen and (max-width: 940px){
    height:200vh
  }
`;
const Heading = styled.h1`
  height: 7vh;
  width: 80%;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  color: white;
  font-family: montserrat;
  font-size: 2.5rem;
`;
const ContainerOne = styled.div`
  height: 120vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;
const ContainerTwo = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 1050px){
    justify-content: flex-start;
  }

`;
const Helper = styled.div`
  height: 30vh;
  width: 60%;
  margin: 2vh auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index:1500;
  position: relative;

  @media only screen and (max-width: 1050px){
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: ${props => props.pt};
  }
`;
const InsideHelper = styled.div`
  height: 20vh;
  width: 80%;
  display: flex;
  margin: 0 auto;
  z-index:2;
`;
const Strip = styled.div`
  height: 60vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const StripOne = styled.div`
  height: 2rem;
  background-color: #6809ac;
  width: 100%;
  margin-bottom: 1vh;
`;
const StripTwo = styled.div`
  height: 30vh;
  background-color: #6809ac;
  width: 100%;
  margin-bottom: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PrizeOne = styled.div`
  width: 50%;
  position: relative;
`;
const PrizeTwo = styled.div`
  width: 50%;
  position: relative;
`;
const Header = styled.h1`
  font-size: 3rem;
  color: white;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};

  @media only screen and (max-width: 1100px){
    font-size:2rem;
    top: ${props => props.xtop};
  }
`;
const Prize = styled.h2`
  font-size: 3rem;
  color: #a979ef;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  font-weight: 900;
  font-family: montserrat;

  @media only screen and (max-width: 1100px){
    font-size:2rem;
    top: ${props => props.xtop};
  }
`;
const DivOne = styled.div`
  color: white;
  font-size: 2.5rem;
  font-family: montserrat;
  margin-bottom: 2vh;
`;
const Hr = styled.hr`
  color: white;
  width: 10rem;
  margin-bottom: 2vh;
`;
const DivThree = styled.div`
  color: white;
  font-size: 2rem;
  font-family: montserrat;
  margin-bottom: 2vh;
`;
const Image = styled.img`
  width: 100%;
  height: 30vh;

  @media only screen and (max-width: 1050px){
    height:20vh;
  }
  @media only screen and (max-width: 1050px){
    height:20vh;
    margin-bottom:2vh;
  }
`;
const Img = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  height: ${(props) => props.height};
  right: ${(props) => props.right};
  z-index: 1;

  @media only screen and (max-width: 1100px){
    height: ${props => props.xs}
  }
  @media only screen and (max-width: 940px){
    height: ${props => props.xxs}
  }
`;
const Text = styled.h1`
  color: white;
  position: absolute;
  font-size:1.2rem;
  left:${props => props.left}
`;
export default function Prizes() {
  return (
    <Container>
      <ContainerOne>
        <Img
          src={Parallel}
          alt="parallel"
          top={"60%"}
          left={"0%"}
          height={"80vh"}
          xs={"40vh"}
          xxs={"30vh"}
        />
        <Img src={Rect1} alt="rect1" top={"110%"} right={"0%"} height={"8vh"} />
        <Heading>PRIZES</Heading>
        <Strip>
          <StripOne></StripOne>
          <StripTwo>
            <DivOne>PRIZE POOL</DivOne>
            <Hr />
            <DivThree>₹ 55000 +</DivThree>
          </StripTwo>
          <StripOne></StripOne>
        </Strip>
        <InsideHelper>
          <PrizeOne>
            <Header top={"0"} xtop={"-120px"}>FIRST PRIZE</Header>
            <Prize top={"60px"} xtop={"-40px"}>₹ 7000</Prize>
          </PrizeOne>
          <PrizeTwo>
            <Header top={"170px"} right={"0"} xtop={"70px"}>
              SECOND PRIZE
            </Header>
            <Prize top={"230px"} right={"0"} xtop={"150px"}>
              ₹ 7000
            </Prize>
          </PrizeTwo>
        </InsideHelper>
      </ContainerOne>
      <ContainerTwo>
        <Img src={Rect2} alt="rect2" top={"80%"} left={"5%"} height={"4vh"} />
        <Helper>
          <Image src={SVG} alt="domain-name" />
          {/* <Text left={"42%"}>DOMAIN PRIZE</Text> */}
        </Helper>
        <Helper pt={"3vh"}>
          <Image src={SVG} alt="domain-name" />
          {/* <Text left={"17%"}>DOMAIN PRIZE</Text> */}
          <Image src={SVG} alt="domain-name" />
          {/* <Text left={"67%"}>DOMAIN PRIZE</Text> */}
        </Helper>
      </ContainerTwo>
    </Container>
  );
}
