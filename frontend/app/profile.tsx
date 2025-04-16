import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function ProfileScreen() {

    const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.profileName}>Jane Smith</Text>
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png" }} // placeholder
          style={styles.profileImage}
        />
        <Text style={styles.username}>@janesmith</Text>
        <Text style={styles.profileDescription}>{"<profile description (major, year, etc.)>"}</Text>
      </View>

      {/* Current Classes */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Current Classes</Text>
          <TouchableOpacity onPress={() => router.push('/add')}>
            <MaterialIcons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>Husky Coding Project</Text>
          <Text style={styles.tag}>Web Impact</Text>
        </View>
      </View>

      {/* Organizations */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Organizations</Text>
          <TouchableOpacity>
            <MaterialIcons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>Husky Coding Project</Text>
          <Text style={styles.tag}>Web Impact</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: { backgroundColor: "#6C29FF", padding: 20, alignItems: "center" },
  profileName: { fontSize: 24, color: "white", fontWeight: "bold" },
  profileSection: { alignItems: "center", padding: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: "white" },
  username: { fontSize: 22, fontWeight: "bold", marginTop: 10 },
  profileDescription: { fontSize: 14, color: "gray", marginTop: 20 },

  card: { backgroundColor: "black", borderRadius: 10, margin: 10, padding: 15 },
  cardHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  cardTitle: { color: "white", fontSize: 18, fontWeight: "bold" },
  tagContainer: { flexDirection: "row", flexWrap: "wrap", marginTop: 10 },
  tag: { backgroundColor: "#6C29FF", color: "white", padding: 8, borderRadius: 15, margin: 5 },

  newTagContainer: { backgroundColor: "#ffeb3b", padding: 10, marginTop: 20 },
  newTag: { fontSize: 16, fontWeight: "bold" },
});
