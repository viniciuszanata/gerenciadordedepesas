import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  ViewStyle,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

type AutoCapitalizeType =
  | 'characters'
  | 'words'
  | 'sentences'
  | 'none'
  | undefined;

interface ErrorMessageProps {
  error?: string;
}

interface InputProps {
  value: any;
  defaultValue?: any;
  onFocus?: () => void;
  onChange: (item: any) => void;
  onSelection?: (item: any) => void;
  style?: StyleProp<ViewStyle>;
  isPassword?: boolean;
  error?: string;
  autoCapitalize?: AutoCapitalizeType;
  multiline?: boolean;
  numberOfLines?: number;
  placeholder: string;
  keyboard?: KeyboardTypeOptions;
  maxLenght?: number;
  isEnable?: boolean;
}

const ErrorMessage = ({error}: ErrorMessageProps) => {
  return error ? <Text style={[styles.textError]}> {error} </Text> : null;
};

//Mudar pra Input
export const InputField = ({
  value,
  defaultValue,
  onFocus,
  onChange,
  onSelection,
  style,
  isPassword = false,
  error,
  autoCapitalize = 'none',
  multiline,
  numberOfLines,
  placeholder,
  keyboard,
  maxLenght,
  isEnable = true,
}: InputProps) => {
  const [on, setOn] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, !!error && styles.borderError]}>
        <TextInput
          style={[style ? style : styles.input]}
          textAlign="left"
          onChangeText={(text: any) =>
            onChange(keyboard === 'email-address' ? text.toLowerCase() : text)
          }
          onSelectionChange={(text: any) => onSelection!(text)}
          defaultValue={'' || defaultValue}
          value={value}
          placeholder={placeholder}
          onFocus={() => onFocus}
          editable={isEnable}
          maxLength={maxLenght}
          numberOfLines={numberOfLines || 1}
          multiline={multiline || false}
          autoCapitalize={autoCapitalize}
          secureTextEntry={keyboard === 'ascii-capable' && !on}
          keyboardType={keyboard || 'default'}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => {
              setOn(on => !on);
            }}
            style={styles.password}>
            <Image
              source={
                on
                  ? require('../../assets/icon/hide-eye.png')
                  : require('../../assets/icon/open-eye.png')
              }
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
      </View>
      <ErrorMessage error={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    flexDirection: 'column',
  },
  inputContainer: {
    width: '95%',
    height: 'auto',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'flex-start',
    // backgroundColor: 'red',
    // borderColor: 'red',
    borderWidth: 0.5,
    borderRadius: 10,
    margin: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  password: {
    position: 'absolute',
    right: 10,
    paddingRight: 10,
  },
  textError: {
    color: 'red',
  },
  borderError: {
    borderColor: 'red',
  },
});
