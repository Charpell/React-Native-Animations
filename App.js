import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1500
    }).start();
  }

  render() {
    const animatedStyles = {
      top: this.state.animation,
      left: this.state.animation
    }

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} >
            <Text>Long text Long text Long text Long text Long text</Text>
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
    position: "absolute",
    left: 0,
    top: 0
  }
});
