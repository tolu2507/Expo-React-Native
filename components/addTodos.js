import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [addTodo, setAddTodo] = useState("");

  const changeTextHandler = (val) => {
    setAddTodo(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo....."
        onChangeText={changeTextHandler}
      />
      <Button
        onPress={() => submitHandler(addTodo)}
        color="green"
        title="Add Todo"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
