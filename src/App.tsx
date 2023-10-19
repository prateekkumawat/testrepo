import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';
// import 'antd/dist/reset.css';
import { Provider as ReduxProvider, useSelector } from 'react-redux';

import { theme } from './Theme/theme';
import './App.scss';
import AppGlobalStyle from '../public/assets/styles/AppStyles.styled';
import Layout from './pages/Layout/Layout';

import {
  AdminRoutes,
  AuthenticatedRoutes,
  UnAuthenticatedRoutes,
} from './Routes';
import { store } from './Store/Store';
import { UserAuth, UserAuthSelector } from './Store/Slice/User.slice';

const App: React.FC = () => {
  const userAuth: UserAuth = useSelector(UserAuthSelector);
  // if (userAuth?.accessToken) {
  //   if (userAuth?.isAdmin) return <AdminRoutes />;
  return <AuthenticatedRoutes />;
  // }
  return (
    <>
      <UnAuthenticatedRoutes />
      <AuthenticatedRoutes />
    </>
  );
};

const WrappedApp: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: theme.primary.main,
                colorPrimaryText: theme.primary.contrastTextColor,
                colorFillSecondary: theme.secondary.main,
                colorTextSecondary: theme.secondary.contrastTextColor,
                borderRadius: parseInt(
                  theme.borderRadius.main.split('px')[0],
                  10
                ),
                fontFamily: theme.font.family,
              },
            }}
          >
            <ThemeProvider theme={theme}>
              <AppGlobalStyle />
              <Layout>
                <App />
              </Layout>
            </ThemeProvider>
          </ConfigProvider>
        </ReduxProvider>
      </BrowserRouter>
    </>
  );
};

export default WrappedApp;
