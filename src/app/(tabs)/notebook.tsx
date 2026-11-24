import Counter from "@/components/counter";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: "white",
        width: "100%",
        height: "100%",
        padding: 20,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </View>
  );
}
