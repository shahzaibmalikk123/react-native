import { View, Image, StatusBar, Text, StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-elements';
// import LottieView from 'lottie-react-native';


export default function Checkout() {
    return (
        <View style={styles.container}>
            {/* <LottieView source={require('../assets/animations/782-check-mark-success.json')} /> */}
            <Ionicons name="checkmark-done-outline" size={75} color="green" />
            <Text>Your order at FIG Restaurant has been placed for 1199 Rs.</Text>
            <View style={{ marginTop: 30 }}>
                <View style={styles.menuItemStyle}>
                    <View style={{ width: 240, justifyContent: "space-evenly" }}>
                        <Text style={styles.titleStyle}>Tandoori Chicken</Text>
                        <Text>Salad with One piece Chicken tikka Chest(Serves 1)</Text>
                        <Text>899 Rs.</Text>
                    </View>
                    <View style={{ marginLeft: -10 }}>
                        <Image
                            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKYaxmBI6XwHV-dga4VlKGUHyegKPi6ShLw&usqp=CAU" }}
                            style={{ width: 100, height: 100, borderRadius: 8 }}
                        />
                    </View>

                    <Divider width={0.5} style={{ marginVertical: 23 }} />
                </View>
                <View style={styles.menuItemStyle}>
                    <View style={{ width: 240, justifyContent: "space-evenly" }}>
                        <Text style={styles.titleStyle}>Chicken Tikka</Text>
                        <Text>Salad with One Leg Piece</Text>
                        <Text>300 Rs.</Text>
                    </View>
                    <View style={{ marginLeft: -10 }}>
                        <Image
                            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhEh_VlJlv9PKilZQiJfWzT667qMKVlGdig&usqp=CAU" }}
                            style={{ width: 100, height: 100, borderRadius: 8 }}
                        />
                    </View>

                    <StatusBar style="auto" />
                </View>
                <Divider width={0.5} style={{ marginVertical: 23 }} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        marginTop: 10,
        marginBottom: 0,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    },
});
