import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  label,
  onPress,
  onLongPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.fab}
    >
      <Text style={styles.fabText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#007AFF',
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  fabText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
