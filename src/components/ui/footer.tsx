import { router } from "expo-router";
import { BookOpenText, Mountain, Settings, Sword } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../../constants/colors";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const buttons = [
    { id: 1, label: "Glossary", icon: BookOpenText, route: "/glossary" },
    { id: 2, label: "Character", icon: Sword, route: "/character_select" },
    { id: 3, label: "Campaign", icon: Mountain, route: "/campaign_select" },
    { id: 4, label: "Settings", icon: Settings, route: "/settings" },
  ] as const;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <View style={styles.container}>
      {buttons.map((button) => (
        <Pressable
          key={button.id}
          style={[styles.button]}
          onPress={() => router.push(button.route)}
        >
          <button.icon size={32} color={colors.text_light} />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    position: "sticky",
    bottom: 0,
    height: 96,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 32,
    backgroundColor: colors.background,
    boxShadow: `0px 4px 64px`,
    shadowColor: colors.background_shadow,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 10000,
    cursor: "pointer",
  },
});
