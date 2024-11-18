import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './Singup/Signup';
import Login from './Login/Login';
import Home from './Home/Home';
import Feedpage from './Feedpage/Feedpage'
import WorkoutJournal from './WorkoutJournal/WorkoutJournal'
import FoodJournal from './FoodJournal/FoodJournal'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AccountSetup from './AccountSetup/AccountSetup';

// Create a default MUI theme (you can customize this later if needed)
const theme = createTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1 style= {{color: "white"}}> 404 Not Found </h1>
  },
  {
    path: '/Signup',
    element: <Signup />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Feedpage',
    element: <Feedpage />,
  },
  {
    path: '/WorkoutJournal',
    element: <WorkoutJournal />,
  },
  {
    path: '/FoodJournal',
    element: <FoodJournal />,
  },
  {
    path: 'AccountSetup',
    element: <AccountSetup />
  }
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>
);