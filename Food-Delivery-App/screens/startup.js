import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView } from 'react-native';

const colorScheme = {
    brown: '#C6742E', blue: '#6DC8E8', red: '#D4263F', orange: '#F18933',
    marone: '8C162E', yellow: 'F8AD3E', purple: '342649', lightpurple: 'CDCAE1', greyishpurple: '81829E'
    , cl1: '#55477E', cl2: '#5A4B87', cl3: '#7B61C1'
};

export default function Startup({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <View style={{ marginTop: 20 }}>
                    <Image source={require("../assets/images/Component1.png")} />
                </View>
                <View style={{ marginVertical: 70 }}>
                    <Text style={styles.heading}>Find restaurants near you!</Text>
                    <Text style={styles.text}><Text style={{ color: colorScheme.red, fontWeight: 'bold' }}>Swift Delivers</Text> allow you to choose your location and view restaurants and shops at that location.</Text><Text style={[styles.text, { marginTop: 20 }]}>Enter your location to find restaurants and shops near you. (Entering precise location will help you find only the restaurants that deliver in your area)</Text>
                </View>
                <View>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Location')}>
                        <Text style={styles.buttonText}>Enter my location</Text>
                    </Pressable>
                </View>
                <StatusBar />
            </View>
        </View>
    );
}

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
