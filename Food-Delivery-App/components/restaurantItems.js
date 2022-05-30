import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

export const localRestaurants = [
    {
        name: "Isb Cafe",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$10",
        reviews: 10000,
        rating: 4.2,
        wait: "25-35 • min"
    },
    {
        name: "Lhr Cafe",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$15",
        reviews: 13000,
        rating: 4.7,
        wait: "20-25 • min"
    },
    {
        name: "Khi Cafe",
        image_url:
            "https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_960_720.jpg",
        categories: ["Indian", "Bar"],
        price: "$13",
        reviews: 11000,
        rating: 4.9,
        wait: "25-30 • min"
    },
];

export default function RestaurantItems(props) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {localRestaurants.map((restaurant, index) => (
                <TouchableOpacity onPress={() => props.navigation.navigate('Item Menu')}
                    key={index} activeOpacity={1} style={{ width: "100%" }}>
                    <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
                        <RestaurantImage image={restaurant.image_url} />
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} wait={restaurant.wait} />
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const RestaurantImage = (props) => (
    <>
        <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
    </>
);

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: "gray" }}>{props.wait}</Text>
        </View>
        <View style={{
            backgroundColor: "#eee",
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
        }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
);