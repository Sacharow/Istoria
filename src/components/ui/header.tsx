import D20 from "@/components/ui/D20";
import { colors } from "@/constants/colors";
import { ChevronLeft } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import CharacterAdd from "../character_add";

export default function Header() {
  return (
    <View style={styles.container}>
      <ChevronLeft color={colors.text_bolder} />
      <View style={styles.logoContainer}>
        <D20 style={styles.logo} />
        <Text style={styles.title}>ISTORIA</Text>
      </View>
      <CharacterAdd />
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
