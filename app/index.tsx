import { Text, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';

import React, { useState } from 'react';
import Colors from '@/constants/Colors';
import { Button, Input } from 'tamagui';
import { AntDesign, EvilIcons } from '@expo/vector-icons';

const Page = () => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.logo}>TaskForge</Text>
      <Input placeholder='Email' />
      <Input placeholder='Password' secureTextEntry={showPassword} />
      <Button
        backgroundColor={Colors.primary}
        color={Colors.white}
        marginTop={10}
      >
        <AntDesign name='arrowright' color={Colors.white} size={25} />
      </Button>
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
