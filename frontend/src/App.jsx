// frontend/src/App.jsx
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import * as sessionActions from './store/session';
import LandingPage from './components/LandingPage';
import SpotDetailsPage from './components/SpotDetailsPage';
import UpdateSpotPage from './components/UpdateSpotPage';
import NewSpotPage from './components/NewSpotPage';
import ManageSpotsPage from './components/ManageSpotsPage';

const Layout = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true);
    });
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/spots',
        children: [
          {
            path: ':spotId',
            element: <SpotDetailsPage />,
          },
          {
            path: ':spotId/edit',
            element: <UpdateSpotPage />,
          },
          {
            path: 'new',
            element: <NewSpotPage />,
          },
          {
            path: 'current',
            element: <ManageSpotsPage />,
          },
        ],
      },
      {
        path: '*',
        element: (
          <main>
            <h1>Page Not Found</h1>
            {/* <button
              onClick={() => navigate('/')}
              className="return-home-button"
            >
              Return to Home Page
            </button> */}
          </main>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
