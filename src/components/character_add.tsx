import { colors } from "@/constants/colors";
import { router } from "expo-router";
import { CirclePlus } from "lucide-react-native";
import { Pressable, View } from "react-native";

export default function CharacterAdd({}) {
  return (
    <View>
      <Pressable onPress={() => router.push("/character/create")}>
        <CirclePlus color={colors.text_bolder} />
      </Pressable>
    </View>
  );
}
