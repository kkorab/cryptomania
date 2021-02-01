import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledListItem = styled.li`
  width: 170px;
  height: 30px;
  margin-bottom: 1rem;
`;

const MenuItem = ({ children }) => <StyledListItem>{children}</StyledListItem>;

MenuItem.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MenuItem;
