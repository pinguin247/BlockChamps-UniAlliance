
import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { operators } from '../src/constants';

let topnumber = Math.floor(Math.random() * 100) + 1;
let leftnumber = Math.floor(Math.random() * 100) + 1;
let rightnumber = Math.floor(Math.random() * 100) + 1;
let bottomnumber = Math.floor(Math.random() * 100) + 1;


class CentureSum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      centrenumber: 1,
      score: 0,
      gameover: false
    };
  }

  setCount = (number) => this.setState(
    prevState => ({ ...prevState,
       centrenumber: this.state.centrenumber + number, 
       score: this.state.score + 1})
  )

  setGameOver = (number) => this.setState(
    prevState => ({ ...prevState,
      gameover: true,
      centrenumber: this.state.centrenumber + number,
      })
  )

  onSwipeUp(gestureState) {
    this.setState({myText: 'You swiped up!'});
  }

  onSwipeDown(gestureState) {
    this.setState({myText: 'You swiped down!'});
  }

  onSwipeLeft(gestureState) {
    this.setState({myText: 'You swiped left!'});
  }

  onSwipeRight(gestureState) {
    this.setState({myText: 'You swiped right!'});
  }

  refreshnumber() {
    topnumber = Math.floor(Math.random() * 100) + 1
    leftnumber = Math.floor(Math.random() * 100) + 1
    rightnumber = Math.floor(Math.random() * 100) + 1
    bottomnumber = Math.floor(Math.random() * 100) + 1
  }

  onSwipe(gestureName) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        console.log(gestureName);
        if((topnumber + this.state.centrenumber).toString().includes("0")){

          this.setGameOver(topnumber);
        }else{
          this.setCount(topnumber);
        }
        this.refreshnumber();
        break;
      case SWIPE_DOWN:
        console.log(gestureName);
        if((bottomnumber + this.state.centrenumber).toString().includes("0")){

          this.setGameOver(bottomnumber);
        }else{
          this.setCount(bottomnumber);
        }
        this.refreshnumber();
        break;
      case SWIPE_LEFT:
        console.log(gestureName);
        if((leftnumber + this.state.centrenumber).toString().includes("0")){

          this.setGameOver(leftnumber);
        }else{
          this.setCount(leftnumber);
        }
        this.refreshnumber();
        break;
      case SWIPE_RIGHT:
        console.log(gestureName);
        if((rightnumber + this.state.centrenumber).toString().includes("0")){

          this.setGameOver(rightnumber);
        }else{
          this.setCount(rightnumber);
        }
        this.refreshnumber();
        break;
    }
  }

  render() {
    const { centrenumber } = this.state;
    const isLoggedIn = this.state.gameover;
    const config = {
      velocityThreshold: 0.2,
      directionalOffsetThreshold: 80
    };
    let isGameOver;
    if(isLoggedIn){
      isGameOver = <Text style={styles.gameovertext}>Game Over</Text>;
    }

    return (
    <View style={{top:20}}>
      <View style={{marginBottom:10}}>
        <Text style={styles.operatortext}>Operator: {operators.add}</Text>
      </View>

        <View style={styles.topnum}>
            <Text style={styles.centretext}>{topnumber}</Text>
        </View>
    <View style={{ flexDirection:"row"}}>
        <View style={styles.leftnum}>
                <Text style={styles.centretext}>{leftnumber}</Text>
        </View>

        <View style={styles.centre}>
        <GestureRecognizer
            onSwipe={(direction, state) => this.onSwipe(direction, state)}
            onSwipeUp={(state) => this.onSwipeUp(state)}
            onSwipeDown={(state) => this.onSwipeDown(state)}
            onSwipeLeft={(state) => this.onSwipeLeft(state)}
            onSwipeRight={(state) => this.onSwipeRight(state)}
            config={config}
            >
            <Text style={styles.centretext}> {centrenumber}</Text>
        </GestureRecognizer>
        </View>

        <View style={styles.rightnum}>
                <Text style={styles.centretext}>{rightnumber}</Text>
        </View>
    </View>

    <View style={styles.bottomnum}>
            <Text style={styles.centretext}>{bottomnumber}</Text>
    </View>
    <View style={{marginTop:30, marginBottom:50}}>
      <Text style={styles.scoretext}>Score: {this.state.score}</Text>
    </View>

    {isGameOver}


    </View>
    
    );
  }
}

const styles = StyleSheet.create({
    centre:{
        height:100,
        width:100,
        backgroundColor:"#d1cdcd",
        borderRadius:20,
        justifyContent:"center",
        margin:30
    },
    topnum:{
        height:100,
        width:100,
        backgroundColor:"#d1cdcd",
        borderRadius:20,
        justifyContent:"center",
        alignSelf:"center"
    },

    bottomnum:{
        height:100,
        width:100,
        backgroundColor:"#d1cdcd",
        borderRadius:20,
        justifyContent:"center",
        alignSelf:"center"
    },

    leftnum:{
        height:100,
        width:100,
        backgroundColor:"#d1cdcd",
        borderRadius:20,
        justifyContent:"center",
        marginTop:30
    },
    rightnum:{
        height:100,
        width:100,
        backgroundColor:"#d1cdcd",
        borderRadius:20,
        justifyContent:"center",
        marginTop:30
    },
    centretext:{
        color: "#1E1E1E",
        fontSize:30,
        fontFamily:"AvenirNext-Bold",
        textAlign:"center",
    },
    operatortext:{
      color: "#d1cdcd",
      fontSize:23,
      fontFamily:"AvenirNext-Bold",
    },
    scoretext:{
      color: "#d1cdcd",
      fontSize:30,
      fontFamily:"AvenirNext-Bold",
      textAlign:"center",
    },
    gameovertext:{
      color:"red",
      fontSize:30,
      fontFamily:"AvenirNext-Bold",
      textAlign:"center",
    }
    
});
export default CentureSum;