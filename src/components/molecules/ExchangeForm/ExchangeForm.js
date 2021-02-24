import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFormWrapper = styled.div`
  padding: 1rem;
  min-height: 160px;
  margin: 0 auto;
  width: 90%;
  max-width: 600px;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.fontColors.lightGrey};

  &:first-child {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  & p {
    text-align: center;
    padding: 5px 0;
  }

  & p:last-child {
    padding: 5px 0;
    margin: 10px auto;
    color: ${({ theme }) => theme.fontColors.grey};
    background: rgba(0, 0, 0, 0.05);
    border-radius: ${({ theme }) => theme.borderRadius.xtraSmall};
    text-align: center;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & label {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-transform: uppercase;

    & input {
      width: auto;
      background: none;
      border: none;
      outline: none;
      font-size: ${({ theme }) => theme.fontSizes.xxxxl};
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      text-align: center;
      color: ${({ theme }) => theme.fontColors.primary};
    }

    & input::placeholder {
      color: ${({ theme }) => theme.fontColors.lightGrey};
    }
  }
`;

const StyledCurrencySelectInput = styled.select`
  width: 80px;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
`;

const ExchangeForm = ({ from }) => {
  const [inputValue, setInputValue] = useState(null);

  const handleChange = e => {
    const elementValue = Number(e.target.value);
    setInputValue(elementValue);
  };

  return (
    <StyledFormWrapper>
      {from && <p>1 USD = 3.51454 AED</p>}
      <StyledForm>
        {from ? (
          <label htmlFor="exchangeValue">
            from
            <input
              autoComplete="off"
              onBlur={handleChange}
              placeholder="0.00"
              type="text"
              value={inputValue ? inputValue.toFixed(2) : null}
              name="exchangeValue"
            />
          </label>
        ) : (
          <label htmlFor="exchangeValue">
            to
            <input
              autoComplete="off"
              onBlur={handleChange}
              placeholder="0.00"
              type="text"
              value={inputValue ? inputValue.toFixed(2) : null}
              name="exchangeValue"
            />
          </label>
        )}
      </StyledForm>
      {from ? <p> MAX AMOUNT - USD 28.84</p> : null}
      <StyledCurrencySelectInput>USD</StyledCurrencySelectInput>
    </StyledFormWrapper>
  );
};

ExchangeForm.propTypes = {
  from: PropTypes.bool,
};

ExchangeForm.defaultProps = {
  from: false,
};

export default ExchangeForm;
