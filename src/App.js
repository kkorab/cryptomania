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
  Wallets,
} from 'views';
import routes from 'routes';
import { Menu, UserBar } from 'components/organisms';

const App = () => (
  <ThemeProvider theme={mainTheme}>
    <>
      <GlobalStyle />
      <BrowserRouter>
        <UserBar />
        <Menu />
        <Switch>
          <Route path={routes.dashboard} component={Dashboard} />
          <Route path={routes.payments} component={Payments} />
          <Route path={routes.activities} component={Activities} />
          <Route path={routes.wallets} component={Wallets} />
          <Route path={routes.exchange} component={Exchange} />
          <Route exact path={routes.home} component={Home} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </>
  </ThemeProvider>
);

export default App;
