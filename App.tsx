import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from "./HomeScreen";
import {ChoosingCoffeeTypes} from "./ChoosingCoffeeTypes";


const Stack = createStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Coffee Counter">
                <Stack.Screen name="Coffee Counter"
                              component={HomeScreen}
                              options={{
                                  title: 'Coffee Counter',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  }
                              }}/>
                <Stack.Screen name="Choose Your Coffee Type" component={ChoosingCoffeeTypes} options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
