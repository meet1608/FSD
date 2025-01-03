import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import UserProfile from "./pages/userprofile";


import Flights from "./pages/dashboard/booking-management/flights";
import Hotels from "./pages/dashboard/booking-management/hotels";
import Buses from "./pages/dashboard/booking-management/buses";
import Holidays from "./pages/dashboard/booking-management/holidays";
import VisaServices from "./pages/dashboard/booking-management/visa-services";


import Layout from "./pages/dashboard/layout";
import AuthProvider from "./components/auth-provider";

import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import NotFound from "./pages/auth/not-found";

import Customers from "./pages/dashboard/user-management/customers";
import Agents from "./pages/dashboard/user-management/agents";
import Admins from "./pages/dashboard/user-management/admins";
import Corporate from "./pages/dashboard/user-management/corporate";

import RevenueReport from "./pages/dashboard/report-and-analytics/revenue-report";
import UserActivityReport from "./pages/dashboard/report-and-analytics/user-activity-report";
import BookingTrends from "./pages/dashboard/report-and-analytics/booking-trends";
import CustomReports from "./pages/dashboard/report-and-analytics/custom-reports";

import SupportTickets from "./pages/dashboard/support-and-assistance/support-tickets";
import CommissionManagement from "./pages/dashboard/payment-and-transations/comission-management";
import TransactionsMonitoring from "./pages/dashboard/payment-and-transations/transaction-monitoring";
import RefundManagement from "./pages/dashboard/payment-and-transations/refund-management";

import AddFlights from "./pages/dashboard/booking-management/addflights";
import AddHolidays from "./pages/dashboard/booking-management/addholidays";
import AddVisa_service from "./pages/dashboard/booking-management/addvisa_services";
import AddBuses from "./pages/dashboard/booking-management/addbuses";
import AddHotels from "./pages/dashboard/booking-management/addhotels";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <AuthProvider />,
    children: [
      {
        path: "/dashboard",
        element: <Layout />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },

          {
            path: "user-management/customers",
            element: <Customers />,
          },
          {
            path: "user-management/corporate",
            element: <Corporate />,
          },
          {
            path: "user-management/agents",
            element: <Agents />,
          },
          {
            path: "user-management/admins",
            element: <Admins />,
          },
          
          {
            path: "booking-management/flights",
            element: <Flights />,
          },
          {
            path: "booking-management/hotels",
            element: <Hotels />,
          },
          {
            path: "booking-management/buses",
            element: <Buses />,
          },
          {
            path: "booking-management/holidays",
            element: <Holidays />,
          },
          {
            path: "booking-management/visa-services",
            element: <VisaServices />,
          },
          {
            path: "report-and-analytics/revenue-report",
            element: <RevenueReport />,
          },
          {
            path: "report-and-analytics/user-activity-report",
            element: <UserActivityReport />,
          },
          {
            path: "report-and-analytics/booking-trends",
            element: <BookingTrends />,
          },
          {
            path: "report-and-analytics/custom-reports",
            element: <CustomReports />,
          },
          {
            path: "support-and-assistance/support-tickets",
            element: <SupportTickets />,
          },
          {
            path: "payments-and-transactions/transation-monitoring",
            element: <TransactionsMonitoring />,
          },
          {
            path: "payments-and-transactions/refund-management",
            element: <RefundManagement />,
          },
          {
            path: "payments-and-transactions/comission-management",
            element: <CommissionManagement />,
          },
          {
            path: "booking-management/addflights",
            element: <AddFlights />,
          },
          {
            path: "booking-management/addhotels",
            element: <AddHotels />,
          },
          {
            path: "booking-management/addbuses",
            element: <AddBuses />,
          },
          {
            path: "booking-management/addholidays",
            element: <AddHolidays />,
          },
          {
            path: "booking-management/addvisa_services",
            element: <AddVisa_service />,
          },
          
        ],
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path :"/register",
    element : < Register />,
  },
  {
    path : "*",
    element : < NotFound />, 
  },
  {
    path : "userprofile",
    element : < UserProfile />,
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
