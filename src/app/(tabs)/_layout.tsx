import { Lucide } from "@react-native-vector-icons/lucide";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="notebook"
        options={{
          title: "Zeszyt",
          tabBarIcon: ({ color }) => (
            <Lucide size={28} name="notebook-pen" color={"white"} />
          ),
        }}
      />
    </Tabs>
  );
}
