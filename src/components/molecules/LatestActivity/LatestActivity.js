import React, { useState } from 'react';
import { PaymentRecord, PlainCard } from 'components/atoms';
import styled from 'styled-components';
import data from 'data';
import PropTypes from 'prop-types';

const StyledActivityDate = styled.p`
  padding-bottom: 1rem;
`;

const LatestActivity = ({ payments }) => {
  const { transactions } = data;
  const [transactionsData] = useState(transactions);
  return (
    <PlainCard fullHeight payments={payments}>
      <>
        <StyledActivityDate>Jul 2020</StyledActivityDate>
        {transactionsData.map(transaction => (
          <PaymentRecord
            key={transaction.transactionID}
            transaction={transaction}
          />
        ))}
      </>
    </PlainCard>
  );
};

LatestActivity.propTypes = {
  payments: PropTypes.bool,
};

LatestActivity.defaultProps = {
  payments: false,
};

export default LatestActivity;
