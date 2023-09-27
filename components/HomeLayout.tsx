import { View, Text } from "react-native";
import React from "react";
import Layout from "./Layout";
import Gradient from "./gradient";

const HomeLayout = (props: React.PropsWithChildren) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#282828" }}>
      <View className="flex-1 justify-center items-center">
        <Gradient />
        {props.children}
      </View>
    </View>
  );
};

export default HomeLayout;
