import { TextInputProps } from 'react-native';
import React, { ReactNode, RefObject } from 'react';
import { Control, RegisterOptions, useController } from 'react-hook-form';
import { Input as TInput, YStack, Text, XStack } from 'tamagui';

import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

interface InputProps extends TextInputProps {
  name: string;
  control: Control<any>;
  rules?: RegisterOptions;
  ref?: RefObject<TInput>;
  prefix?: ReactNode;
  type?: string;
  defaultValue?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  control,
  rules,
  ref,
  type = 'text',
  defaultValue = '',
  ...props
}) => {
  const { field, fieldState } = useController({
    control,
    defaultValue,
    name,
    rules,
    ...props,
  });
  return (
    <YStack gap='$2'>
      <TInput
        ref={ref}
        autoCapitalize='none'
        value={field.value}
        onChangeText={field.onChange}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        borderColor={fieldState.error?.message ? Colors.error : Colors.border}
        focusStyle={{
          borderColor: Colors.border,
        }}
      />
      {fieldState.error?.message && (
        <XStack marginLeft='$2' alignItems='center' gap='$2'>
          <Ionicons name='warning-outline' color={Colors.error} />
          <Text color={Colors.error}>{fieldState?.error?.message}</Text>
        </XStack>
      )}
    </YStack>
  );
};

export default Input;
