import { createBrowserRouter } from "react-router-dom";
import Button from "../pages/Button";
import App from "../pages/app/App";

const router = createBrowserRouter([
  {
    path: '/button',
    element: (<Button title="I'm a Button"/>)
  },
  {
    path: '/app',
    element: (<App/>)
  }
])

export default router
