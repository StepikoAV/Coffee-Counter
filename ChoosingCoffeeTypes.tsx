import React, {useState} from "react";
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native";


export function ChoosingCoffeeTypes({route, navigation}) {
    const [counter, setCounter] = useState<number>(0);
    const [counter2, setCounter2] = useState<number>(0);
    const nPlus1 = () => {
        setCounter(counter + 1)
        setCounter2(counter2+1)
    };
    const nPlus2 = () => {
        setCounter(counter + 1)
        setCounter2(counter2+2)
    };

    const { cupCounter } = route.params;
    const { dozeCounter } = route.params;


    return (
        <ScrollView style={styles.scrollView}>
            <TouchableOpacity
                style={styles.touchOpac}
                onPress={nPlus1}>
                <Image
                    source={require('./assets/espresso.jpg')}
                    style={styles.image}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.touchOpac}
                onPress={nPlus2}>
                <Image
                    source={require('./assets/doubleEspresso.jpg')}
                    style={styles.image}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchOpac}
                onPress={nPlus1}>
                <Image
                    source={require('./assets/americano.jpg')}
                    style={styles.image}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchOpac}
                onPress={nPlus1}>
                <Image
                    source={require('./assets/cappuchino.jpg')}
                    style={styles.image}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchOpac}
                onPress={nPlus1}>
                <Image
                    source={require('./assets/latte.jpg')}
                    style={styles.image}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchOpac}
                onPress={nPlus1}>
                <Image
                    source={require('./assets/flatWhite.jpg')}
                    style={styles.image}
                />
            </TouchableOpacity>

            <Text style={styles.text}>Total: {counter}</Text>

            <Button
                title={'Confirm'}
                color={"#8d8d8d"}
                onPress={() => {
                navigation.navigate('Coffee Counter')
                cupCounter(counter)
                dozeCounter(counter2)
            }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        //backgroundColor: '#fff',
    },

    text: {
        fontSize: 25,
        textAlign: "center",
        backgroundColor: "#b4b4b4",
    },
    image: {
        alignContent: "center",
        width: 150,
        height: 150
    },
    touchOpac: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        color: "#fff"
    },
    button: {
        alignItems: "center",
        //backgroundColor: "#DDDDDD",
        padding: 10,
        color: "#fff",
    },

});