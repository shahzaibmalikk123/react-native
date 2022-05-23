import React from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';

const colorScheme = {
    brown: '#C6742E', blue: '#6DC8E8', red: '#D4263F', orange: '#F18933',
    marone: '8C162E', yellow: 'F8AD3E', purple: '342649', lightpurple: 'CDCAE1', greyishpurple: '81829E'
    , cl1: '#55477E', cl2: '#5A4B87', cl3: '#7B61C1'
};

export default function Location({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Restaurants Header')}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        width: 300,
        height: 60,
        backgroundColor: colorScheme.red,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        marginTop: -2,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
});
