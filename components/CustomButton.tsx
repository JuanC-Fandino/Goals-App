import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import React from 'react';

export interface CustomButtonProps extends PressableProps {
  children: React.ReactNode;
  customStyle?: StyleProp<ViewStyle>;
}

function CustomButton(props: CustomButtonProps) {
  const { children, customStyle, ...otherProps } = props;
  return (
    <Pressable style={[styles.button, customStyle]} {...otherProps}>
      <Text style={[styles.text]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 8,
    backgroundColor: 'orange',
    borderRadius: 6,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    padding: 8,
    fontSize: 16,
  },
});

export default CustomButton;
