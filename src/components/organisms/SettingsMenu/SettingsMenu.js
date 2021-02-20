import React, { useState } from 'react';
import styled from 'styled-components';
import data from 'data';
import { SettingsItem } from 'components/molecules';

const StyledSettingsWrapper = styled.div`
  margin-top: 20px;
`;

const SettingsMenu = () => {
  const [settings] = useState(data.settings.menu);
  return (
    <StyledSettingsWrapper>
      {settings.map(el => (
        <SettingsItem data={el} key={el.headline} />
      ))}
    </StyledSettingsWrapper>
  );
};

export default SettingsMenu;
