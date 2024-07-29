
// Navigation Bottom Tabs

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function NavigationTabs() {
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="AccountBalance" component={AccountBalanceScreen} />
            <Tab.Screen name="Transactions" component={TransactionsScreen} />
        </Tab.Navigator>
    </NavigationContainer>
}