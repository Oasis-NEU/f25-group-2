//import { Tabs } from 'expo-router';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { withLayoutContext } from 'expo-router';

//import { HapticTab } from '@/components/haptic-tab';
//import { IconSymbol } from '@/components/ui/icon-symbol';
//import { Colors } from '@/constants/theme';
//import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  //const colorScheme = useColorScheme();

  const { Navigator } = createMaterialTopTabNavigator();
  const MaterialTopTabs = withLayoutContext(Navigator);

  return (
    <MaterialTopTabs>
      <MaterialTopTabs.Screen
        name="index"
        options={{
          title: 'Home',
       //   tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <MaterialTopTabs.Screen
        name="rest"
        options={{
          title: 'Restaurants',
     //     tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <MaterialTopTabs.Screen
        name="act"
        options={{
          title: 'Activities',
      //    tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <MaterialTopTabs.Screen
        name="pref"
        options={{
          title: 'Preferences',
     //     tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <MaterialTopTabs.Screen
        name="contact"
        options={{
          title: 'About Us',
        //  tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </MaterialTopTabs>
  );
}
