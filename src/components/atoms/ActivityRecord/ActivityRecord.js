import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const StyledRecord = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.bgColors.tertiary};

  &:last-child {
    border: none;
  }
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPriceWrapper = styled.div`
  color: ${({ type }) => (type === 'deposit' ? 'green' : 'black')};
`;

const StyledIconWrapper = styled.div`
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.bgColors.tertiary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    color: ${({ theme }) => theme.fontColors.primary};
  }
`;

const StyledTextWrapper = styled.div`
  padding-left: 3rem;

  & p:first-child {
    color: ${({ theme }) => theme.fontColors.primary};
  }
`;

const StyledDate = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const ActivityRecord = ({ data }) => {
  const { type, content, date, value, currency } = data;
  return (
    <StyledRecord>
      <StyledContent>
        <StyledIconWrapper>
          {type === 'subscription' && <AttachMoneyIcon />}
          {type === 'deposit' && <ArrowDownwardIcon />}
          {type === 'fee' && <ArrowUpwardIcon />}
        </StyledIconWrapper>
        <StyledTextWrapper>
          <p>{content} </p>
          <StyledDate>{date}</StyledDate>
        </StyledTextWrapper>
      </StyledContent>
      <StyledPriceWrapper type={type}>
        <p>
          {type === 'deposit' ? '+ ' : '- '}
          {Number(value).toFixed(2)} {currency}
        </p>
      </StyledPriceWrapper>
    </StyledRecord>
  );
};

ActivityRecord.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ActivityRecord;
