import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
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
  ${({ error }) =>
    error && `border-color: var(--color-error)`
    }
    
    
    /* background: transparent;
    border: none;
    font-size: 16px;
    padding: 8px 0px 12px;
    color: var(--color-text);
    outline: none;
    width: 100%; */
`;

export default Input;
