import { StyleSheet, Text, View } from "react-native";

export default function CampaignSelectPage() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Campaign Select</Text>
        <Text style={styles.subtitle}>
          This is the campaign select page of your app.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    fontFamily: "MorrisRomanBlack",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    fontFamily: "MorrisRomanBlack",
  },
});
