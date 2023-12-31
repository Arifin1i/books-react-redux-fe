/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import BookDetails from '../pages/BookDetails';
import MainLayout from '../layouts/MainLayout';
import Books from '../pages/Books';
import { LoginForm } from '../pages/Login';
import { Signup } from '../pages/SignUp';
import NewBooks from '../pages/NewBooks';
import BookEditForm from '../pages/BookEditForm';
import PrivateRoute from './PrivateRoute';



const routes = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    // element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/books',
        element:  <Books></Books>
      },
      {
        path: '/books/:id',
        element: <BookDetails book={undefined}></BookDetails>,
        // loader: ({params})=> fetch(`http://localhost:5000/books/${params.id}`)
      },
      {
        path: '/bookEditForm/:id',
        element: <BookEditForm book={undefined}></BookEditForm>
      },
    ],
  },
  {
    path: '/login',
    element: <LoginForm></LoginForm>
  },
  {
    path: '/signup',
    element: <Signup></Signup>
  },
  {
    path: '/newBooks',
    element: <PrivateRoute><NewBooks></NewBooks></PrivateRoute>
  },

//   {
//     path: '*',
//     element: <NotFound />,
//   },
]);

export default routes;