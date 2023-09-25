import "react-native-reanimated";
import "react-native-gesture-handler";
import { Stack } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import {
  useFonts,
  OverpassMono_400Regular,
} from "@expo-google-fonts/overpass-mono";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  let [fontsLoaded, fontError] = useFonts({
    OverpassMono_400Regular,
    Roboto_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
