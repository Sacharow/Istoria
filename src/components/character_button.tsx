import { colors } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

export default function CharacterButton({}) {
  return (
    <View style={styles.button}>
      <Text>ASDF</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.section,
    padding: 16,
    borderRadius: 8,
  },
});
