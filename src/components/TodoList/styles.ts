import styled, { keyframes } from "styled-components";

const propsTodoList = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const ModalList = styled.div`
  width: 352px;
  height: 32px;
  border-radius: 4px;
  background-color: var(--grey-bold);
  margin-top: 10px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;

  opacity: 0;
  transform: translateY(15px);
  animation: ${propsTodoList} 0.5s both;
  &:nth-child(2) {
    margin-top: 24px;
  }
`;

export const TitleList = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: var(--text-modal);
`;

export const ButtonDelete = styled.button`
  border: none;
  cursor: pointer;
`;

export const ImageTrash = styled.img``;
