import React, { useState } from 'react';
import styled from 'styled-components';
import data from 'data';
import { SettingsRow } from 'components/atoms';

const StyledSettingsWrapper = styled.div`
  margin-top: 20px;
`;

const SettingsMenu = () => {
  const [settings] = useState(data.settings);
  return (
    <StyledSettingsWrapper>
      {settings.map(el => (
        <SettingsRow data={el} key={el.headline} />
      ))}
    </StyledSettingsWrapper>
  );
};

export default SettingsMenu;
