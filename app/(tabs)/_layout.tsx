import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { AntDesign, Ionicons, Octicons } from '@expo/vector-icons';

import Colors from '@/constants/Colors';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: 'lato-sb',
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='home' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='tasks'
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ color, size }) => (
            <Octicons name='tasklist' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='addtask'
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <View style={styles.actionBtn}>
              <Ionicons name='add-outline' color={Colors.white} size={35} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='analytics'
        options={{
          tabBarLabel: 'Analytics',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='analytics-outline' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='settings-outline' color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  actionBtn: {
    backgroundColor: Colors.primary,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 100,
    width: 60,
    height: 60,
  },
});

export default Layout;
