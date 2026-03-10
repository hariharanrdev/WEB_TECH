import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import CreateEmp from './Pages/CreateEmp'
import ViewAllEmp from './Pages/ViewAllEmp'
import ViewSingleEmp from './Pages/ViewSingleEmp'
import UpdateEmp from './Pages/UpdateEmp'

const App = () => {

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        { path: "create-emp", element: <CreateEmp /> },
        { path: "view-all-emp", element: <ViewAllEmp /> },
        { path: "view-single-emp/:empid", element: <ViewSingleEmp /> },
        { path: "update-emp/:empid", element: <UpdateEmp /> }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App