import React, {useState} from "react";
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native";


export function ChoosingCoffeeTypes({route, navigation}) {
    const [counterCup, setCounterCup] = useState<number>(0);
    const [counterDoze, setCounterDoze] = useState<number>(0);
    const addOneCupOneDoze = () => {
        setCounterCup(counterCup + 1)
        setCounterDoze(counterDoze + 1)
    };
    const addOneCupTwoDoze = () => {
        setCounterCup(counterCup + 1)
        setCounterDoze(counterDoze + 2)
    };

    const {cupCounter} = route.params;
    const {dozeCounter} = route.params;


    return (
        <ScrollView style={styles.scrollView}>
            <TouchableOpacity
                style={styles.touchOpac}
                onPress={addOneCupOneDoze}>
                <Image
                    source={require('./assets/espresso.jpg')}
                    style={styles.image}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.touchOpac}
                onPress={addOneCupTwoDoze}>
                <Image
                    source={require('./assets/doubleEspresso.jpg')}
                    style={styles.image}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchOpac}
                onPress={addOneCupOneDoze}>
                <Image
                    source={require('./assets/americano.jpg')}
                    style={styles.image}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchOpac}
                onPress={addOneCupOneDoze}>
                <Image
                    source={require('./assets/cappuchino.jpg')}
                    style={styles.image}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchOpac}
                onPress={addOneCupOneDoze}>
                <Image
                    source={require('./assets/latte.jpg')}
                    style={styles.image}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchOpac}
                onPress={addOneCupOneDoze}>
                <Image
                    source={require('./assets/flatWhite.jpg')}
                    style={styles.image}
                />
            </TouchableOpacity>

            <Text style={styles.text}>Total: {counterCup}</Text>

            <Button
                title={'Confirm'}
                color={"#8d8d8d"}
                onPress={() => {
                    navigation.navigate('Coffee Counter')
                    cupCounter(counterCup)
                    dozeCounter(counterDoze)
                }}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {},

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
        padding: 10,
        color: "#fff",
    },

});