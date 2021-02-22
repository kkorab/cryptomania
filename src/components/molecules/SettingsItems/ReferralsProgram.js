import React from 'react';
import styled from 'styled-components';
import data from 'data';
import PropTypes from 'prop-types';
import withSettingsLogic from 'hoc/withSettingsLogic';
import {
  Button,
  SettingsItem,
  SettingsItemContentWrapper,
} from 'components/atoms';
import usersImage from 'assets/images/users.png';

const StyledReferralsWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
`;

const StyledImage = styled.img`
  width: 80px;
`;

const StyledContent = styled.div`
  margin-left: 2rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 1px solid ${({ theme }) => theme.fontColors.grey};

  & h3 {
  }

  & p {
    color: ${({ theme }) => theme.fontColors.grey};
  }
`;

const StyledInputWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & input {
    padding: 0.5rem;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.1);
    border: none;
    width: 400px;
  }
`;

const ReferralsProgram = ({ isHidden, handleClick }) => (
  <>
    <SettingsItem data={data.settings.menu[4]} handleClick={handleClick} />
    <SettingsItemContentWrapper isHidden={isHidden}>
      <StyledReferralsWrapper>
        <StyledImage src={usersImage} alt="users" />
        <StyledContent>
          <h3>Refferals</h3>
          <p>You may refer your friends to Skrill using this link.</p>
        </StyledContent>
      </StyledReferralsWrapper>
      <StyledInputWrapper>
        <input
          disabled="true"
          type="text"
          value="https://account.cryptomania.com/signup?rid=94403489"
        />
        <Button type="button">Copy link</Button>
      </StyledInputWrapper>
    </SettingsItemContentWrapper>
  </>
);
ReferralsProgram.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default withSettingsLogic(ReferralsProgram);
