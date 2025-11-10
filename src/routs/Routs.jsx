import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Login from "../components/Login";
import Register from "../components/Register";
import AllIssue from "../components/AllIssue";
import IssueDetails from "../components/IssueDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "allIssue",
        loader:()=>fetch('http://localhost:3000/issue'),
        Component: AllIssue,
      },
      {
        path: "/issueDetails/:id",
        loader:({params})=>fetch(`http://localhost:3000/issue/${params.id}`),
        element: <PrivateRoute>
          <IssueDetails></IssueDetails>
        </PrivateRoute>
      },
    ],
  },
]);
export default router;
