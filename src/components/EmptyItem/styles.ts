import styled, { keyframes } from "styled-components";

const propsButtonStyle = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const EmptyItemContainer = styled.div`
  width: 352px;
  height: 280px;
  margin-top: 24px;
  background-color: var(--grey);
  border: 1px dashed #cccccc;
  opacity: 0;
  transform: translateY(15px);
  animation: ${propsButtonStyle} 0.3s forwards;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextSpan = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: var(--text-modal);
`;
