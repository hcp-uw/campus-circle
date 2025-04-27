import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import axios from 'axios';


export default function LoginScreen() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        email,
        password
      });
      if (response.status === 200) {
        login();
        router.replace("/");
      }
    } catch (error) {
      console.error('Sign-up failed:', error);
      alert('Error: Something went wrong. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Log In</Text>

    <TextInput
      style={styles.input}
      placeholder="Email"
      keyboardType="email-address"
      value={email}
      onChangeText={setEmail}
    />

    <TextInput
      style={styles.input}
      placeholder="Password"
      secureTextEntry
      value={password}
      onChangeText={setPassword}
    />

    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>Log In</Text>
    </TouchableOpacity>

    <Text style={styles.signupText}>
      Don't have an account? <Text style={styles.signupLink} onPress={() => router.push('/(auth)/signup')}>Sign Up</Text>
    </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', padding: 20, },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { width: '100%', height: 50, backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 15, marginBottom: 15, 
    shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 3, elevation: 2, },
  button: { width: '100%', backgroundColor: '#601EF9', paddingVertical: 15, borderRadius: 8, alignItems: 'center', marginTop: 10, },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', },
  signupLink: { color: '#601EF9', fontWeight: 'bold', },
  signupText: { marginTop: 20, fontSize: 14, },
});