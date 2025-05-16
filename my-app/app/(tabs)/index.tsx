import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#F1F1F1' }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#1E2A78', padding: 10 }}>
        <TouchableOpacity>
          <Image  style={{ width: 24, height: 24, tintColor: 'white' }} />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginLeft: 10 }}>Students</Text>
        <View style={{ marginLeft: 'auto' }}>
          <Image  style={{ width: 100, height: 30 }} resizeMode="contain" />
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 10 }}>
        {/* Attendance Card */}
        <View style={{ backgroundColor: '#FF6B6B', borderRadius: 8, padding: 15, marginBottom: 10 }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Sem 2 Attendance %</Text>
          <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}>78.36%</Text>
          <Text style={{ color: '#FFF', fontSize: 12 }}>Attendance % based on credit papers only</Text>
          <Text style={{ marginTop: 8, color: 'white', fontSize: 12, backgroundColor: 'rgba(255,255,255,0.2)', padding: 5, borderRadius: 4 }}>
            *Attendance is being updated and it might not be accurate. Please contact your HoD to know your accurate attendance.
          </Text>
        </View>

        {/* Fee Dues Card */}
        <View style={{ backgroundColor: '#00AEEF', borderRadius: 8, padding: 15, marginBottom: 10 }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Fee Dues</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Rs. 0</Text>
        </View>

        {/* Upcoming Holidays Card */}
        <View style={{ backgroundColor: '#8775F5', borderRadius: 8, padding: 15, marginBottom: 10 }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Upcoming Holidays</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>07-Jun-2025</Text>
          <Text style={{ color: 'white', fontSize: 12 }}>Bakrid</Text>
        </View>

        {/* Exam Registration Card */}
        <TouchableOpacity
          style={{ backgroundColor: '#5F80E8', borderRadius: 8, padding: 15 }}
          onPress={() => router.push('/')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Examination Registration</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Download Card</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer */}
      <View style={{ alignItems: 'center', padding: 10 }}>
        <Text style={{ fontSize: 12, color: '#777' }}>© Copyright 2023 - PyxisBlu. All rights reserved.</Text>
      </View>
    </View>
  );
}
