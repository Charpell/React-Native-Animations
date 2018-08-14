import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start();
  }

  render() {
    const widthInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["30%", "50%"], // Grow from 30% which is the starting point, 0 to 50% of 1 is half
    })

    const heightInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["20%", "30%"], // Grow from 20% from th starting point to 30% of 1 
    })

    const animatedStyles = {
      width: widthInterpolate,
      height: heightInterpolate
    }

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} >
            
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    // width: "20%",
    // height: "20%",
    backgroundColor: "tomato",
  }
});
