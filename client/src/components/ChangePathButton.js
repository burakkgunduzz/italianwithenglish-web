import styled from "styled-components";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { useHistory } from "react-router-dom";

const ChangePathButton = () => {
  const history = useHistory();
  const changePath = () => {
    history.push("/exercises");
  };

  return (
    <PathChanger onClick={changePath}>
      {" "}
      <CgArrowsExchangeAlt size="1.5em" /> Change Path!
    </PathChanger>
  );
};

export default ChangePathButton;

const PathChanger = styled.button`
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.fontColor};
  font-weight: 800;
  border: 3px solid ${(props) => props.theme.fontColor};
  transition: 1s;
  &:hover {
    border-radius: 1em;
    color: ${(props) => props.theme.fontColor};
  }
`;
