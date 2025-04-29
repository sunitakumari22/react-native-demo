import { View, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { icons } from '@/constants/icons';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <View className="w-full px-5 mt-6">
      <View className="flex-row items-center bg-[#1E1B2E] rounded-full px-4 py-3 shadow-md shadow-[#00000033]"  style={{ flexDirection:'row' }}>
        <Image 
          source={icons.search} 
          className="w-5 h-5" 
          resizeMode="contain" 
          tintColor="#C084FC" // soft violet glow
        />
        {/* <TextInput
          placeholder="Search for something..."
          value={searchValue}
          onChangeText={setSearchValue}
          placeholderTextColor="#a8b5db"
          className="flex-1 ml-3 text-white text-base"
        /> */}
      </View>
    </View>
  );
};

export default Search;
