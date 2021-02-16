import React from 'react';
import styled from 'styled-components';
import { PlainCard } from 'components/atoms';
import Select from '@material-ui/core/Select';

const StyledSelectWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExchangeCurrencyForm = () => (
  <PlainCard currencyForm>
    <StyledSelectWrapper>
      <p>from</p>
      <Select
        style={{
          width: '100%',
        }}
      >
        <option>BTC</option>
        <option>LTC</option>
        <option>ETH</option>
        <option>BTC</option>
        <option>BTC</option>
      </Select>
    </StyledSelectWrapper>
  </PlainCard>
);

export default ExchangeCurrencyForm;
