import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllIssue from "../pages/AllIssue";
import IssueDetails from "../components/IssueDetails";
import PrivateRoute from "./PrivateRoute";
import ReportIssue from "../pages/ReportIssue";
import LoadingSpinner from "../components/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement:<LoadingSpinner></LoadingSpinner>,
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
        loader: () => fetch("http://localhost:3000/issue"),
        Component: AllIssue,
      },
      {
        path: "/issueDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/issue/${params.id}`),
        element: (
          <PrivateRoute>
            <IssueDetails></IssueDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "addIssue",
        element: (
          <PrivateRoute>
            <ReportIssue></ReportIssue>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
