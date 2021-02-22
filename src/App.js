import React from 'react';
import mainTheme from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Activities,
  Dashboard,
  ErrorPage,
  Exchange,
  Home,
  Payments,
  Settings,
  Wallets,
} from 'views';
import routes from 'routes';
import { Menu, UserBar } from 'components/organisms';
import MobileInfo from 'MobileInfo';

const App = () => {
  const {
    activities,
    dashboard,
    home,
    exchange,
    payments,
    wallets,
    settings,
  } = routes;
  return (
    <>
      <MobileInfo />
      <ThemeProvider theme={mainTheme}>
        <>
          <GlobalStyle />
          <BrowserRouter>
            <UserBar />
            <Menu />
            <Switch>
              <Route path={dashboard} component={Dashboard} />
              <Route path={payments} component={Payments} />
              <Route path={activities} component={Activities} />
              <Route path={wallets} component={Wallets} />
              <Route path={exchange} component={Exchange} />
              <Route path={settings} component={Settings} />
              <Route exact path={home} component={Home} />
              <Route component={ErrorPage} />
            </Switch>
          </BrowserRouter>
        </>
      </ThemeProvider>
    </>
  );
};

export default App;
