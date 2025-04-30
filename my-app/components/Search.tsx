import { View, Image, TextInput ,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { icons } from '@/constants/icons';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <View className="flex-1 items-center justify-center bg-[#0A032A] px-6">
      <View
        className="w-full max-w-md bg-[#1E1B2E] flex-row items-center justify-between rounded-full px-4 py-3"
        style={{
          shadowColor: '#C084FC',
          shadowOpacity: 0.4,
          shadowOffset: { width: 0, height: 6 },
          shadowRadius: 10,
          borderWidth: 1,
          borderColor: '#C084FC40', 
        }}
      >
        <TextInput
          placeholder="Search for something..."
          value={searchValue}
          onChangeText={setSearchValue}
          placeholderTextColor="#cfcfff"
          className="flex-1 mr-3 text-white font-semibold text-base"
        />

        <TouchableOpacity>
          <Image
            source={icons.search}
            className="w-5 h-5"
            resizeMode="contain"
            tintColor="#C084FC"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
