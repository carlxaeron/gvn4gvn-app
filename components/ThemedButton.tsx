import { Button, type ButtonProps } from "react-native";
import { useThemeColor } from '@/hooks/useThemeColor';

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
  
  let colorType = buttonColor;

  if (type === 'normal') {
    colorType = buttonNormalColor;
  }

  return <Button
    color={buttonColor}
    {...rest} />
}