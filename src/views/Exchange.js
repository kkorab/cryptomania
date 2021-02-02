import React from 'react';
import styled from 'styled-components';
import { PageHeadline, PageWrapper } from 'components/atoms';
import { ExchangeGrid } from 'templates';
import { ExchangeCurrencyForm, PaymentsDetails } from 'components/molecules';

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Exchange = () => (
  <>
    <PageWrapper>
      <PageHeadline>Exchange money</PageHeadline>
    </PageWrapper>
    <ExchangeGrid>
      <>
        <StyledContentWrapper>
          <ExchangeCurrencyForm />
          <ExchangeCurrencyForm />
        </StyledContentWrapper>
        <PaymentsDetails />
      </>
    </ExchangeGrid>
  </>
);

export default Exchange;
