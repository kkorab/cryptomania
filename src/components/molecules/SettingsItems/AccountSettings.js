import React from 'react';
import data from 'data';
import {
  SettingsItem,
  SettingsItemContentRow,
  SettingsItemContentWrapper,
} from 'components/atoms';
import withSettingsLogic from 'hoc/withSettingsLogic';
import PropTypes from 'prop-types';

const AccountSettings = ({ isHidden, handleClick }) => (
  <>
    <SettingsItem data={data.settings.menu[1]} handleClick={handleClick} />
    <SettingsItemContentWrapper isHidden={isHidden}>
      {data.settings.accountSettings.map(el => (
        <SettingsItemContentRow itemData={el} />
      ))}
    </SettingsItemContentWrapper>
  </>
);
AccountSettings.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default withSettingsLogic(AccountSettings);
