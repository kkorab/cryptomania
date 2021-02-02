import React from 'react';
import styled from 'styled-components';
import { Button, PlainCard } from 'components/atoms';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const StyledHeadline = styled.h3`
  color: ${({ theme }) => theme.fontColors.grey};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const StyledWalletOwnedValue = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const StyledSubheadline = styled.h3`
  color: ${({ theme }) => theme.fontColors.grey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const StyledTextWrapper = styled.div``;

const StyledButtonsWrapper = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-between;
`;

const StyledMoreOptions = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  & svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.fontColors.grey};
  }
`;

const AccountCard = () => (
  <PlainCard>
    <>
      <StyledHeadline>Your ballance</StyledHeadline>
      <StyledTextWrapper>
        <StyledWalletOwnedValue>$2,814.27</StyledWalletOwnedValue>
        <StyledSubheadline> Available</StyledSubheadline>
      </StyledTextWrapper>
      <StyledButtonsWrapper>
        <Button thin>Deposit</Button>
        <Button thin>Withdraw</Button>
      </StyledButtonsWrapper>
      <StyledMoreOptions>
        <MoreVertIcon />
      </StyledMoreOptions>
    </>
  </PlainCard>
);

export default AccountCard;
