import { colors } from "@/constants/colors";
import { CircleDotDashed } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function CharacterButton({}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <CircleDotDashed />
      </View>
      <View style={styles.textContainer}>
        <Text>Name</Text>
        <View style={styles.subtitle}>
          <Text>Race</Text>
          <Text>|</Text>
          <Text>Class</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.section,
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    gap: 8,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    borderRadius: 10000,
    backgroundColor: colors.purpleDark,
  },
  textContainer: {
    backgroundColor: colors.red,
    padding: 8,
    flex: 1,
  },
  subtitle: {
    gap: 8,
    flexDirection: "row",
  },
});
