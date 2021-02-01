import React from 'react';
import styled from 'styled-components';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';

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

const StyledCurrencySymbol = styled.div`
  width: 30px;
  height: 30px;
  background: gold;
  border-radius: 50%;
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

const ActivityRecord = ({ transaction }) => {
  const { currency, date, transactionID, transactionValue } = transaction;
  return (
    <StyledRecord>
      <StyledCurrencySymbol />
      <StyledTransactionDataWrapper>
        <StyledTransactionDate>{date}</StyledTransactionDate>
        <StyledTransactionNumber>{transactionID}</StyledTransactionNumber>
      </StyledTransactionDataWrapper>
      <StyledTransactionValueWrapper>
        <StyledTransactionValue>
          +{transactionValue} {currency}
        </StyledTransactionValue>
        <StyledTransactionDollarsValue>$5,791.45</StyledTransactionDollarsValue>
      </StyledTransactionValueWrapper>
      <StyledButtonOptions>
        <MoreVertIcon />
      </StyledButtonOptions>
    </StyledRecord>
  );
};

ActivityRecord.propTypes = {
  transaction: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    transactionID: PropTypes.string.isRequired,
    transactionValue: PropTypes.number.isRequired,
  }).isRequired,
};

export default ActivityRecord;
