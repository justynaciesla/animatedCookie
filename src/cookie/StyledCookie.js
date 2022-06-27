import styled from "styled-components";

export const StyledCookieWrapper = styled.div`
  height: 10rem;
  width: 20rem;
  background: linear-gradient(260deg, #9b6c50 0%, #4f2626 100%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1.2rem;
  padding: 1rem;
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

export const StyledText = styled.div`
  width: 70%;
  color: white;
`;

export const StyledCookieTitle = styled.h2`
  font-size: 1rem;
  font-weight: lighter;
`;

export const StyledCookieSubtitle = styled.p`
  font-weight: bold;
  padding: 0.7rem 0rem;
  font-size: 0.6rem;
`;

export const StyledButton = styled.button`
  color: #4f2626;
  border-style: none;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 0.2rem;
  padding: 0.2rem;
`;

export const StyledSvg = styled.svg`
  transform: scale(0.4);
  overflow: visible;
`;
