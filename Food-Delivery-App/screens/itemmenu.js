import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Modal, Text, View, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const restaurentInfo = {
    name: "Tanduri Restaurent Islamabad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQl6P6lcDb8SQHwCVE9PIhp2JthnwfCe48fw&usqp=CAU",
    price: "Rs",
    reviews: '1500',
    rating: 4.5,
    categories: [{ title: 'Tanduri' }, { title: 'Restaurent Islamabad' }, { title: 'Wah Cantt' }],
};

const { name, image, price,
    reviews, rating, categories } = restaurentInfo;

const formattedCategories = categories.map((cat) => cat.title).join('-');

const description = `${formattedCategories} ${price ? '-' + price : ""} - ${rating} ⭐ (${reviews}+)`;

// const image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75OO8dpOPKAOiE-qcIJFwp-nc3uO-eI6heg&usqp=CAU";
// const title ="Tanduri Restaurent Islamabad"; 
// const description="Desi - Comfort Food - ₨ - 4⭐(2901+)";

const foods = [
    {
        title: " Chicken Biryani",
        description: "Delicious Biryani with grilled chicken",
        price: "Rs.299.00",
        image: "https://img-global.cpcdn.com/recipes/2ca17025ebce0dba/400x400cq70/photo.jpg",
    },
    {
        title: "Mutton karahi",
        description: "Full spicy mutton karahi with garlic sauce and chatni ",
        price: "Rs.2000.00",
        image: "https://lh3.googleusercontent.com/yEW3XUlxq3JMUVNDncZgf33-QYX7pemBUQsv0jxCwPql7UZJj4oooksJ0zm7KiCNjbF9Ewp8SIGITK1kknr8=w1920-h1920-c-rj-v1-e365",
    },
    {
        title: " Lasagnia",
        description: "Tasty lasagnia with butter lettuce and  spicy tomato sauce",
        price: "Rs.699.00",
        image: "https://demo.ziprecipes.net/wp-content/uploads/2020/07/Most-Amazing-Lasagna-2-e1574792735811.jpg",

    },
    {
        title: " Grilled Chicken",
        description: "Hot grilled chicken , the taste you love",
        price: "Rs.699.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ABTK4Lr3sV3YWzl5dBWID7gJWKqq-DtFww&usqp=CAU",
    },
    {
        title: "Shinwari Chicken biryani",
        description: "Spicy Shinwari biryani with 500ml drink",
        price: "Rs.399.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStDSqC7kxWeh9e40CuO8g-Z1WKGUYdo4ys5A&usqp=CAU",
    },
    {
        title: " Zinger Burger",
        description: "with fries and 300ml drink",
        price: "Rs.499.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGbDqtKe_taaO8kBB_vSoQzjm8rRtBzfFLPQ&usqp=CAU",
    },
    {
        title: " Beef Burger",
        description: "with fries",
        price: "Rs.599.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKY3lNkmnkTzW802TAHPHmCRnTTWEKnEnAuA&usqp=CAU",
    },
    {
        title: "Garlic Mayo Fries",
        description: "Fries with 500ml drink",
        price: "Rs.350.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQklaaVkZav9QH8iYtcC9ZjFFOE_r3a3PSn7Q&usqp=CAU",
    },
    {
        title: "Grilled Chicken Burger",
        description: "short gun burger with fries also available in beef",
        price: "Rs.550.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHD-Hr3e5KYxUTyvGNDVokqt99VXop38Ipw&usqp=CAU",
    },
    {
        title: " Grilled Chicken",
        description: "Hot grilled chicken , the taste you love",
        price: "Rs.699.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ABTK4Lr3sV3YWzl5dBWID7gJWKqq-DtFww&usqp=CAU",
    },
    {
        title: "Chicken and Spinach Pizza",
        description: "Delicious chicken chunks,spinach,olives,feta cheese and roasted bell peppers with our classic pizza sauce",
        price: "Rs.799.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYoKJpUm8WEM7aPL48_pGPJMQFQmSEpR_CA&usqp=CAU",
    },
    {
        title: "Chicken and Spinach Pizza",
        description: "Delicious chicken chunks,spinach,olives,feta cheese and roasted bell peppers with our classic pizza sauce",
        price: "Rs.799.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYoKJpUm8WEM7aPL48_pGPJMQFQmSEpR_CA&usqp=CAU",
    },
    {
        title: "Chicken Margerita Pizza",
        description: "With our classes tomato sauce,mozarella cheese & fresh basil on our thin crust",
        price: "Rs.1199.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquvbXCZ_RpRu1rJ6Wl1RhIZd6NgAEVBUHiA&usqp=CAU",
    },
    {
        title: "Chicken & jalapeno Pizza",
        description: "chunks of chicken,jalapeno,olives & mozzarella cheese with our classes sauce",
        price: "Rs.1199.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIe3UndeHHlxx3p8TIWmWOJygf4MuEirO8g&usqp=CAU",
    },
    {
        title: "Tandoori Chicken Tikka Kebab ",
        description: "Salad with One piece Chicken tikka Chest(Serves 1)",
        price: "Rs.899.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKYaxmBI6XwHV-dga4VlKGUHyegKPi6ShLw&usqp=CAU",
    },
    {
        title: "Lobia ",
        description: "Per plate",
        price: "Rs.285.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPGTwiwRYUpkINFTSJD35Xfoi7X0MGL2PsA&usqp=CAU",
    },
    {
        title: "Chicken Tikka ",
        description: "Salad with One Leg Piece",
        price: "Rs.299.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhEh_VlJlv9PKilZQiJfWzT667qMKVlGdig&usqp=CAU",
    },
    {
        title: "Hot and Sour Chicken Corn Soup ",
        description: "Warm & cozy checken corn soup is loadded with shredded chicken",
        price: "Rs.180.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbBVMkmXh0pPfrnSi9ECCD436yzpFVko_LA&usqp=CAU",
    },
    {
        title: "Chicken Manchurian & Fried Rice ",
        description: "For perfect delicious taste boneless chicken ",
        price: "Rs.500.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYy7YoMWv35ERAeI1-cKiqkjvrIW1ar8TLw&usqp=CAU",
    },
    {
        title: "Chicken Makhni Handi ",
        description: "An extremely rich man course of chicken,cook in a simple way",
        price: "Rs.549.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMBNmU8CdG1Y6ZG8XiZ30q6AeucfWcy_IPzA&usqp=CAU",
    },
    {
        title: "Full Broast Deal ",
        description: "4 Chicken broast pieces, 2 chest wing, 2 leg thigh with garlic mayo sauce",
        price: "Rs.549.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9yG1BgR2Are-KSd0vuHxXPQsEcbYv-4F1zA&usqp=CAU",
    },
    {
        title: "Chicken Chow Mein",
        description: "Serves 1-2 person",
        price: "Rs.639.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtq7lw1mEWDjhWDfg1NjHOUyATLxLqFcNUQ&usqp=CAU",
    },
    {
        title: "Dynamite Prawn",
        description: "Serves 1 person",
        price: "Rs.399.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5EGGfuipV6X30zh0CQJlrnGwqVt1sAyuJJA&usqp=CAU",
    },
]

