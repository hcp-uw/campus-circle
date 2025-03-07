import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';  // Import your HomeScreen component
import ProfileScreen from './ProfileScreen';  // Import your ProfileScreen component
import EventsScreen from './EventsScreen';  // Import your EventsScreen component
import { Ionicons } from '@expo/vector-icons';  // For icons

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',  // Active tab color
        tabBarInactiveTintColor: 'gray',   // Inactive tab color
      }}
    >
      {/* Home Tab */}
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      {/* Profile Tab */}
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />

      {/* Events Tab */}
      <Tab.Screen 
        name="Events" 
        component={EventsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
