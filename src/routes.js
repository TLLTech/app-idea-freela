import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

// Menu Drawer
import RequestProfile from "./pages/RequestProfile";
import Contact from "./pages/Contact";
import Logout from "./pages/Logout";
import Admin from "./pages/Admin";

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    RequestProfile,
    Dashboard: createDrawerNavigator(
      {
        Home: Dashboard,
        Contact,
        Admin,
        Logout
      },
      {
        drawerBackgroundColor: "#1a9ae2",
        drawerType: "front",
        hideStatusBar: false,
        contentOptions: {
          activeTintColor: "#fff",
          inactiveTintColor: "#ddd"
        }
      }
    )
  })
);
