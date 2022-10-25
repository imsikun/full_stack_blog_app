import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Single_post from './pages/Single_post';
import Write from './pages/Write';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './styles.scss';

//creating a separate component and passing the parent and children routes

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post/:id',
        element: <Single_post />,
      },
      {
        path: '/write',
        element: <Write />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/write',
    element: <Write />,
  },
  {
    path: '/post',
    element: <Single_post />,
  },
]);

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
