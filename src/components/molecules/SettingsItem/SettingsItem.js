import React, { useState } from 'react';
import { SettingsRow, SettingsRowContent } from 'components/atoms';
import PropTypes from 'prop-types';

const SettingsItem = ({ data }) => {
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <SettingsRow data={data} handleClick={handleClick} />
      <SettingsRowContent isHidden={isHidden} />
    </>
  );
};

SettingsItem.propTypes = {
  data: PropTypes.arrayOf().isRequired,
};

export default SettingsItem;
