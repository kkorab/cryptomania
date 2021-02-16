import React from 'react';
import styled from 'styled-components';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';
import { currencies } from 'data';

const StyledRecord = styled.div`
  padding: 0.5rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;

  & svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.fontColors.grey};
  }
  &:nth-of-type(2n) {
    background: rgba(245, 245, 245, 1);
  }
`;

const StyledCurrencySymbolWrapper = styled.div`
  width: 30px;
  height: 30px;
  background: ${({ colors }) => `linear-gradient(
    225deg,
    ${colors[0]} 0%,
    ${colors[1]} 100%
  )`};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCurrencySymbol = styled.img`
  width: 50%;
`;

const StyledTransactionDataWrapper = styled.div`
  width: 50%;
`;

const StyledTransactionDate = styled.h4`
  color: black;
`;

const StyledTransactionNumber = styled.p`
  color: ${({ theme }) => theme.fontColors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const StyledTransactionValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTransactionValue = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

const StyledTransactionDollarsValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const StyledButtonOptions = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;

const PaymentRecord = ({ transaction }) => {
  const { currency, date, transactionID, transactionValue } = transaction;
  const currencyData = currencies.find(el => el.currency === currency);
  const { colors, logo, price } = currencyData;

  return (
    <StyledRecord>
      <StyledCurrencySymbolWrapper colors={colors}>
        <StyledCurrencySymbol src={logo} />
      </StyledCurrencySymbolWrapper>
      <StyledTransactionDataWrapper>
        <StyledTransactionDate>{date}</StyledTransactionDate>
        <StyledTransactionNumber>{transactionID}</StyledTransactionNumber>
      </StyledTransactionDataWrapper>
      <StyledTransactionValueWrapper>
        <StyledTransactionValue>
          +{transactionValue.toFixed(2)} {currency}
        </StyledTransactionValue>
        <StyledTransactionDollarsValue>
          ${(transactionValue * price).toFixed(2)}
        </StyledTransactionDollarsValue>
      </StyledTransactionValueWrapper>
      <StyledButtonOptions>
        <MoreVertIcon />
      </StyledButtonOptions>
    </StyledRecord>
  );
};

PaymentRecord.propTypes = {
  transaction: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    transactionID: PropTypes.string.isRequired,
    transactionValue: PropTypes.number.isRequired,
  }).isRequired,
};

export default PaymentRecord;
