import { Pressable, Text, View } from "react-native";
import * as Haptics from "expo-haptics";
import { Feather } from "@expo/vector-icons";
import { Title } from "../../components/Text";
import { TAction, TKeyboardValue, TNumber } from "../../types";
import { ACTION, NUMBER } from "../../constants";

interface IKeyboard {
  proccessInputAmount: (value: TKeyboardValue) => void;
}

const KeyboardButton = ({
  value,
  icon,
  onPress,
  onLongPress,
}: {
  value: TKeyboardValue;
  icon?: React.ReactNode;
  onPress: (T: TKeyboardValue) => void;
  onLongPress?: (T: TKeyboardValue) => void;
}) => (
  <Pressable
    className="w-20 h-20 justify-center items-center"
    onPress={() => {
      Haptics.selectionAsync();
      onPress(value);
    }}
    onLongPress={() => onLongPress}
  >
    {icon ? icon : <Title text={value.value?.toString()} />}
  </Pressable>
);

const Keyboard = ({ proccessInputAmount }: IKeyboard) => {
  return (
    <View className="w-full">
      <View className="flex-row w-full justify-around items-center">
        <KeyboardButton
          value={{
            type: ACTION,
            value: 1,
          }}
          onPress={(value) => proccessInputAmount(value)}
        />
        <KeyboardButton
          value={{
            type: NUMBER,
            value: 2,
          }}
          onPress={(value) => proccessInputAmount(value)}
        />
        <KeyboardButton
          value={{
            type: NUMBER,
            value: 3,
          }}
          onPress={(value) => proccessInputAmount(value)}
        />
      </View>
      <View className="flex-row w-full justify-around items-center">
        <KeyboardButton
          value={{
            type: NUMBER,
            value: 4,
          }}
          onPress={(value) => proccessInputAmount(value)}
        />
        <KeyboardButton
          value={{
            type: NUMBER,
            value: 5,
          }}
          onPress={(value) => proccessInputAmount(value)}
        />
        <KeyboardButton
          value={{
            type: NUMBER,
            value: 6,
          }}
          onPress={(value) => proccessInputAmount(value)}
        />
      </View>
      <View className="flex-row w-full justify-around items-center">
        <KeyboardButton
          value={{
            type: NUMBER,
            value: 7,
          }}
          onPress={(value) => proccessInputAmount(value)}
        />
        <KeyboardButton
          value={{
            type: NUMBER,
            value: 8,
          }}
          onPress={(value) => proccessInputAmount(value)}
        />
        <KeyboardButton
          value={{
            type: NUMBER,
            value: 9,
          }}
          onPress={(value) => proccessInputAmount(value)}
        />
      </View>
      <View className="flex-row w-full justify-around items-center">
        <KeyboardButton
          value={{
            type: ACTION,
            value: ",",
          }}
          onPress={(value) => proccessInputAmount(value)}
        />
        <KeyboardButton
          value={{
            type: NUMBER,
            value: 0,
          }}
          onPress={(value) => proccessInputAmount(value)}
        />
        <KeyboardButton
          value={{
            type: ACTION,
            value: "REMOVE",
          }}
          icon={<Feather name="delete" size={28} color="black" />}
          onPress={(value) => proccessInputAmount(value)}
          onLongPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            // proccessInputAmount();
          }}
        />
      </View>
    </View>
  );
};

export default Keyboard;
