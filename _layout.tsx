import { Stack, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function RootLayout() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isReady, setIsReady] = useState(false); // ✅ Prevents navigation errors

  useEffect(() => {
    // Simulate checking authentication status
    setTimeout(() => {
      setIsAuthenticated(false); // Set to false since auth isn't connected
      setIsReady(true); // ✅ Only redirect once the layout is ready
    }, 1000);
  }, []);

  useEffect(() => {
    if (isReady && isAuthenticated === false) {
      router.replace('/(auth)/login'); // Navigate to login page if not authenticated
    } else if (isReady && isAuthenticated === true) {
      router.replace('./(tabs)/index'); // Redirect to home after successful login/signup
    }
  }, [isReady, isAuthenticated]);

  // Show a loading screen while checking authentication
  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <Stack>
      {isAuthenticated ? (
        <>
          {/* Redirect to home after authentication */}
          <Stack.Screen name="(tabs)/index" options={{ headerShown: false }} />
        </>
      ) : (
        <>
          {/* Authentication Screens */}
          <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/signup" options={{ headerShown: false }} />
        </>
      )}
    </Stack>
  );
}
