/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// import { useState } from "react"
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"

//Styles
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

import App from "./App"
import Login from "./Login"
import Header from "./Header"
import Footer from "./Footer"
import ErrorPage from "./ErrorPage"
import { AuthProvider } from "./authContext"
import CreateUser from "./CreateUser"
import ProtectedRoute from "./ProtectedRoute"
import BookList from "./BookList"
import CreateBook from "./CreateBook"

function Layout() {
  return (
    <>
      <Header />
      <div id="page-content">
        <Outlet />  {/* this is populated with the children defined in createBrowserRouter */}
      </div>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/books",
        element: (
          <ProtectedRoute>
            <BookList />
          </ProtectedRoute>
        )
      },
      {
        path: "/books/create",
        element: (
          <ProtectedRoute>
            <CreateBook />
          </ProtectedRoute>
        )
      },
      {
        path: "/createUser",
        element: <CreateUser />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
