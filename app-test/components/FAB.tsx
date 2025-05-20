import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  label: string;
  position?: 'left' | 'right';
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  label,
  onPress,
  onLongPress,
  position = 'right',
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [
        styles.floatingButton,
        position === 'right' ? styles.positionRight : styles.positionLeft,
        { opacity: pressed ? 0.7 : 1 },
      ]}
    >
      <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#007AFF',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
});
