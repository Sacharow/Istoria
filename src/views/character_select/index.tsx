import CharacterButton from "@/components/character_button";

import { StyleSheet, View } from "react-native";

export default function CharacterSelectPage() {
  return (
    <View style={styles.container}>
      {[...Array(3)].map((_, index) => (
        <CharacterButton key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    padding: 24,
  },
});
