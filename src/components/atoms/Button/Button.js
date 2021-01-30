import styled from 'styled-components';

const StyledButton = styled.button`
  padding: ${({ formBtn }) => (formBtn ? '1rem 5rem' : '0.5rem 4rem')};
  color: ${({ theme }) => theme.fontColors.white};
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-weight: ${({ theme, thin }) =>
    thin ? theme.fontWeights.regular : theme.fontWeights.bold};
  background: ${({ theme }) => theme.btnColors.primary};
  border: none;
  border-radius: 50px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & svg {
    margin-right: 0.5rem;
  }
`;

export default StyledButton;
