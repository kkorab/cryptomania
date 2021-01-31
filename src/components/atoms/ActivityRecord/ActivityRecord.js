import React from 'react';
import styled from 'styled-components';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const StyledRecord = styled.div`
  padding: 0.5rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;

  & svg {
    font-size: 2rem;
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

const ActivityRecord = () => (
  <StyledRecord>
    <StyledCurrencySymbol />
    <StyledTransactionDataWrapper>
      <StyledTransactionDate>18.07.2020, 20:06:12</StyledTransactionDate>
      <StyledTransactionNumber>
        0x2499em12xx0248461dd33491
      </StyledTransactionNumber>
    </StyledTransactionDataWrapper>
    <StyledTransactionValueWrapper>
      <StyledTransactionValue>+0,5 BTC</StyledTransactionValue>
      <StyledTransactionDollarsValue>$5,791.45</StyledTransactionDollarsValue>
    </StyledTransactionValueWrapper>
    <MoreVertIcon />
  </StyledRecord>
);

export default ActivityRecord;
