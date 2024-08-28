import { Button, Text, TouchableOpacity, type ButtonProps, StyleSheet } from "react-native";
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from "@/constants/Colors";

export type ThemedButtonProps = ButtonProps & {
  lightColor?: string;
  darkColor?: string;
  type?: string | 'default' | 'normal',
};

export function ThemedButton({
  color,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedButtonProps) {
  const buttonColor = useThemeColor({ light: lightColor, dark: darkColor }, 'buttonDefault');
  const buttonNormalColor = useThemeColor({ light: lightColor, dark: darkColor }, 'buttonNormal');
  const buttonTextColor = useThemeColor({ light: lightColor, dark: darkColor }, 'buttonTextDefault');
  const buttonNormalTextColor = useThemeColor({ light: lightColor, dark: darkColor }, 'buttonTextNormal');
  
  let colorType = buttonColor;
  let colorText = buttonTextColor;
  let containerStyle = {};

  if (type === 'normal') {
    colorType = buttonNormalColor;
    colorText = buttonNormalTextColor;
    containerStyle = {
      borderColor: '#011',
      borderStyle: 'solid',
      borderWidth: 1,
    };
  }

  const styles = StyleSheet.create({
    container: {
      ...containerStyle,
      backgroundColor: colorType,
      padding: 15,
      borderRadius: 10,
    },
    button: {
      color: colorText,
      fontWeight: 'bold',
      fontSize: 16,
    },
  });

  // return <Button
  //   color={colorType}
  //   {...rest} />
  return <TouchableOpacity style={styles.container}>
    <Text style={styles.button}>{rest.title}</Text>
  </TouchableOpacity>
}