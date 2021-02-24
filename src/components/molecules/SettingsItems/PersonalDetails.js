import React from 'react';
import data from 'data';
import PropTypes from 'prop-types';
import withSettingsLogic from 'hoc/withSettingsLogic';
import {
  SettingsItem,
  SettingsItemContentRow,
  SettingsItemContentWrapper,
} from 'components/atoms';

const PersonalDetails = ({ isHidden, handleClick }) => (
  <>
    <SettingsItem data={data.settings.menu[0]} handleClick={handleClick} />
    <SettingsItemContentWrapper isHidden={isHidden}>
      {data.settings.personalDetails.map(el => (
        <SettingsItemContentRow key={el.headline} itemData={el} />
      ))}
    </SettingsItemContentWrapper>
  </>
);
PersonalDetails.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default withSettingsLogic(PersonalDetails);
