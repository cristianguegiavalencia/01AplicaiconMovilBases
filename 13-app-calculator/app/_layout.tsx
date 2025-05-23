import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { globalStyles } from "@/styles/global-styles";

const RootLayout = () => {
  return (
    <View style={globalStyles.background}>
      <StatusBar style="light" />
      <Slot />
    </View>
  );
};

export default RootLayout;
