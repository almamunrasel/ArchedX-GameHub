import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import InstalledGamePage from "../pages/InstalledGamePage";
import AllGame from "../pages/AllGame";
import Home from "../pages/Home";
import GameDetails from "../Components/GameDetails";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import ForgetPassword from "../pages/ForgetPassword";
import PrivateRoute from "../Context/PrivateRoute";

const router =createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout></HomeLayout>,
    children:[
    {
      path:"",
      element:<Home></Home>,
      loader: ()=>fetch('/games.json'),

    },
    {
    path:'/allgames',
    element: <AllGame></AllGame>
    },
    {
      path:'/installedGame',
      element: <InstalledGamePage></InstalledGamePage>

    },
    {
      path:'/gameDetails/:id',
      element:<PrivateRoute><GameDetails></GameDetails></PrivateRoute>,
       loader: ()=>fetch('/games.json'),
    }

    ]

  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path: '/auth/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/auth/registration',
        element: <RegistrationPage></RegistrationPage>
      },
      {
        path:'/auth/forgotpassword',
        element: <ForgetPassword></ForgetPassword>
      }
      
    ]
  }
 
])

export default router;