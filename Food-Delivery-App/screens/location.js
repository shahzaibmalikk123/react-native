import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, StyleSheet, Pressable, ImageBackground, View, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const colorScheme = {
    brown: '#C6742E', blue: '#6DC8E8', red: '#D4263F', orange: '#F18933',
    marone: '8C162E', yellow: 'F8AD3E', purple: '342649', lightpurple: 'CDCAE1', greyishpurple: '81829E'
    , cl1: '#55477E', cl2: '#5A4B87', cl3: '#7B61C1'
};
const windowWidth = Dimensions.get('window').width;

export default function Location({ navigation }) {
    const [location, setLocation] = useState('');
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/pn1.png')} resizeMode="cover">
                <View style={styles.search}>
                    <GooglePlacesAutocomplete
                        query={{ key: 'AIzaSyCSWIgeYITb8iY4QS2dchDDO5oB3D4jeHE' }}
                        placeholder='Search'
                        onPress={(data) => {
                            setLocation(data.description)
                        }}
                        styles={{
                            textInput: {
                                // marginHorizontal: 20,
                                borderRadius: 20,
                                backgroundColor: '#eee',
                                // marginBottom: 20,
                                marginTop: 7,
                                fontWeight: '700',
                            },
                            textInputContainer: {
                                marginHorizontal: 20,
                                borderRadius: 50,
                                backgroundColor: '#eee',
                                marginBottom: 20,
                                marginRight: 30,
                                alignItems: 'center',
                                fontWeight: '700',
                            },
                        }}
                        renderLeftButton={() => (
                            <View style={{ marginLeft: 10 }}>
                                <Ionicons name='location-sharp' size={24} />
                            </View>
                        )}
                        renderRightButton={() => (
                            <View style={styles.searchoption}>
                                <AntDesign style={{ marginTop: 3, marginRight: 5 }} name='clockcircle' size={15} />
                                <Text>Search</Text>
                            </View>
                        )}
                    />
                </View>

                {/* <View style={{ marginTop: 20, backgroundColor: colorScheme.red, padding: 10, borderRadius: 20 }}>
                <Text style={{ color: 'white' }}>{location}</Text>
            </View> */}

                <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Restaurants Header', { location: { location } })}>
                        <Text style={styles.buttonText}>Confirm Location</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 10,
        // paddingTop: 10,
    },
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
    search: {
        // marginTop:200,
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: windowWidth,
        paddingTop: 21,
    },
    searchoption: {
        marginHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
});
