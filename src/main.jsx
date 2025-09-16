import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import NewUsers from './Components/NewUsers.jsx';
import AllUsers from './Components/AllUsers.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: '/newUsers',
        element:<NewUsers></NewUsers>
      },
      {
        path:'/allUsers',
        element:<AllUsers></AllUsers>
      }

    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
