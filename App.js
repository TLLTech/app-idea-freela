import React from "react";
import { StatusBar } from "react-native";

import Index from "./src";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="blue" />
      <Index />
    </>
  );
}
