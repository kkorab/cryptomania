import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { Button, PageWrapper } from 'components/atoms';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PersonIcon from '@material-ui/icons/Person';

const StyledUserBarWrapper = styled.div`
  margin-left: auto;
  width: 450px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledUserProfileButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    width: 8px;
    height: 8px;
    background: #16c79a;
    position: absolute;
    bottom: 0;
    right: 1px;
    border-radius: 50%;
  }
`;

const StyledNotificationButton = styled(StyledUserProfileButton)`
  &::after {
    background: #ec4f43;
  }
`;

const iconStyles = {
  fontSize: '2.4rem',
  color: '#918195',
};

const UserBar = () => {
  let { pathname } = useLocation();
  console.log(pathname);
  return (
    pathname !== '/' && (
      <PageWrapper>
        <StyledUserBarWrapper>
          <Button thin>
            <ArrowUpwardIcon /> Send
          </Button>
          <Button thin>
            <ArrowDownwardIcon />
            Request
          </Button>
          <StyledNotificationButton>
            <NotificationsNoneIcon style={iconStyles} />
          </StyledNotificationButton>
          <StyledUserProfileButton>
            <PersonIcon style={iconStyles} />
          </StyledUserProfileButton>
        </StyledUserBarWrapper>
      </PageWrapper>
    )
  );
};

export default UserBar;
