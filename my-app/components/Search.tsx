import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { icons } from '@/constants/icons';
import { BlurView } from 'expo-blur';

interface Props {
  placeholder: string;
  onPress?: () => void;
  value: string;
  onChangeText: (text: string) => void;
}

const Search = ({ placeholder, onPress, value, onChangeText }: Props) => {
  return (
    <View className="w-full items-center px-6 mt-6 p-5">
      <BlurView
        intensity={50}
        tint="dark"
        style={{
          width: '100%',
          maxWidth: 400,
          borderRadius: 50,
          overflow: 'hidden',
          backgroundColor: 'rgba(30, 27, 46, 0.7)',
          borderWidth: 1.5,
          borderColor: '#C084FC88',
          paddingHorizontal: 20,
          paddingVertical: 14,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor="#E9D5FF"
            style={{
              flex: 1,
              fontSize: 16,
              fontWeight: '600',
              color: '#ffffff',
              paddingRight: 10,
            }}
          />
          <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <Image
              source={icons.search}
              style={{
                width: 22,
                height: 22,
                tintColor: '#E879F9',
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </BlurView>
    </View>
  );
};

export default Search;
