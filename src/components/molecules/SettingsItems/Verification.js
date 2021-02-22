import React from 'react';
import data from 'data';
import PropTypes from 'prop-types';
import withSettingsLogic from 'hoc/withSettingsLogic';
import {
  SettingsItem,
  SettingsItemContentRow,
  SettingsItemContentWrapper,
} from 'components/atoms';

const Verification = ({ isHidden, handleClick }) => (
  <>
    <SettingsItem data={data.settings.menu[6]} handleClick={handleClick} />
    <SettingsItemContentWrapper isHidden={isHidden}>
      {data.settings.verification.map(el => (
        <SettingsItemContentRow itemData={el} />
      ))}
    </SettingsItemContentWrapper>
  </>
);
Verification.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default withSettingsLogic(Verification);
