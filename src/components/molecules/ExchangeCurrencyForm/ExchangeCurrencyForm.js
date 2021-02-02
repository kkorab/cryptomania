import React from 'react';
import styled from 'styled-components';
import { PlainCard } from 'components/atoms';

const StyledSelectWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledSelect = styled.select`
  width: 100%;
`;

const ExchangeCurrencyForm = () => (
  <PlainCard currencyForm>
    <StyledSelectWrapper>
      <p>from</p>
      <StyledSelect />
    </StyledSelectWrapper>
  </PlainCard>
);

export default ExchangeCurrencyForm;
