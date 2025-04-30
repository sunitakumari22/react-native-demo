import { ImageBackground, Image, Text, View } from 'react-native';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <ImageBackground 
        source={images.highlight} 
        style={{
          width: 90,
          height: 40,
          marginTop:12,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 999,
          overflow: 'hidden',
        }}
      >
        <Image 
          source={icon} 
          style={{ width: 18, height: 18, tintColor: '#000' }} 
        />
        <Text style={{ color: '#000', fontWeight: '600', marginLeft: 6, fontSize: 14 }}>
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
      <Image 
        source={icon} 
        style={{ width: 20, height: 20, tintColor: '#A8B5DB' }} 
      />
    </View>
  );
};

  

const _layout = () => {
  return (
    <Tabs 
    screenOptions={{
        tabBarShowLabel:false,
        tabBarItemStyle:{
            width:'100%',
            height:'100%',
            justifyContent:'center',
            alignItems:'center'
        },
        tabBarStyle:{
            backgroundColor:'#0f0D23',
            borderRadius:0,
            
        }
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
        <TabIcon 
          focused={focused}
           icon={icons.home}
           title="Home"/>
        }}
      />
      
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused }) => 
            <TabIcon 
          focused={focused}
           icon={icons.search}
           title="Search"/>
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused }) => 
            <TabIcon 
          focused={focused}
           icon={icons.save}
           title="Saved"/>
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => 
            <TabIcon 
          focused={focused}
           icon={icons.person}
           title="Profile"/>
        }}
      />
    </Tabs>
  )
}

export default _layout;
