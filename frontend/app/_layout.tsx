import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationIndependentTree } from "@react-navigation/native";
import { Slot } from "expo-router";
import HomeScreen from "@/app/index";
import ProfileScreen from "@/app/profile";
import EventsScreen from "@/app/events";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <AuthProvider>
      <AuthGate />
    </AuthProvider>
  );
}

function AuthGate() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/(auth)/login");
    }
  }, [isAuthenticated]);

  return (
    <NavigationIndependentTree>
      {isAuthenticated ? (
        <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#601EF9',  // Active tab color
          tabBarInactiveTintColor: 'gray',   // Inactive tab color
        }}
      >
        {/* Home Tab */}
        <Tab.Screen 
          name="Explore" 
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
      ) : (
        <Slot />
      )}
    </NavigationIndependentTree>
  );
}