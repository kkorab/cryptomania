import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  z-index: 2000000000;

  & h1 {
    text-align: center;
    color: white;
    font-size: 3rem;
  }

  & p {
    text-align: center;
    color: white;
    font-size: 2rem;
  }
`;

const MobileInfo = () => (
  <StyledWrapper className="display-info">
    <h1>
      It`&apos;s only available for desktop size. Your screen is to small.
    </h1>
    <p>You need screen wider than 1200px</p>
  </StyledWrapper>
);

export default MobileInfo;
