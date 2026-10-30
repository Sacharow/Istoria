import { colors } from "@/constants/colors";
import { CirclePlus } from "lucide-react-native";
import { Pressable, View } from "react-native";

export default function CharacterAdd({}) {
  return (
    <View>
      <Pressable>
        <CirclePlus color={colors.text_bolder} />
      </Pressable>
    </View>
  );
}
