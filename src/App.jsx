import react from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ----- Authentication -----
import Authentication from "./pages/auth/Authentication";
import SignUpOtpSend from "./pages/auth/otps/SignUpOtpSend";
import SignUpOtpVerify from "./pages/auth/otps/SignUpOtpVerify";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ForgetPasswordOtpSend from "./pages/auth/otps/ForgetPasswordOtpSend";
import ForgetPasswordOtpVerify from "./pages/auth/otps/ForgetPasswordOtpVerify";

// ----- UserLayout -----
import UserLayout from "./layouts/UserLayout";
import ChatWindow from "./pages/Chat/ChatWindow";
import UserProfile from "./pages/Chat/UserProfile";
import FriendProfile from "./pages/Chat/FriendProfile";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Authentication />,
    },
    {
      path: "/account-otp",
      element: <SignUpOtpSend />,
    },
    {
      path: "/account-verify",
      element: <SignUpOtpVerify />,
    },
    {
      path: "/forget-otp",
      element: <ForgetPasswordOtpSend />,
    },
    {
      path: "/forget-verify",
      element: <ForgetPasswordOtpVerify />,
    },
    {
      path: "/reset-password",
      element: <ForgetPassword />,
    },
    {
      path: "/main",
      element: <UserLayout />,
      children: [
        {
          path: ":id",
          element: <ChatWindow />,
        },
      ],
    },
    {
      path: "/profile/",
      element: <UserProfile />,
    },
    {
      path: "/friend-profile/:id",
      element: <FriendProfile />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
