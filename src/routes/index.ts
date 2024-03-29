import Home from "../views/Home/index";
import About from "../views/About";
import Contact from "../views/Contact";

import { RouteConfig } from "react-router-config";

const routes: RouteConfig = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    exact: true,
    component: About,
  },
  {
    path: "/contact",
    exact: true,
    component: Contact,
  },
];

export default routes;
