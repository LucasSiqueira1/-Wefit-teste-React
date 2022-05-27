import styled from "styled-components";

export const Content = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 400px;
  height: 400px;
  padding-bottom: 20px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-color: var(--background);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track-piece {
    border-radius: 5px;
    border: 2px solid var(--background);
    background-color: var(--scroll-grey);
  }
  ::-webkit-scrollbar-thumb:vertical {
    border-radius: 5px;
    border: 1px solid var(--background);
    background-color: var(--scroll-grey-800);
  }
`;

export const ModalCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
