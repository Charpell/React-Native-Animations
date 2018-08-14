import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 360,
      duration: 1500
    }).start();
  }

  render() {
    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"],
      // outputRange: ["0deg", "180deg"] Spin half
    })


    const animatedStyles = {
      transform: [
        {
          rotate: rotateInterpolate,
          // rotateX: rotateInterpolate,
          // rotateY: rotateInterpolate
        }
      ]
    }

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} >
            <Animated.Text>Hello Rotate</Animated.Text>
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
    width: 150,
    height: 150,
    backgroundColor: "tomato",
  }
});
