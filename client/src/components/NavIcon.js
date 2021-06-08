import { useContext } from "react";
import { ItalianContext } from "../context/ItalianContext";
import styled from "styled-components";

const NavIcon = () => {
  const { theme } = useContext(ItalianContext);

  return theme === "dark" ? (
    <StyledNavIcon
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
      <line
        x1="40"
        y1="64"
        x2="216"
        y2="64"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
      <line
        x1="40"
        y1="192"
        x2="216"
        y2="192"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
    </StyledNavIcon>
  ) : (
    <StyledNavIcon
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
      <line
        x1="40"
        y1="64"
        x2="216"
        y2="64"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
      <line
        x1="40"
        y1="192"
        x2="216"
        y2="192"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
    </StyledNavIcon>
  );
};

export default NavIcon;

const StyledNavIcon = styled.svg`
  cursor: pointer;
`;