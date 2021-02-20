import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const StyledEmptyDiv = styled.div``;
const StyledContentDiv = styled.div`
  padding: 2rem 0;
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
`;

const PageWrapper = ({ children }) => (
  <>
    <StyledPageWrapper>
      <StyledEmptyDiv />
      <StyledContentDiv>{children}</StyledContentDiv>
    </StyledPageWrapper>
  </>
);

PageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageWrapper;
