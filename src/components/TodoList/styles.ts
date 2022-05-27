import styled, { keyframes } from "styled-components";

const propsTodoList = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const Container = styled.div``;

export const ModalList = styled.div`
  width: 352px;
  height: 32px;
  border-radius: 4px;
  background-color: var(--grey-bold);
  margin-top: 10px;
  padding: 8px 15px;
  opacity: 0;
  transform: translateY(15px);
  animation: ${propsTodoList} 0.5s both;
  overflow-y: auto;

  display: flex;
  justify-content: space-between;

  &:nth-child(2) {
    margin-top: 24px;
  }
`;

export const TitleList = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: var(--text-modal);
`;

export const ButtonDelete = styled.button`
  border: none;
  cursor: pointer;
`;

export const ImageTrash = styled.img`
  width: 12.44px;
  height: 16px;
`;
