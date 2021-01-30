import React from 'react';
import styled, { keyframes } from 'styled-components';

const showUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1
        transform: translateY(0px);
    }
`;

const StyledCard = styled.div`
  margin: 2rem 0;
  width: 400px;
  height: 200px;
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  color: ${({ theme }) => theme.fontColors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  background: linear-gradient(
    225deg,
    rgba(253, 143, 164, 1) 0%,
    rgba(255, 198, 106, 1) 100%
  );
  animation: ${showUp} 1s;
`;

const StyledWrapper = styled.div`
  height: 90%;
  width: 90%;
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledValuesWrapper = styled.div``;

const StyledWalletName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const StyledWalletOwnedValue = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const StyledWalletOwnedValueToDollars = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const StyledActionsWrapper = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;
`;

const StyledAction = styled.div``;

const WalletCard = () => (
  <StyledCard>
    <StyledWrapper>
      <StyledWalletName>BTC ballance</StyledWalletName>
      <StyledValuesWrapper>
        <StyledWalletOwnedValue>3.746 BTC</StyledWalletOwnedValue>
        <StyledWalletOwnedValueToDollars>
          $ 44,496.49
        </StyledWalletOwnedValueToDollars>
      </StyledValuesWrapper>
      <StyledActionsWrapper>
        <StyledAction>
          <h5>Send BTC</h5>
        </StyledAction>
        <StyledAction>
          <h5>Request BTC</h5>
        </StyledAction>
      </StyledActionsWrapper>
    </StyledWrapper>
  </StyledCard>
);

export default WalletCard;
