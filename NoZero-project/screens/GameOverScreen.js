import React, { useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { colors } from '../src/constants';
import { createStackNavigator } from "@react-navigation/stack";
import { Modalize } from 'react-native-modalize';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../App';

function GameOverScreen({navigation}){
    function buttonPressed(){
      navigation.navigate('HomeScreen');
    }
    const modalizeRef = useRef(null);
  
    const onOpen = () => {
      modalizeRef.current?.open();
    };
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>NoZero</Text>
        <View style={{height:"100%", width:"100%", alignItems:"center", justifyContent:"center", bottom:70}}>
            <CentureSum />
        </View>
        
        
        <>
        <View width="100%" style={{justifyContent:"flex-end",marginTop:"auto", flexDirection:"row", padding:20}}>
          <TouchableOpacity onPress={onOpen}>
            <FontAwesome name="question-circle-o" size={40} color="#98948E" />
          </TouchableOpacity>
        </View>
          
          <Modalize 
          ref={modalizeRef}
          snapPoint={700}
          borderRadius={25}
          modalStyle={styles.modalstyles}
          >
          <View style={{flex:1, flexDirection:"column", alignContent:"center"}}>
            <Text style={styles.modaltitle}>How to Play</Text>
            <Text style={styles.modalbodytext}>
            The goal of the game is to avoid any numbers with 0 in it. 
            </Text>
            <Text style={styles.modalbodytext}>
            In Round 1, you start with the number 1. You have 4 numbers to choose from to get to the next round. Remember to look at the operator to avoid careless mistakes!
            </Text>
            <Text style={styles.modalbodytext}> 
              As you get to the higher rounds, you have less time to think! Be careful and do those quick maths well!
            </Text>
            <Text style={styles.modalbodytext}>
              All the best player!
            </Text>
            
            </View>
          </Modalize>
        </>
      </View>
    );
  }
  
  
  const Stack = createStackNavigator();
  
  export default function Contactstack() {
      return (
          <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black,
      alignItems:'center',
      justifyContent: 'flex-start',
    },
  
    title:{
      color:"#98948E",
      fontSize:50,
      fontFamily:"Verdana-Bold",
      letterSpacing:2,
      top:40
    },
  
    easyButton:{
      backgroundColor:"#98948E",
      justifyContent:"center",
      marginTop:"auto",
      width:220,
      height:80,
      borderRadius:40,
    },
  
    easyButtonText:{
      color: colors.black,
      fontSize:30,
      fontFamily:"AvenirNext-Bold",
      textAlign:"center",
      letterSpacing:3
    },
  
    modalstyles:{
      zIndex: 5,
  
      marginTop: 'auto',
  
      backgroundColor: '#444547',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
  
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.1,
      shadowRadius: 12,
  
      flex:1,
      alignItems:"center",
  
      elevation: 4,
    },
  
    modaltitle:{
      color:"#d1d1d1",
      fontSize:25,
      marginTop:25,
      fontFamily:"AvenirNext-Bold",
      textAlign:"center"
    },
  
    modalbodytext:{
      color:"#d1d1d1",
      fontFamily:"AvenirNext-Regular",
      fontSize:22,
      padding:20,
      lineHeight:30
    }
  
  });
  