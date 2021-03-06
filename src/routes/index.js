import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  View,
  Text,
  AsyncStorage
} from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";

// Menu Drawer
import RequestProfile from "../pages/RequestProfile";
import Contact from "../pages/Contact";
import Logout from "../pages/Logout";
import Admin from "../pages/Admin";
import ReviewStar from "../pages/ReviewsStar";

import CustomDrawer from "../components/CustomDrawer";
// import CustomDrawerContentComponent from "./CustomDrawerContentComponent";
//

// const CustomDrawerContentComponent = props => (
//   // const username = AsyncStorage.getItem("@login:username");
//   // const email = AsyncStorage.getItem("@login:email");
//   // const photoUrl = AsyncStorage.getItem("@login:imageUrl");

//   // console.log("name", username);

//   <SafeAreaView style={{ flex: 1 }}>
//     <ScrollView>
//       <View style={{ height: 160, backgroundColor: "#1a9ae2" }}>
//         <View
//           style={{
//             height: 50,
//             width: 50,
//             backgroundColor: "#3EA8E3",
//             borderRadius: 25,
//             marginTop: 40,
//             marginLeft: 20,
//             justifyContent: "center",
//             alignItems: "center"
//           }}
//         >
//           <Text style={{ fontSize: 20, color: "#fff" }}>J</Text>
//         </View>
//         <Text
//           style={{
//             fontSize: 18,
//             color: "#fff",
//             marginTop: 10,
//             marginLeft: 10
//           }}
//         >
//           Julen Goikoetxea
//         </Text>
//         <Text
//           style={{
//             fontSize: 14,
//             color: "#fff",
//             marginTop: 3,
//             marginLeft: 10,
//             marginBottom: 10
//           }}
//         >
//           julen86@gmail.com
//         </Text>
//       </View>
//       <DrawerItems {...props} />
//     </ScrollView>
//   </SafeAreaView>
// );

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    RequestProfile,
    ReviewStar: createStackNavigator({
      ReviewStar
    }),
    Dashboard: createDrawerNavigator(
      {
        Home: Dashboard,
        Contact,
        Admin,
        Logout
      },
      {
        drawerBackgroundColor: "#fff",
        drawerType: "front",
        hideStatusBar: false,
        contentComponent: CustomDrawer,
        contentOptions: {
          activeTintColor: "#2A2A2E",
          inactiveTintColor: "#000"
        }
      }
    )
  })
);
