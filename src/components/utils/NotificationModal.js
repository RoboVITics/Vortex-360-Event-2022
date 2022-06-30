import styled from "styled-components";
import { GrClose } from "react-icons/gr";

const NotificationContainer = styled.div`
  height: 40vh;
  width: 35%;
  position: fixed;
  top: 30%;
  left: 30%;
  z-index: 100;

  backdrop-filter: blur(0px) saturate(200%);
  -webkit-backdrop-filter: blur(8px) saturate(200%);

  background: linear-gradient(
    94deg,
    rgba(217, 21, 250, 0.95) 38%,
    rgba(41, 25, 249, 0.95) 100%
  );

  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  text-align: center;
`;
const Header = styled.h1`
  color: #fff;
`;
const Info = styled.p`
  color: #fff;
`;
const HighLight = styled.span`
  font-weight: bold;
  color: #fff;
`;
const NotificationModal = props => {
  const style = {
    position: "absolute",
    top: "5%",
    right: "5%",
    cursor: "pointer",
  };
  return (
    <NotificationContainer>
      <GrClose style={style} color="#fff" onClick={props.onClick} />
      <Header>UPCOMING EVENTS</Header>
      <Info>
        <HighLight>VORTEX 360 </HighLight>is a 30 days online CAD modelling hack
        organized by RoboVITics, the official Robotics Club of VIT, and powered
        by AutoDesk.
      </Info>
    </NotificationContainer>
  );
};

export default NotificationModal;
