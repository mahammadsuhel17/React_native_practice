import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {
    View, Text, Button,StyleSheet, 
} from 'react-native';
import TimeScreen from './TimeScreen';
import Flatlist from './Falatlist';
import ImageScreen from './ImageScreen';
import AddColorScreen from './AddColorScreen';
import LoginScreen from './LoginScreen';


const HomeScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={{flex:1}}>
            
            <View style={styles.button}>
            <Button 
                    title='Go To Login Screen'
                    onPress={() => { navigation.navigate(LoginScreen) }} />
            </View>

            <View style={styles.button}>
                <Button 
                    title='Go To Time Screen'
                    onPress={() => { navigation.navigate(TimeScreen) }} />
            </View>

            <View style={styles.button}>
                <Button 
                    title='Go To list screen'
                    onPress={() => { navigation.navigate(Flatlist) }} />              
            </View>

            <View style={styles.button}>
            <Button 
                    title='Go To Image screen'
                    onPress={() => { navigation.navigate(ImageScreen) }} />
            </View>

            <View style={styles.button}>
            <Button 
                    title='Go To AddColorScreen'
                    onPress={() => { navigation.navigate(AddColorScreen) }} />
            </View>       
            
        </View>

        


    )
};

const styles=StyleSheet.create({
button:{
   width:200,
   padding:10,
   marginLeft:80,
}
})

export default HomeScreen;