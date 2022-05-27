import styled from "styled-components";

export const InputContent = styled.input`
  width: 288px;
  height: 48px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 2px;
  padding: 16px;
  font-size: 16px;
  color: var(--text-input-content);

  &::placeholder {
    color: var(--text-input);
    font-size: 16px;
  }
`;
