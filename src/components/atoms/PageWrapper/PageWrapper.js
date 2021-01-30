import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const StyledEmpyDiv = styled.div``;
const StyledContentDiv = styled.div`
  padding: 2rem 0;
  margin: 0 auto;
  width: 90%;
`;

const PageWrapper = ({ children }) => (
  <StyledPageWrapper>
    <StyledEmpyDiv />
    <StyledContentDiv>{children}</StyledContentDiv>
  </StyledPageWrapper>
);

PageWrapper.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageWrapper;
