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
import UpdateProfile from "../pages/UpdateProfile";
import Loading from "../pages/Loading";


const router =createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout></HomeLayout>,
    children:[
    {
      path:"",
      element:<Home></Home>,
      loader: ()=>fetch('/games.json'),
      hydrateFallbackElement: <Loading></Loading>

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
      hydrateFallbackElement: <Loading></Loading>
    },
    

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
      },
      {
      path: '/auth/updateprofile',
      element: <UpdateProfile></UpdateProfile>
    }
      
    ]
  },
  {
    path:'/*',
    element: <h2>eroor page 404 of mine</h2>
  }
 
])

export default router;