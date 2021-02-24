import React from 'react';
import data from 'data';
import PropTypes from 'prop-types';
import withSettingsLogic from 'hoc/withSettingsLogic';
import {
  SettingsItem,
  SettingsItemContentRow,
  SettingsItemContentWrapper,
} from 'components/atoms';

const Security = ({ isHidden, handleClick }) => (
  <>
    <SettingsItem data={data.settings.menu[5]} handleClick={handleClick} />
    <SettingsItemContentWrapper isHidden={isHidden}>
      {data.settings.security.map(el => (
        <SettingsItemContentRow key={el.headline} itemData={el} />
      ))}
    </SettingsItemContentWrapper>
  </>
);
Security.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default withSettingsLogic(Security);
