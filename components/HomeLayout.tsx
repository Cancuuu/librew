import React from "react";
import { View, Text } from "react-native";
import Layout from "./Layout";
import Gradient from "./gradient";

const HomeLayout = (props: React.PropsWithChildren) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
      <View className="flex-1 justify-center items-center">
        <Gradient />
        {props.children}
      </View>
    </View>
  );
};

export default HomeLayout;
