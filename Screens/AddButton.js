import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

export default class AddText extends Component {
  animation = new Animated.Value(0);

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.animation, {
      toValue,
      friction: 5,
      useNativeDriver: false,
    }).start();
    this.open = !this.open;
  };

  render() {
    const pinStyle = {
      transform: [
        {
          scale: this.animation,
        },
        {
          translateX: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [-0, -90],
          }),
        },
      ],
    };
    const thumbStyle = {
      transform: [
        {
          scale: this.animation,
        },
        {
          translateX: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [-0, 90],
          }),
        },
      ],
    };
    const homeStyle = {
      transform: [
        {
          scale: this.animation,
        },
        {
          translateX: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [-0, -45],
          }),
        },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [-20, -70],
          }),
        },
      ],
    };
    const QQStyle = {
      transform: [
        {
          scale: this.animation,
        },
        {
          translateX: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 45],
          }),
        },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [-20, -70],
          }),
        },
      ],
    };

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"],
          }),
        },
      ],
    };
    return (
      <View style={[StyleSheet.container, this.props.style]}>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.secondary, pinStyle]}>
            <Ionicons name="person-sharp" size={20} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.secondary, homeStyle]}>
            <MaterialCommunityIcons
              name="picture-in-picture-top-right"
              size={20}
              color="white"
            />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.secondary, thumbStyle]}>
            <MaterialIcons name="people-alt" size={20} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.secondary, QQStyle]}>
            <Entypo name="home" size={20} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu, rotation]}>
            <AntDesign name="plus" size={24} color="black" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
  },
  button: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "#F02A4B",
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 },
  },
  menu: {
    backgroundColor: "white",
  },
  secondary: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: "black",
  },
});
