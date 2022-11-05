import Main from '../../Layout/Main';
import About from '../../Pages/About/About';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import Register from '../../Pages/Login/Register/Register';

const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    }
  ]);

  export default router;