export default function ItemMenu({ route, navigation }) {
    const [modal, setModal] = useState(false);
    const checkout = () => {
        setModal(false);
        navigation.navigate("Checkout");
    }
    return (
        <View>
            <ScrollView>
                <View>
                    {<RestaurentImage image={image} />}
                    {<RestaurentName name={name} />}
                    {<RestaurentDescription description={description} />}
                    <Divider width={1} style={{ marginVertical: 23 }} />
                </View>

                {foods.map((food, index) => (
                    <View key={index}>
                        <View style={styles.menuItemStyle}>
                            <BouncyCheckbox
                                iconStyle={{ borderColor: 'lightgrey', borderRadius: 0 }}
                                fillColor="#D4263F"
                            />
                            {<FoodInfo food={food} />}
                            {< FoodImage food={food} />}

                            <StatusBar style="auto" />
                        </View>
                        <Divider width={0.5} style={{ marginVertical: 23 }} />

                    </View>
                ))}
            </ScrollView>
            {/* <ViewCart navigation={navigation} RestaurentName={route.params.name}/> */}

            <View style={{ flex: 1, alignItems: 'center', marginLeft: 153, justifyContent: 'center', flexDirection: 'row', position: 'absolute', bottom: 10, }}>
                < View style={{ flexDirection: 'row', justifyContent: "center", width: 100, }}>
                    <TouchableOpacity style={{ width: 300, backgroundColor: '#D4263F', borderRadius: 30, padding: 13, alignItems: 'center' }}
                        onPress={() => setModal(true)}
                    >
                        <Text style={{ color: 'white', fontSize: 19 }}>
                            View Cart
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* View Cart Model */}

            <Modal
                animationType='slide'
                visible={modal}
                transparent={true}
                onRequestClose={() => setModal(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalSubcontainer}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', marginLeft: 120, marginRight: 100 }}>FIG Restaurant</Text>
                            <View>
                                <Pressable onPress={() => setModal(false)}>
                                    <Ionicons name="close-circle-outline" size={24} />
                                </Pressable>
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <View style={styles.orderItem}>
                                <Text style={{ fontWeight: '600', fontSize: 16 }}>Tandoori Chicken</Text>
                                <Text style={{ opacity: 0.7, fontSize: 16 }}>899 Rs.</Text>
                            </View>
                            <View style={styles.orderItem}>
                                <Text style={{ fontWeight: '600', fontSize: 16 }}>Chicken Tikka</Text>
                                <Text style={{ opacity: 0.7, fontSize: 16 }}>300 Rs.</Text>
                            </View>
                        </View>
                        <View style={styles.subTotal}>
                            <Text style={{ fontWeight: '600', fontSize: 14 }}>Subtotal</Text>
                            <Text style={{ fontSize: 14 }}>1199 Rs.</Text>
                        </View>
                        <TouchableOpacity style={styles.checkoutButton} onPress={() => checkout()}>
                            <Text style={{ color: '#fff', fontSize: 20 }}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View >
    );
}

const styles = StyleSheet.create({
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
    modalContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 56,
        backgroundColor: "rgba(0,0,0,0.6)",
        // marginHorizontal: 20,
    },
    modalSubcontainer: {
        padding: 20,
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        paddingBottom: 150,
    },
    checkoutButton: {
        backgroundColor: '#D4263F',
        padding: 13,
        borderRadius: 30,
        width: 300,
        alignItems: 'center',
    },
    orderItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
    },
    subTotal: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 40,
    },
})




const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View style={{ marginLeft: -10 }}>
        <Image
            source={{ uri: props.food.image }}
            style={{ width: 100, height: 100, borderRadius: 8 }}
        />
    </View>
);
const RestaurentImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
);
const RestaurentName = (props) => (

    <Text style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,
    }}>{props.name}</Text>
);
const RestaurentDescription = (props) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 15.5,
    }}>{props.description}</Text>
);


