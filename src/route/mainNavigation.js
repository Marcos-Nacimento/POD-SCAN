import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Screen, Navigator } = createStackNavigator();

import MainScreen from '../screens/main';
import ScanScreen from  '../screens/scan';

export default () => {
    return(
        <Navigator
            headerMode="none"
        >
            <Screen 
                name='root'
                component={MainScreen}
            />
            <Screen 
                name='scanDetail'
                component={ScanScreen}
            />
        </Navigator>
    );
};