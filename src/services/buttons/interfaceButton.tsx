import {StyleProp, TextStyle, ViewStyle} from 'react-native/types';

export interface ButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export interface ButtonInputProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}
