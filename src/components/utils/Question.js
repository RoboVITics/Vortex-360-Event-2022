import React, { useState } from "react";
import styled from "styled-components";
import Arr from "../../assets/Union.svg";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  border: 2px solid white;
  border-radius: 5px;
  padding: 1vh;
  overflow: hidden;
  margin: 1vh;
  overflow: scroll;

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    // box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    // background: rgb(90, 226, 226);
    border-radius: 10px;
  }
`;
const Que = styled.p`
  color: white;
  font-family: montserrat;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 670px){
    font-size: 0.7rem
  }
`;
const Arrow = styled.img`
  cursor: pointer;
  @media only screen and (max-width: 670px){
    height: 0.6rem
  }
`;
const Answer = styled.p`
  color: white;
  font-family: montserrat;

  @media only screen and (max-width: 670px){
    font-size: 0.6rem
  }
`;
const HelperOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1vh;
`;
const HelperTwo = styled.div`
  margin: 1vh 0 1vh 0;
`;
export default function Question(props) {
  const [open, setOpen] = useState(false);

  const handler = () => {
    setOpen((state) => !state);
  };

  return (
    <Container>
      {/* {props.question.que} */}
      <HelperOne>
        <Que>{props.question.que}</Que>
        <Arrow src={Arr} alt="arrow" onClick={handler} />
      </HelperOne>
      {open && (
        <HelperTwo>
          <Answer>{props.question.ans}</Answer>
        </HelperTwo>
      )}
    </Container>
  );
}
