import React, {FC, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";

export const HomeScreen: FC<any> = (props) => {
    const {navigation} = props;
    const [cupStatistic, setStat] = useState<number>(0);
    const [dozeStatistic, setStat2] = useState<number>(0);
    const coffein:number = dozeStatistic*126;
    const dayDoze:number = coffein/400*100;

    return (
        <>
            <View style={styles.container}>
                <Button
                    title={'Choose a Coffee Type'}
                    color={"#8d8d8d"}
                    onPress={() => {navigation.navigate('Choose Your Coffee Type', {
                        cupCounter: (counter) => {
                            setStat(cupStatistic + counter)
                        },
                        dozeCounter: (counter2) => {
                            setStat2(dozeStatistic + counter2)
                        } })
                    }}
                />
                <Text style={styles.text}>Cups Total: {cupStatistic}</Text>
                <Text style={styles.text}>Caffeine Total: {coffein} mg.</Text>
                <Text style={styles.text}>Or {dayDoze.toFixed(1)}% of Daily Dose</Text>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDDDDD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign : "center",
    },
    text: {
        fontSize: 20,
        textAlign : "center",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        fontSize: 30
    },
});