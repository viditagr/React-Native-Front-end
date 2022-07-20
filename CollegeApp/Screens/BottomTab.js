import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./Home";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Plus from "./Plus";
import Explore from './Explore';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <NavigationContainer>

            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Explore" component={Explore} />
                <Tab.Screen name="Plus" component={Plus} />
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Notifications" component={Notifications} />
            </Tab.Navigator>

        </NavigationContainer>
    );
}