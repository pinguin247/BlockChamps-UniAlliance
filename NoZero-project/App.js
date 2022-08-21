import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { colors } from './src/constants';
import { Modalize } from 'react-native-modalize';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DifficultyScreen from './screens/DifficultyScreen';

function HomeScreen({navigation}){
  function buttonPressed(){
    navigation.navigate('DifficultyScreen');
  }
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>NoZero</Text>
      <StatusBar style="auto" hidden={true}/>
      <Image style={styles.image} source={require('./assets/clip-solving-math-problem.png')} />
      <TouchableOpacity style={styles.startButton} onPress={buttonPressed}>
          <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
      
      <>
      <View width="100%" style={{justifyContent:"flex-end",r:"red", flexDirection:"row", paddingRight:20}}>
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
    </SafeAreaView>
  );
}


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DifficultyScreen" component={DifficultyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems:'center',
    justifyContent: 'flex-start',
  },
  image:{
    height:200,
    width:300,
    marginTop:140,
    alignSelf:"center"
  },

  title:{
    color:"#98948E",
    fontSize:50,
    fontFamily:"Verdana-Bold",
    letterSpacing:2
  },

  startButton:{
    backgroundColor:"#98948E",
    justifyContent:"center",
    marginTop:"auto",
    width:180,
    height:60,
    borderRadius:20,
    bottom:120
  },

  startButtonText:{
    color: colors.black,
    fontSize:25,
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
    fontSize:30,
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
