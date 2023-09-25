import React from "react";
import { View, StyleSheet } from "react-native";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout(props: ILayout) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9FFC39",
  },
});
