import React from 'react';
import { Text, Button, View } from 'react-native';

export default function Home({ navigation }) {
    function navigateToUsers() {
        navigation.navigate('Home', {
            screen: 'Settings'
        });
    }
    return (
        <View>
            <Text>Home</Text>
            <Button title="Navigate to Settings" onPress={navigateToUsers} />
        </View>
    );
}