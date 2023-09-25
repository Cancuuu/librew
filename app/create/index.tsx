import React, { useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Layout from "../../components/Layout";
import * as Haptics from "expo-haptics";
import { FontAwesome } from "@expo/vector-icons";
import { Paragraph } from "../../components/Text";
import Keyboard from "../../components/Keyboard";
import { TKeyboardValue } from "../../types";
import { ACTION, NUMBER } from "../../constants";

const DEFAULT_WHOLE_AMOUNT = "0";
const DEFAULT_DECIMAL_AMOUNT = "00";

export default function Page() {
  const [wholeAmount, setWholeAmount] = useState(DEFAULT_WHOLE_AMOUNT);
  const [decimalAmount, setDecimalAmount] = useState(DEFAULT_DECIMAL_AMOUNT);

  const displayWholeAmount = useMemo(() => {
    let formatted = wholeAmount;

    if (wholeAmount.length >= 4 && wholeAmount.length <= 6) {
      let slicedAmount = wholeAmount.slice(0, -3) + "." + wholeAmount.slice(-3);
      formatted = slicedAmount;
    }

    if (wholeAmount.length > 6) {
      let slicedAmount =
        wholeAmount.slice(0, 1) +
        "." +
        wholeAmount.slice(-6, -3) +
        "." +
        wholeAmount.slice(-3);

      formatted = slicedAmount;
    }
    return formatted;
  }, [wholeAmount]);

  const proccessInputAmount = (value: TKeyboardValue) => {
    if (value.type === ACTION) {
      if (value.value === "REMOVE") {
        if (
          wholeAmount.length === 1 ||
          wholeAmount === "" ||
          wholeAmount === null ||
          wholeAmount === undefined ||
          wholeAmount === " " ||
          wholeAmount === DEFAULT_WHOLE_AMOUNT
        ) {
          setWholeAmount(DEFAULT_WHOLE_AMOUNT);
        } else {
          setWholeAmount((prevAmount) => prevAmount.slice(0, -1));
        }
      }

      if (
        value.value === "REMOVE_ALL" &&
        wholeAmount !== DEFAULT_WHOLE_AMOUNT &&
        decimalAmount !== DEFAULT_DECIMAL_AMOUNT
      ) {
        setWholeAmount(DEFAULT_WHOLE_AMOUNT);
        setDecimalAmount(DEFAULT_DECIMAL_AMOUNT);
      }
    }
    if (value.type === NUMBER) {
      if (wholeAmount.length > 6) return;
      if (wholeAmount === DEFAULT_WHOLE_AMOUNT || wholeAmount === "0") {
        setWholeAmount(String(value.value));
      } else {
        setWholeAmount((prevAmount) => prevAmount + String(value.value));
      }
    }
  };

  return (
    <Layout>
      <View className="flex-1 justify-around w-full">
        <View className="flex-grow w-full flex-row justify-center items-center mt-48">
          <FontAwesome name="dollar" size={24} color="#272C26" />
          <View className="flex-row">
            <Text
              style={{
                fontFamily: "Roboto_400Regular",
                fontSize: displayWholeAmount.length > 6 ? 80 : 96,
                color: "#272C26",
              }}
            >
              {displayWholeAmount}
            </Text>
            <Text
              style={{
                fontFamily: "OverpassMono_400Regular",
                fontSize: 24,
                color: "#272C26",
                marginTop: 18,
              }}
            >
              {decimalAmount}
            </Text>
          </View>
        </View>
        <View className="justify-center items-center">
          <Keyboard proccessInputAmount={proccessInputAmount} />
          <View className="w-20 mt-12 mb-8 items-center">
            <Pressable
              onPress={() =>
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
              }
              className="bg-[#272C26] w-60 items-center rounded-full p-1"
            >
              <Paragraph text="send" color={"#FFF"} />
            </Pressable>
          </View>
        </View>
      </View>
    </Layout>
  );
}
