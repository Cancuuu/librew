import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import HomeLayout from "../components/HomeLayout";
// import { RNWCreateWallet } from "rnw/src";
// import { TWallet } from "rnw/src/types";

export default function Page() {
  // const [createdWallet, setCreatedWallet] = useState<TWallet>();

  // const createWallet = async () => {
  //   const walletCreated = await RNWCreateWallet();
  //   setCreatedWallet(walletCreated);
  // };

  return (
    <HomeLayout>
      <Text
        style={{
          fontFamily: "Saira_500Medium",
          fontSize: 54,
          color: "#282828",
        }}
      >
        CREW
      </Text>
      <View className="flex-row w-full justify-center">
        <LinkButton
          title="Create wallet"
          href="/create"
          onPress={() => createWallet()}
        />
      </View>
    </HomeLayout>
  );
}

interface ICircleButton {
  title: string;
  href?: string;
  onPress: () => void;
}

const LinkButton = ({ title, href, onPress }: ICircleButton) => (
  <Pressable
    onPress={onPress}
    style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    }}
    className="bg-[#f3f3f3] w-44 h-10 rounded-full justify-center items-center mt-4 mx-2"
  >
    <Text
      className="text-[#272C26]"
      style={{
        fontFamily: "Saira_500Medium",
        fontSize: 20,
        color: "#19181E",
      }}
    >
      {title}
    </Text>
  </Pressable>
);
