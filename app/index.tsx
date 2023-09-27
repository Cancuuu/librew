import React from "react";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import HomeLayout from "../components/HomeLayout";

export default function Page() {
  return (
    <HomeLayout>
      <Text
        style={{
          fontFamily: "Saira_500Medium",
          fontSize: 64,
          color: "#FAFF00",
        }}
      >
        LIBREW
      </Text>
      <View className="flex-row w-full justify-center">
        <LinkButton title="Create wallet" href="/create" />
        <LinkButton title="Import wallet" href="/create" />
      </View>
    </HomeLayout>
  );
}

interface ICircleButton {
  title: string;
  href: string;
}

const LinkButton = ({ title, href }: ICircleButton) => (
  <Link href={href} asChild>
    <Pressable
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
      className="bg-[#FAFF00] w-44 h-10 rounded-full justify-center items-center mt-4 mx-2"
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
  </Link>
);
