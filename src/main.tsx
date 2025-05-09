import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Index from './pages/Index.tsx';
import Login from './pages/Login.tsx';
import Todos from './pages/Todo.tsx';
import Register from './pages/Register.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    Component:Index,
  },
  {
    path:"/login",
    Component:Login
  },
  {
    path:"/todos",
    Component:Todos
  },
  {
    path:"/register",
    Component:Register
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>,
)
