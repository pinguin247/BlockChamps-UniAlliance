
import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

var topnumber = Math.floor(Math.random() * 100) + 1;
var leftnumber = Math.floor(Math.random() * 100) + 1;
var rightnumber = Math.floor(Math.random() * 100) + 1;
var bottomnumber = Math.floor(Math.random() * 100) + 1;


class CentureSum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      centrenumber: 1,
      topnumber: Math.floor(Math.random() * 100) + 1
    };
  }

  setCount = () => this.setState(
    prevState => ({ ...prevState, count: this.state.centrenumber + 1 })
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

  onSwipe(gestureName, gestureState, centrenumber) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    this.setState({centrenumber: centrenumber});
    switch (gestureName) {
      case SWIPE_UP:
        console.log(gestureName);
        this.setCount();
        this.refreshnumber();
        break;
      case SWIPE_DOWN:
        console.log(gestureName);
        this.refreshnumber();
        break;
      case SWIPE_LEFT:
    //     console.log(gestureName);
    //     this.refreshnumber();
    //     break;
    //   case SWIPE_RIGHT:
    //     console.log(gestureName);
    //     this.refreshnumber();
    //     break;
    }
  }

  render() {
    const { centrenumber } = this.state;
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
    <View>
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
    }
});
export default CentureSum;