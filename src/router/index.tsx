import React,{ lazy } from "react"
import {Navigate} from "react-router-dom"
const Home = lazy(() => import("../views/Home"))
const About = lazy(() => import("../views/About"))
const withLoadingComponent = (comp: JSX.Element) => {
  <React.Suspense fallback={<div>loading</div>}>
    {comp}
  </React.Suspense>
}
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: withLoadingComponent(<Home />)
  },
  {
    path: "/about",
    element: withLoadingComponent(<About />)
  }
]
export default routes
