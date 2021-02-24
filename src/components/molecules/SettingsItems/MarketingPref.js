import React from 'react';
import data from 'data';
import {
  SettingsItem,
  SettingsItemContentRow,
  SettingsItemContentWrapper,
} from 'components/atoms';
import withSettingsLogic from 'hoc/withSettingsLogic';
import PropTypes from 'prop-types';

const MarketingPref = ({ isHidden, handleClick }) => (
  <>
    <SettingsItem data={data.settings.menu[3]} handleClick={handleClick} />
    <SettingsItemContentWrapper isHidden={isHidden}>
      {data.settings.marketingPreferences.map(el => (
        <SettingsItemContentRow key={el.headline} switchBtn itemData={el} />
      ))}
    </SettingsItemContentWrapper>
  </>
);
MarketingPref.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default withSettingsLogic(MarketingPref);
