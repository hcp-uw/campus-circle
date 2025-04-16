import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import React from 'react';

export default function ExploreScreen() {
  const username = "janesmith";

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" placeholderTextColor="#888" style={styles.searchInput} />
      </View>

      {/* Profile Card */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          {/* Profile Image */}
          <Image source={{ uri: 'https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png' }} style={styles.profileImage} />

          {/* Floating Add Friend Button */}
          <TouchableOpacity style={styles.addButton} onPress={() => Alert.alert("You have added " + username)}>
            <Feather name="user-plus" size={24} color="white" style={styles.addIcon}/>
          </TouchableOpacity>

          {/* Profile Info */}
          <Text style={styles.username}>@{username}</Text>
          <Text style={styles.major}>Computer Science</Text>
          <Text style={styles.year}>2026</Text>

          {/* Bio */}
          <Text style={styles.bio}> profile description (major, year, etc.) </Text>

          {/* Shared Groups */}
          <Text style={styles.sectionTitle}>You are both in</Text>
          <View style={styles.chipContainer}>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Husky Coding Project</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>INFO 360</Text>
            </View>
          </View>

          {/* Interests */}
          <Text style={styles.sectionTitle}>Interests</Text>
          <View style={styles.chipContainer}>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Swimming</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Working out</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Traveling</Text>
            </View>
          </View>

          {/* Classes */}
          <Text style={styles.sectionTitle}>Classes</Text>
          <View style={styles.chipContainer}>
            <View style={styles.chip}>
              <Text style={styles.chipText}>CSE 373</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>INFO 360</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>STAT 338</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          {/* Profile Image */}
          <Image source={{ uri: 'https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png' }} style={styles.profileImage} />

          {/* Floating Add Friend Button */}
          <TouchableOpacity style={styles.addButton} onPress={() => Alert.alert("You have added " + username)}>
            <Feather name="user-plus" size={24} color="white" style={styles.addIcon}/>
          </TouchableOpacity>

          {/* Profile Info */}
          <Text style={styles.username}>@{username}</Text>
          <Text style={styles.major}>Computer Science</Text>
          <Text style={styles.year}>2026</Text>

          {/* Bio */}
          <Text style={styles.bio}> profile description (major, year, etc.) </Text>

          {/* Shared Groups */}
          <Text style={styles.sectionTitle}>You are both in</Text>
          <View style={styles.chipContainer}>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Husky Coding Project</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>INFO 360</Text>
            </View>
          </View>

          {/* Interests */}
          <Text style={styles.sectionTitle}>Interests</Text>
          <View style={styles.chipContainer}>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Swimming</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Working out</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Traveling</Text>
            </View>
          </View>

          {/* Classes */}
          <Text style={styles.sectionTitle}>Classes</Text>
          <View style={styles.chipContainer}>
            <View style={styles.chip}>
              <Text style={styles.chipText}>CSE 373</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>INFO 360</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>STAT 338</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  searchContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  searchInput: {
    fontSize: 16,
    color: 'black',
  },
  card: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  addButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#6D28D9',
    borderRadius: 50,
    padding: 10,
    width: 50,  // Make it a perfect square
    height: 50,
  },
  addIcon: {
    left: 5,
  },
  username: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  major: {
    color: 'white',
    fontSize: 16,
  },
  year: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  bio: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 5,
  },
  chip: {
    backgroundColor: '#6D28D9',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
  },
  chipText: {
    color: 'white',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});