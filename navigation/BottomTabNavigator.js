import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TeamScreen from '../screens/TeamScreen';
import VideoScreen from '../screens/VideoScreen';
import NewsScreen from '../screens/NewsScreen';
import ChatScreen from '../screens/ChatScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'HOME';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  navigation.setOptions();

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} tabBarOptions={{ activeTintColor: 'white', inactiveTintColor: 'grey', style: {backgroundColor: '#28303f' }}}>
      <BottomTab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          title: 'HOME',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="TEAM"
        component={TeamScreen}
        options={{
          title: 'TEAM',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-people" />,
        }}
      />
      <BottomTab.Screen
        name="VIDEO"
        component={VideoScreen}
        options={{
          title: 'Video',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-videocam" />,
        }}
      />
      <BottomTab.Screen
        name="NEWS"
        component={NewsScreen}
        options={{
          title: 'NEWS',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-paper" />,
        }}
      />
      <BottomTab.Screen
        name="CHAT"
        component={ChatScreen}
        options={{
          title: 'CHAT',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-chatboxes" />,
        }}
      />
    </BottomTab.Navigator>
  );
}