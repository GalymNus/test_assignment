import styled from "styled-components";

export const StyledGameWrapper = styled.div`
  position: absolute;
  flex-direction: column;
  align-items: center;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vmax;
  background-color: #313030a8;

  iframe {
    position: sticky;
    top: 0;
    display: block;
    width: 100%;
    max-width: 2300px;
    aspect-ratio: 16 / 9;
  }

  button {
    position: sticky;
    left: 99%;
    top: 10px;
    z-index: 1;
  }
`;
