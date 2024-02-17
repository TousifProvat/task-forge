import { Text, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';
import React, { useState } from 'react';
import { Button, Form } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';
import { useForm } from 'react-hook-form';
import { ToastViewport, useToastController } from '@tamagui/toast';

import Colors from '@/constants/Colors';
import Input from '@/components/Form/Input';

interface FormValues {
  email: string;
  password: string;
}

const Page = () => {
  const toast = useToastController();

  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [showPassword, setShowPassword] = useState(true);

  const submitHandler = (values: FormValues) => {
    if (values.email === 'admin@gmail.com' && values.password === '123456') {
      toast.show('Logged in successfully');
    } else {
      toast.show('Invalid credentials', { type: 'error' });
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.logo}>TaskForge</Text>
      <Form gap='$2' marginVertical='$4' onSubmit={handleSubmit(submitHandler)}>
        <Input
          name='email'
          control={control}
          placeholder='Email'
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
        />
        <Input
          name='password'
          control={control}
          placeholder='Password'
          secureTextEntry={showPassword}
          rules={{ required: 'Password is required' }}
        />
        <Form.Trigger asChild marginTop='$3'>
          <Button backgroundColor={Colors.primary} color={Colors.white}>
            <AntDesign name='arrowright' color={Colors.white} size={25} />
          </Button>
        </Form.Trigger>
      </Form>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontFamily: 'lato-b',
    fontSize: 45,
    textAlign: 'center',
    color: Colors.primary,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default Page;
