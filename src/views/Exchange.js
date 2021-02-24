import React from 'react';
import styled from 'styled-components';
import { Button, PageHeadline, PageWrapper } from 'components/atoms';
import { ExchangeForm } from 'components/molecules';

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;

  & > h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
`;

const StyledFormsWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 700px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.fontColors.grey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & button {
    margin: 20px 0;
  }
`;

const Exchange = () => (
  <>
    <PageWrapper>
      <PageHeadline>Exchange money</PageHeadline>
    </PageWrapper>
    <PageWrapper>
      <StyledContentWrapper>
        <StyledFormsWrapper>
          <ExchangeForm from />
          <ExchangeForm />
          <Button type="submit">Next</Button>
        </StyledFormsWrapper>
      </StyledContentWrapper>
    </PageWrapper>
  </>
);

export default Exchange;
