import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./Home";
import Profile from "./Profile";
import Info from "./Info";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <NavigationContainer>

            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Info" component={Info} />
            </Tab.Navigator>

        </NavigationContainer>
    );
}