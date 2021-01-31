import styled from 'styled-components';

const StyledButton = styled.button`
  padding: ${({ formBtn }) => (formBtn ? '1rem 5rem' : '0.5rem 4rem')};
  color: ${({ theme }) => theme.fontColors.white};
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-weight: ${({ theme, thin }) =>
    thin ? theme.fontWeights.regular : theme.fontWeights.bold};
  background: ${({ theme }) => theme.btnColors.primary};
  border: none;
  border-radius: ${({ theme, formBtn }) =>
    formBtn ? theme.borderRadius.xtraSmall : theme.borderRadius.rounded};
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s all;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }

  & svg {
    margin-right: 0.5rem;
  }
`;

export default StyledButton;
