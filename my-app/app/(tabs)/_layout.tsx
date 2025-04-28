import { ImageBackground, Image, Text, View } from 'react-native';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabIcon = ({focused,icon,title}:any) => {
    if(focused){
        return (
            <ImageBackground 
              source={images.highlight} 
              className="flex flex-row w-[120px] h-[56px] justify-center items-center rounded-full overflow-hidden"
              style={{
                  flexDirection: 'row',
                  width: '100%',
                  flex: 1,
                  minWidth: 112,
                  minHeight: 56,
                  marginTop: 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 999,
                  overflow: 'hidden'
                }}
            >
              <Image source={icon} className="w-5 h-5" />
              <Text className="text-secondary text-base font-bold ml-2">{title}</Text>
            </ImageBackground>
          );
    }
    return(
        <View className="size-full justify-center items-center
        mt-4 rounded-full">
            <Image source={icon} tintColor="#A8B5DB" className="size-5" >

            </Image>

        </View>
    )
   
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
            borderRadius:50,
            
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
