import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";

export default function CustomDrawerContentComponent({ props }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ height: 160, backgroundColor: "#1a9ae2" }}>
          <View
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
          >
            <Text style={{ fontSize: 20, color: "#fff" }}>J</Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              color: "#fff",
              marginTop: 10,
              marginLeft: 10
            }}
          >
            Julen Goikoetxea
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
            julen86@gmail.com
          </Text>
        </View>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  );
}
