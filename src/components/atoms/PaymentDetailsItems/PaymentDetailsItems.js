import React from 'react';
import styled from 'styled-components';
import TodayIcon from '@material-ui/icons/Today';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SyncAltIcon from '@material-ui/icons/SyncAlt';

const ItemsWrapper = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledItemDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    font-size: 2rem;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.fontColors.grey};
  }
  & p {
    color: ${({ theme }) => theme.fontColors.grey};
  }
`;

const StyledItemContent = styled.div`
  & p {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

const PaymentDetailsItems = () => (
  <ItemsWrapper>
    <StyledItemWrapper>
      <StyledItemDesc>
        <TodayIcon />
        <p>Delivery</p>
      </StyledItemDesc>
      <StyledItemContent>
        <p>27 July 20:30</p>
      </StyledItemContent>
    </StyledItemWrapper>
    <StyledItemWrapper>
      <StyledItemDesc>
        <MonetizationOnIcon />
        <p>Conversion rate</p>
      </StyledItemDesc>
      <StyledItemContent>
        <p>1,109.64</p>
      </StyledItemContent>
    </StyledItemWrapper>
    <StyledItemWrapper>
      <StyledItemDesc>
        <SyncAltIcon />
        <p>Recipent gets:</p>
      </StyledItemDesc>
      <StyledItemContent>
        <p>$0.48</p>
      </StyledItemContent>
    </StyledItemWrapper>
  </ItemsWrapper>
);

export default PaymentDetailsItems;
