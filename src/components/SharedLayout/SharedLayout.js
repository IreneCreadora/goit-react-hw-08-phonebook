import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';

import { AppBar } from '../AppBar/AppBar';
import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<InfinitySpin width="200" color="#9f40ff" />}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Container>
  );
};
