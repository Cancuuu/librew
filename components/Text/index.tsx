import React from "react";
import { Text } from "react-native";

export const XLTitle = ({ text, color }: { text: string; color: string }) => (
  <Text
    style={{
      fontFamily: "Saira_400Regular",
      fontSize: 96,
      letterSpacing: -5,
      color,
    }}
  >
    {text}
  </Text>
);

export const Title = ({ text }: { text: string }) => (
  <Text
    className="text-[#272C26]"
    style={{ fontFamily: "Saira_400Regular", fontSize: 48 }}
  >
    {text}
  </Text>
);

export const Paragraph = ({ text, color }: { text: string; color: string }) => (
  <Text style={{ fontFamily: "Saira_400Regular", fontSize: 32, color }}>
    {text}
  </Text>
);

export const Label = ({ text, color }: { text: string; color: string }) => (
  <Text style={{ fontFamily: "Saira_400Regular", fontSize: 24, color }}>
    {text}
  </Text>
);

export const SMLabel = ({ text, color }: { text: string; color: string }) => (
  <Text style={{ fontFamily: "Saira_400Regular", fontSize: 12, color }}>
    {text}
  </Text>
);
