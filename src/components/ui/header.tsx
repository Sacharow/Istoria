import D20 from "@/components/ui/D20";
import { colors } from "@/constants/colors";
import { router, usePathname } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CharacterAdd from "../character_add";

export default function Header() {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.navigate("../")}>
        <ChevronLeft color={colors.text_bolder} />
      </Pressable>
      <Pressable
        style={styles.logoContainer}
        onPress={() => router.push("../")}
      >
        <D20 style={styles.logo} />
        <Text style={styles.title}>FABULARIUM</Text>
      </Pressable>
      {pathname === "/character_select" && <CharacterAdd />}
      {pathname === "/campaign_select" && <CharacterAdd />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    position: "sticky",
    top: 0,
    height: 64,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 32,
    padding: 12,
    backgroundColor: colors.background,
    boxShadow: "0px 0px 64px",
    shadowColor: colors.background_shadow,
  },
  logoContainer: {
    alignItems: "flex-start",
    padding: 4,
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
  logo: {
    width: 32,
    height: 32,
    color: colors.text_bolder,
  },
  title: {
    fontSize: 32,
    color: colors.text_bolder,
    fontFamily: "MorrisRomanBlack",
  },
});
