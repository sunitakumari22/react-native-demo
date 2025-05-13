import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images'; // Profile picture if available
import { useRouter } from 'expo-router';

const Profile = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={icons.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 24 }} /> {/* For layout spacing */}
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image
          source={icons.person || { uri: 'https://placehold.co/100x100' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.bio}>Movie Enthusiast | Critic | Story Lover</Text>
      </View>

      {/* Favorite Genres */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favorite Genres</Text>
        <View style={styles.genreList}>
          {['Action', 'Drama', 'Sci-Fi'].map((genre) => (
            <View key={genre} style={styles.genreTag}>
              <Text style={styles.genreText}>{genre}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Saved Movies */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Saved Movies</Text>
        <Text style={styles.sectionSubText}>Coming soon...</Text>
      </View>

      {/* Logout / Settings */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0C1D',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#E879F9',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#A259FF',
    marginBottom: 12,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  bio: {
    color: '#ccc',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  sectionSubText: {
    color: '#aaa',
    fontSize: 14,
  },
  genreList: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  genreTag: {
    backgroundColor: '#312e81',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 10,
    marginBottom: 8,
  },
  genreText: {
    color: '#fff',
    fontSize: 14,
  },
  logoutButton: {
    backgroundColor: '#A259FF',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
