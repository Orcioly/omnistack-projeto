import React from 'react';
import { Text, Settings } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Users';

const Tab = createBottomTabNavigator();

function Wildcard({ title }) {
    return <Text>Wildcard {title}</Text>
}

export default function DashboardRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={() => <Wildcard title="Home" />} />
            <Tab.Screen name="Settings" component={() => <Wildcard title="Settings" />} />
        </Tab.Navigator>
    );
}