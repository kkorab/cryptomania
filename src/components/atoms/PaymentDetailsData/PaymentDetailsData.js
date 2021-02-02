import React from 'react';
import styled from 'styled-components';
import { currencies } from 'data';

const StyledPaymentCurrencyData = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCurrencySymbolWrapper = styled.div`
  width: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h2 {
    color: ${({ theme }) => theme.fontColors.grey};
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

const StyledCurrencySymbol = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 70%;
  }
`;

const PaymentDetailsData = () => {
  const formattedValue = new Intl.NumberFormat().format(10000);
  return (
    <>
      <StyledPaymentCurrencyData>
        <h2>${formattedValue}</h2>
        <StyledCurrencySymbolWrapper>
          <StyledCurrencySymbol>
            <img src={currencies[0].logo} alt="currency symbol" />
          </StyledCurrencySymbol>
          <h2>{currencies[0].currency}</h2>
        </StyledCurrencySymbolWrapper>
      </StyledPaymentCurrencyData>
    </>
  );
};

export default PaymentDetailsData;
