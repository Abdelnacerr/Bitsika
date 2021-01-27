import React, { useState } from "react";
import { Animated, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function bankcards() {
  const [cards, setcards] = useState([
    { src: require("../assets/visa.jpg"), id: "1" },
    { src: require("../assets/visa.jpg"), id: "2" },
    { src: require("../assets/visa.jpg"), id: "3" },
    { src: require("../assets/visa.jpg"), id: "4" },
  ]);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  console.log(scrollX);
  return (
    <Animated.FlatList
      horizontal={true}
      bounces={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 8,
      }}
      acelerationRate="fast"
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
      data={cards}
      renderItem={({ item, index }) => {
        const width = 280;
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
        });
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.7, 1, 0.7],
        });
        return (
          <TouchableOpacity>
            <Animated.Image
              source={item.src} // Use item to set the image source
              style={[styles.image, { transform: [{ scale }] }]}
            />
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 280,
    height: 180,
    borderWidth: 2,
    resizeMode: "cover",
    borderRadius: 28,
  },
});
