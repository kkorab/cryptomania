import styled from 'styled-components';

const PageHeadline = styled.h1`
  font-size: ${({ theme, small }) =>
    small ? theme.fontSizes.s : theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.fontColors.grey};
`;

export default PageHeadline;
