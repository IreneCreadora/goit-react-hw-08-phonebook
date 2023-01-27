import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';

import { AppBar } from '../AppBar/AppBar';
import { Container, Loader } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense
        fallback={
          <Loader>
            <InfinitySpin width="200" color="#9f40ff" />
          </Loader>
        }
      >
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Container>
  );
};
