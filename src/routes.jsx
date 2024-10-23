import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import Employees from 'views/employees';

import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes = [
  {
    exact: 'true',
    path: '/login',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/auth/signin-1',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/auth/signup-1',
    element: lazy(() => import('./views/auth/signup/SignUp1'))
  },
  {
    exact: 'true',
    path: '/dashboard/default',
    layout: AdminLayout,
    element: lazy(() => import('./views/dashboard'))
  },
  {
    exact: 'true',
    path: '/profile',
    element: lazy(() => import('./views/Profile'))
  },
  {
    exact: 'true',
    path: '/leave-request-form',
    element: lazy(() => import('./views/LeaveRequestForm'))
  },
  {
    exact: 'true',
    path: '/leave-request-form/:request_id',
    element: lazy(() => import('./views/LeaveRequestForm'))
  },
  {
    exact: 'true',
    path: '/',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },

  // Editing the routes array

  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        exact: 'true',
        path: '/app/dashboard/default',
        element: lazy(() => import('./views/dashboard'))
      },
      {
        exact: 'true',
        path: '/app/employees',
        element: lazy(() => import('./views/Employees'))
      },
      {
        exact: 'true',
        path: '/app/leave-applications',
        element: lazy(() => import('./views/LeaveApplications'))
      },
      {
        exact: 'true',
        path: '/app/leave-applications/leave-request-form',
        element: lazy(() => import('./views/LeaveRequestForm'))
      },
      {
        exact: 'true',
        path: '/app/reports',
        element: lazy(() => import('./views/Reports'))
      },
      {
        exact: 'true',
        path: '/app/profile',
        element: lazy(() => import('./views/Profile'))
      },
      {
        exact: 'true',
        path: '/app/log-out',
        element: lazy(() => import('./views/auth/signin/SignIn1'))
      },
    ]
  }
];

export default routes;
