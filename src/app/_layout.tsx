import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { colors } from "@/constants/colors";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontLoaded, fontError] = useFonts({
    MorrisRomanBlack: require("../../assets/fonts/MorrisRomanBlack.ttf"),
  });

  useEffect(() => {
    if (fontLoaded || fontError) {
      void SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontError]);

  if (fontError) {
    return (
      <View style={styles.errorContainer}>
        <Text>Could not load custom font: {fontError.message}</Text>
      </View>
    );
  }

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background, flex: 1 },
        }}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});
