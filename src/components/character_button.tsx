import { colors } from "@/constants/colors";
import { CircleDotDashed, Menu, User } from "lucide-react-native";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function CharacterButton({}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
        }}
      >
        <View style={styles.iconContainer}>
          <CircleDotDashed color={colors.text_bolder} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Name</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subTitle}>Level. 1</Text>
          <Text style={styles.subTitle}>|</Text>
          <Text style={styles.subTitle}>Race</Text>
          <Text style={styles.subTitle}>|</Text>
          <Text style={styles.subTitle}>Class</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
        }}
      >
        <Pressable
          style={styles.iconContainer}
          onPress={() => setOpen((prev) => !prev)}
        >
          <Menu color={colors.text_bolder} />
        </Pressable>
        {isOpen && (
          <Modal transparent visible={isOpen} animationType="slide">
            <Pressable
              onPress={() => setOpen(false)}
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Pressable
                style={styles.settingsContainer}
                onPress={(e) => e.stopPropagation()}
              >
                <View style={{ flexDirection: "row", gap: 8 }}>
                  <User color={colors.text_bolder} />
                  <Text style={styles.title}>Character Options</Text>
                </View>
                <Text style={styles.subTitle}>Name</Text>
                <View
                  style={{
                    flexDirection: "column",
                    gap: 4,
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    style={{ width: "80%" }}
                    onPress={() => setOpen(false)}
                  >
                    <Text style={styles.deleteButton}>Delete</Text>
                  </Pressable>
                  <Pressable
                    style={{ width: "80%" }}
                    onPress={() => setOpen(false)}
                  >
                    <Text style={styles.duplicateButton}>Duplicate</Text>
                  </Pressable>
                  <Pressable
                    style={{ width: "80%" }}
                    onPress={() => setOpen(false)}
                  >
                    <Text style={styles.exportButton}>Export</Text>
                  </Pressable>
                </View>
              </Pressable>
            </Pressable>
          </Modal>
        )}
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
    gap: 16,
  },
  settingsContainer: {
    backgroundColor: colors.section,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "80%",
    height: "30%",
    gap: 16,
    paddingVertical: 16,
    boxShadow: `0px 0px 16px`,
    shadowColor: colors.background_shadow,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    borderRadius: 10000,
  },
  textContainer: {
    padding: 8,
    flex: 1,
    borderRadius: 8,
  },
  subtitleContainer: {
    gap: 8,
    flexDirection: "row",
  },
  title: {
    color: colors.text_bolder,
    fontFamily: "MorrisRomanBlack",
    fontSize: 24,
    letterSpacing: 4,
  },
  subTitle: {
    color: colors.text_light,
    fontFamily: "MorrisRomanBlack",
    fontSize: 16,
  },
  deleteButton: {
    textAlign: "center",
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: colors.red,
    borderRadius: 8,
    fontFamily: "MorrisRomanBlack",
  },
  duplicateButton: {
    textAlign: "center",
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: colors.yellow,
    borderRadius: 8,
    fontFamily: "MorrisRomanBlack",
  },
  exportButton: {
    textAlign: "center",
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: colors.text_light,
    borderRadius: 8,
    fontFamily: "MorrisRomanBlack",
  },
});
