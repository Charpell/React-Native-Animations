import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, ScrollView, PanResponder } from 'react-native';

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(1),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      // toValue: 3,
      toValue: 2,
      duration: 1500,
    }).start(() => {
      Animated.timing(this.state.animation, {
        // toValue: 0,
        toValue: 1,
        duration: 300,
      }).start();

      // this.state.animation.setValue(5);
    });
  };

  render() {
    //extend: Default
    //clamp: Whatever the end values we've defined are the values they will stay at, never go beyond
    //identity: Takes on the value of the Animated.Value that you're passing in and ignores inputRange/outputRange

    const scaleInterpolate = this.state.animation.interpolate({
      inputRange: [1, 2],
      outputRange: [1, 2],
      // extrapolate: "identity",
      // extrapolate: "clamp",
      // extrapolateLeft: "clamp",
      // extrapolateRight: "clamp"
    });

    const animatedStyles = {
      transform: [{ scale: scaleInterpolate }],
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
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
    width: 150,
    height: 150,
    backgroundColor: "tomato",
  }
});
