import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllIssue from "../pages/AllIssue";
import IssueDetails from "../components/IssueDetails";
import PrivateRoute from "./PrivateRoute";
import ReportIssue from "../pages/ReportIssue";
import LoadingSpinner from "../components/LoadingSpinner";
import MyIssues from "../pages/MyIssues";
import MyContribution from "../pages/MyContribution";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import DashboardLayout from "../layout/DashboardLayout";
import Profile from "../components/Profile";
import DashboardHome from "../components/DashboardHome";
import Contact from "../components/Contact";
import Process from "../components/Process";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "process",
        Component: Process,
      },
      {
        path: "contact",
        Component: Contact,
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
        loader: () =>
          fetch("https://cleantrack-assignment-server.vercel.app/issue"),
        Component: AllIssue,
      },
      {
        path: "/issueDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://cleantrack-assignment-server.vercel.app/issue/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <IssueDetails></IssueDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "myIssue",
        element: (
          <PrivateRoute>
            <MyIssues></MyIssues>
          </PrivateRoute>
        ),
      },
      {
        path: "myContribution",
        element: (
          <PrivateRoute>
            <MyContribution></MyContribution>
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
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
