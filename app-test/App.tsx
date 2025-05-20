import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import FAB from './components/FAB';

export default function App() {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

      <FAB
        label="+1"
        onPress={() => count < 20 && setCount(count + 1)}
        onLongPress={() => setCount(0)}
        position="right"
      />

      <FAB
        label="Reset"
        onPress={() => setCount(0)}
        position="left"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge: {
    fontSize: 96,
    fontWeight: 'bold',
    color: '#000',
  },
});
