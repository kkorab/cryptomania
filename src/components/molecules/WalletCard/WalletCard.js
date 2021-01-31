import React from 'react';
import styled from 'styled-components';
import wavesCover from 'assets/images/waves2.png';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { showUp } from 'animations';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  margin: 2rem 0;
  width: 380px;
  height: 200px;
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  color: ${({ theme }) => theme.fontColors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ colors }) => `linear-gradient(
    225deg,
    ${colors[0]} 0%,
    ${colors[1]} 100%
  )`};
  animation: ${showUp} 1s;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  text-shadow: ${({ theme }) => theme.textShadow.regular};
`;

const StyledWrapper = styled.div`
  height: 90%;
  width: 90%;
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;

const StyledValuesWrapper = styled.div``;

const StyledWalletName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const StyledWalletOwnedValue = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const StyledWalletOwnedValueToDollars = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const StyledActionsWrapper = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
`;

const StyledAction = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

  & h5 {
    color: ${({ theme }) => theme.fontColors.white};
    font-family: ${({ theme }) => theme.fonts.mainFont};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-shadow: ${({ theme }) => theme.textShadow.regular};
  }

  & svg {
    width: 14px;
    height: 14px;
    background: white;
    border-radius: 50%;
    color: ${({ colors }) => colors && colors[1]};
    margin-right: 0.6rem;
  }
`;

const StyledImageCover = styled.img`
  width: 100%;
  top: 0;
  position: absolute;
  opacity: 0.2;
`;

const StyledCurrencyLogoWrapper = styled.div`
  position: absolute;
  width: 100px;
  top: 20px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h5 {
    margin-top: 0.5rem;
  }
`;

const StyledCurrencyLogo = styled.img`
  width: 40%;
`;

const WalletCard = ({ data }) => {
  const { currency, fullName, ownedValue, colors, price, logo } = data;
  const dollarsValue = ownedValue * price;
  const formattedValue = new Intl.NumberFormat().format(dollarsValue);
  return (
    <StyledCard colors={colors}>
      <StyledImageCover src={wavesCover} />
      <StyledWrapper>
        <StyledWalletName>{currency} ballance</StyledWalletName>
        <StyledValuesWrapper>
          <StyledWalletOwnedValue>
            {currency} {ownedValue.toFixed(3)}
          </StyledWalletOwnedValue>
          <StyledWalletOwnedValueToDollars>
            ${formattedValue}
          </StyledWalletOwnedValueToDollars>
        </StyledValuesWrapper>
        <StyledActionsWrapper>
          <StyledAction colors={colors}>
            <ArrowUpwardIcon />
            <h5>Send {currency}</h5>
          </StyledAction>
          <StyledAction colors={colors}>
            <ArrowDownwardIcon />
            <h5>Request {currency}</h5>
          </StyledAction>
        </StyledActionsWrapper>
      </StyledWrapper>
      <StyledCurrencyLogoWrapper>
        <StyledCurrencyLogo src={logo} />
        <h5>{fullName}</h5>
      </StyledCurrencyLogoWrapper>
    </StyledCard>
  );
};

WalletCard.propTypes = {
  data: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    ownedValue: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
};

export default WalletCard;
