import "react-native-reanimated";
import "react-native-gesture-handler";
import { Stack } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import {
  useFonts,
  OverpassMono_400Regular,
} from "@expo-google-fonts/overpass-mono";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import {
  Saira_300Light,
  Saira_400Regular,
  Saira_500Medium,
  Saira_600SemiBold,
} from "@expo-google-fonts/saira";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  let [fontsLoaded, fontError] = useFonts({
    Saira_300Light,
    Saira_400Regular,
    Saira_500Medium,
    Saira_600SemiBold,
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
