import React from 'react';
import styled from 'styled-components';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {
  Button,
  PaymentDetailsData,
  PaymentDetailsItems,
  PlainCard,
} from 'components/atoms';

const StyledHeadline = styled.h2``;

const StyledPaymentDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.fontColors.grey};
`;

const StyledArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    color: ${({ theme }) => theme.fontColors.primary};
    font-size: 3rem;
  }
`;

const StyledPaymentsMoreInfo = styled.div`
  height: 200px;
  width: 80%;
  padding-top: 2rem;
  margin: 0 auto;
`;

const StyledButtonWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 250px;
`;

const PaymentsDetails = () => (
  <PlainCard fullHeight>
    <>
      <StyledHeadline>Payments Details</StyledHeadline>
      <StyledPaymentDataWrapper>
        <PaymentDetailsData />
        <StyledArrowWrapper>
          <ArrowForwardIcon />
        </StyledArrowWrapper>
        <PaymentDetailsData />
      </StyledPaymentDataWrapper>
      <StyledPaymentsMoreInfo>
        <PaymentDetailsItems />
      </StyledPaymentsMoreInfo>
      <StyledButtonWrapper>
        <Button formBtn>Confirm</Button>
      </StyledButtonWrapper>
    </>
  </PlainCard>
);

export default PaymentsDetails;
