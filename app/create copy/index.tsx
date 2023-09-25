import React from "react";
import { Text, View } from "react-native";
import Layout from "../../components/Layout";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Page() {
  return (
    <Layout>
      <Text style={{ fontFamily: "OverpassMono_400Regular", fontSize: 42 }}>
        velocirraptor 🦖
      </Text>
      <Text style={{ fontFamily: "OverpassMono_400Regular", fontSize: 18 }}>
        ME$$AGING FOR HOLDERS
      </Text>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.8,
          elevation: 8,
          position: "absolute",
          bottom: -230,
          borderRadius: 20,
          transform: [{ rotate: "90deg" }],
          width: 340,
          height: 340,
          padding: 20,
        }}
        className="bg-[#FEFA8F] justify-center"
      >
        <View
          style={{
            transform: [{ rotate: "-90deg" }],
            position: "relative",
            right: 120,
          }}
          className="flex-row justify-around"
        >
          <View className=" items-center justify-center">
            <Feather name="home" size={24} color="black" />
            <Text
              style={{ fontFamily: "OverpassMono_400Regular", fontSize: 18 }}
            >
              home
            </Text>
          </View>
          <View className=" items-center justify-center">
            <Ionicons name="stats-chart-outline" size={24} color="black" />
            <Text
              style={{ fontFamily: "OverpassMono_400Regular", fontSize: 18 }}
            >
              tokens
            </Text>
          </View>
          <View className=" items-center justify-center">
            <Feather name="settings" size={24} color="black" />
            <Text
              style={{ fontFamily: "OverpassMono_400Regular", fontSize: 18 }}
            ></Text>
          </View>
        </View>
      </View>
    </Layout>
  );
}
