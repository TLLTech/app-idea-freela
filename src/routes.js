import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

// Menu Drawer
import RequestProfile from "./pages/RequestProfile";
import Contact from "./pages/Contact";
import Logout from "./pages/Logout";

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    Dashboard: createDrawerNavigator(
      {
        Home: Dashboard,
        RequestProfile,
        Contact,
        Logout
      },
      {
        drawerBackgroundColor: "#5A5AEC",
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
