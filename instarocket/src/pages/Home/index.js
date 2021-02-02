import React from 'react';
import { Text, Button, View } from 'react-native';

export default function Home({ navigation }) {
    function navigateToUsers() {
        navigation.navigate('Users');
    }
    return (
        <View>
            <Text>Home</Text>
            <Button title="Navegar para Usuários" onPress={navigateToUsers} />
        </View>
    );
}