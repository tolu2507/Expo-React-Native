import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoList({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={20} color="green" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    margin: 10,
    borderColor: "green",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 15,
    flexDirection: "row",
  },
  itemText: {
    marginLeft: 10,
  },
});
