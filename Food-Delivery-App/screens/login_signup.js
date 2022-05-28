import { Text, View, StyleSheet, Image, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { auth } from '../firebase';

const colorScheme = {
    brown: '#C6742E', blue: '#6DC8E8', red: '#D4263F', orange: '#F18933',
    marone: '#8C162E', yellow: '#F8AD3E', purple: '#342649', lightpurple: '#CDCAE1', greyishpurple: '#81829E'
    , cl1: '#55477E', cl2: '#5A4B87', cl3: '#7B61C1'
};

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('Location');
            }
        })
        return unsubscribe;
    }, [])

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with: ', user.email);
            })
            .catch(error => alert(error.message))
    }
    const handleLogIn = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with: ', user.email);
                // navigation.navigate('Location');
            })
            .catch(error => alert(error.message))
    }
    // Function to signout (NOT IN USE CURRENTLY)
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace('Login')
            })
            .catch(error => alert(error.message))
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/logo.png')} style={styles.logoImage} />
                <Text style={styles.logoText}>SWIFT DELIVERS</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput value={email} onChangeText={text => setEmail(text)} placeholder='Email' style={styles.input} />
                <TextInput value={password} onChangeText={(text) => setPassword(text)} placeholder='Password' style={styles.input} secureTextEntry />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleLogIn} style={styles.button}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.button1]}><Text style={styles.buttonText1}>Signup</Text></TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorScheme.red,
        // opacity: 0.9,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 10,
        marginTop: 5,
    },
    inputContainer: {
        marginTop: 100,
        width: '80%',
        borderColor: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'center',
        marginTop: 30,
    },
    button: {
        backgroundColor: 'white',
        width: 100,
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 5,
        marginVertical: 20,
    },
    button1: {
        backgroundColor: '#D4263F',
        borderColor: '#D4263F',
        borderWidth: 2,
        width: 100,
    },
    buttonText: {
        color: '#D4263F',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonText1: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
    imageContainer: {
        marginTop: -100,
    },
    logoImage: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        borderRadius: 40,
    },
    logoText: {
        marginTop: 10,
        alignSelf: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: '600',

    },
});