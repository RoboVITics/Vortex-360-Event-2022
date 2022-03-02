import styled from "styled-components";
import { speakersList } from "../data/speakerData";
import Speaker from "../utils/Speaker";

const Container = styled.div`
  height: 100vh;
  background-color: #2a044f;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 940px){
    justify-content: flex-start;
  }
`;
const Heading = styled.h1`
  height: 10vh;
  width: 70%;
  padding: 0;
  margin: 0;
  margin-bottom: 2vh;
  color:white;
  font-size:2.5rem;

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
const SpeakersContainer = styled.div`
  height: 60vh;
  width: 80%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 940px){
    flex-direction:column;
    width:100%
  }
`;
export default function Speakers() {
  return (
    <Container>
      <Heading>SPEAKERS</Heading>
      <SpeakersContainer>
        {speakersList.map((speaker) => (
          <Speaker speaker={speaker} key={speaker.id}/>
        ))}
      </SpeakersContainer>
    </Container>
  );
}
