import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import NavBar from './Navbar/NavBar'
import './App.css'
import './index.css'
import Error_page from './error_page/Error_page'
import Home from './home/Home'
import About from './about/About'
import Contact from './contact/Contact'
import Project from './projects/Project'
import Skill from './skills/Skill'
import FeedBack from './feedback/FeedBack'


const Layout=()=>{
  return(
    <>
  
    <NavBar/>
    <Outlet/>
    </>

  )
}
function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/Portfolio', // base path for the repo
        element: <Layout />,
        errorElement: <Error_page />,
        children: [
          {
            index: true, // default to home page
            element: <Home />
          },
          {
            path: 'about', // no need to include leading `/`
            element: <About />
          },
          {
            path: 'contact',
            element: <Contact />
          },
          {
            path: 'projects',
            element: <Project />
          },
          {
            path: 'skills',
            element: <Skill />
          },
          {
            path: 'feedback',
            element: <FeedBack />
          }
        ]
      }
    ]
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
