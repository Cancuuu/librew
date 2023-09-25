import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

export const XLTitle = ({ text, color }: { text: string; color: string }) => (
  <Text
    style={{
      fontFamily: "OverpassMono_400Regular",
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
    style={{ fontFamily: "Roboto_400Regular", fontSize: 48 }}
  >
    {text}
  </Text>
);

export const Paragraph = ({ text, color }: { text: string; color: string }) => (
  <Text style={{ fontFamily: "OverpassMono_400Regular", fontSize: 32, color }}>
    {text}
  </Text>
);

export const Label = ({ text, color }: { text: string; color: string }) => (
  <Text style={{ fontFamily: "OverpassMono_400Regular", fontSize: 24, color }}>
    {text}
  </Text>
);

export const SMLabel = ({ text, color }: { text: string; color: string }) => (
  <Text style={{ fontFamily: "OverpassMono_400Regular", fontSize: 12, color }}>
    {text}
  </Text>
);
