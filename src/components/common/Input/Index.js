import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  resize: vertical;
  border-radius: 5px;
  padding: 0.6rem 0.6rem;
  border: 2.5px solid var(--color-primary);
  color: var(--color-text);
  background: transparent;
  outline: none;
  font-size: 15px;
  option {
    background-color: var(--color-background);
  }
  ${({ error }) => error && `border-color: var(--color-error)`}
`;

export default Input;
