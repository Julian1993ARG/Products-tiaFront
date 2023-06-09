import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Home, Admin, AdminHome } from '@/pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { routes } from './models';
import { ProductsContextProvider } from '../context/products.context';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilitiesConfigurator } from './utils';
import { AxiosInterceptor } from '../interceptors/axios.interceptor';

AxiosInterceptor();

const router = createBrowserRouter([
  {
    path: routes.Home.path,
    element: <Home />,
  },
  {
    path: routes.Admin.path,
    element: <Admin />,
    children: [
      {
        path: routes.Admin.path,
        element: <AdminHome />,
      },
    ],
  },
]);

const rootElement = document.querySelector('[data-js="root"]');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <SnackbarProvider maxSnack={3}>
      <SnackbarUtilitiesConfigurator />
      <ProductsContextProvider>
        <RouterProvider router={router} />
      </ProductsContextProvider>
    </SnackbarProvider>
  </StrictMode>,
);
