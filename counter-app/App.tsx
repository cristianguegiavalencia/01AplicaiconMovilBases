import React from "react";
import { StyleSheet, Text, View, Alert, ScrollView } from "react-native";
import FAB from "./components/FAB";
import { useCounter } from "./hooks/useCounter";

export default function App() {
  const { count, increment, reset, history } = useCounter();

  const handleReset = () => {
    Alert.alert(
      "Confirmación",
      "¿Estás seguro de que quieres reiniciar el contador?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sí", onPress: reset },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

      <FAB label="+1" onPress={increment} />
      <FAB label="Reset" onLongPress={handleReset} />

      <ScrollView style={styles.history}>
        <Text style={styles.historyTitle}>Historial:</Text>
        {history.map((val, index) => (
          <Text key={index} style={styles.historyItem}>
            {val}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textHuge: {
    fontSize: 96,
    fontWeight: "bold",
    color: "#000",
  },
  history: {
    marginTop: 40,
    width: "100%",
    paddingHorizontal: 20,
  },
  historyTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  historyItem: {
    fontSize: 16,
  },
});
