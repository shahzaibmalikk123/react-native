import React from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';

const colorScheme = [{ brown: '#C6742E' }, { blue: '#6DC8E8' }, { red: '#D4263F' }, { orange: '#F18933' },
{ marone: '8C162E' }, { yellow: 'F8AD3E' }, { purple: '342649' }, { lightpurple: 'CDCAE1' }, { greyishpurple: '81829E' }];

export default function Location({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.buttonText}>Go Back</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subcontainer: {
        alignItems: 'center',
        marginHorizontal: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
    },
    heading: {
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        borderRadius: 20,
        width: 300,
        height: 60,
        backgroundColor: colorScheme[2].red,
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
