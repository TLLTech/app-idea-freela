import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  AsyncStorage,
  ScrollView,
  Image
} from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";

export default function CustomDrawer({ ...props }) {
  const [user, setUser] = useState("");
  const [emails, setEmails] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function loadDataUser() {
    const username = await AsyncStorage.getItem("@login:username");
    const email = await AsyncStorage.getItem("@login:email");
    const photoUrl = await AsyncStorage.getItem("@login:imageUrl");

    setUser(username);
    setEmails(email);
    setImageUrl(photoUrl);

    console.log(" nome -> ", username);
    console.log("email -> ", email);
    console.log("photo -> ", photoUrl);
  }

  useEffect(() => {
    loadDataUser();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ height: 160, backgroundColor: "#1a9ae2" }}>
          <Image
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#3EA8E3",
              borderRadius: 25,
              marginTop: 40,
              marginLeft: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
            source={{ uri: imageUrl }}
          />
          {/* <Text style={{ fontSize: 20, color: "#fff" }}>J</Text>
          </View> */}
          <Text
            style={{
              fontSize: 18,
              color: "#fff",
              marginTop: 10,
              marginLeft: 10
            }}
          >
            {user}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#fff",
              marginTop: 3,
              marginLeft: 10,
              marginBottom: 10
            }}
          >
            {emails}
          </Text>
        </View>
        <DrawerNavigatorItems {...props} />
        {/* <DrawerItems {...props} /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
