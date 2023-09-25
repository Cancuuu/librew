import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout>
      <View className="flex-1 justify-center items-center">
        <Text
          className="text-[#272C26]"
          style={{ fontFamily: "OverpassMono_400Regular", fontSize: 42 }}
        >
          M4H
        </Text>
        <Text
          className="text-[#272C26]"
          style={{ fontFamily: "OverpassMono_400Regular", fontSize: 18 }}
        >
          ME$$AGING FOR HOLDERS
        </Text>
        <View className="flex-row w-full justify-center mt-4">
          <LinkButton title="create wallet" href="/create" />
          <LinkButton title="import wallet" href="/create" />
        </View>
      </View>
    </Layout>
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
      className="bg-[#FEFA8F] w-44 h-10 rounded-full justify-center items-center mt-4 mx-2"
    >
      <Text
        className="text-[#272C26]"
        style={{ fontFamily: "OverpassMono_400Regular", fontSize: 18 }}
      >
        {title}
      </Text>
    </Pressable>
  </Link>
);
