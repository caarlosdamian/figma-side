import React, { ReactElement } from "react";
import { Home } from "../pages/Home";
import { Overview } from "../pages/Overview";

interface Routes {
  path: string;
  name: string;
  component: ReactElement;
}

export const routes: Routes[] = [
  {
    path: "/",
    name: "Home",
    component: <Home />,
  },
  {
    path: "/overview",
    name: "Overview",
    component: <Overview />,
  },
];
