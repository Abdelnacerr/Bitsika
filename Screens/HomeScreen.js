import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";

import image from "../assets/5EFQB4UZ.jpg";
// const buttonList = [
//   { id: 1, title: "Pay Out" },
//   { id: 2, title: "Top Up" },
//   { id: 3, title: "Deposit" },
// ];

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const title = "Greg";
function HomeScreen() {
  const [cards, setcards] = useState([
    { src: require("../assets/visa.jpg"), id: "1" },
    { src: require("../assets/visa.jpg"), id: "2" },
  ]);
  const [buttonList, setbuttonList] = useState([
    { id: 1, title: "Pay Out" },
    { id: 2, title: "Top Up" },
    { id: 3, title: "Deposit" },
  ]);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <Text style={styles.title}>Hello ${title}</Text>
      <FlatList
        horizontal={true}
        bounces={true}
        showsHorizontalScrollIndicator={false}
        data={cards}
        renderItem={({ item }) => (
          <Image
            source={item.src} // Use item to set the image source
            style={{
              width: 280,
              height: 180,
              borderWidth: 2,
              resizeMode: "cover",
              left: 26,
              margin: 8,
              borderRadius: 28,
            }}
          />
        )}
      />
      <FlatList
        idExtractor={(item) => item.id}
        horizontal={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        data={buttonList}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.scrollList}>
              <Text style={styles.textStyle}>{item.title} </Text>
              <Ionicons name="add-circle-outline" size={24} color="white" />
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.blackContainer}>
        <View style={styles.whiteContainer}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    width: windowWidth,
    height: windowHeight,
    // justifyContent: 'flex-end',
  },
  title: {
    paddingTop: 45,
    fontSize: 26,
    paddingLeft: 30,
  },

  scrollList: {
    backgroundColor: "black",
    margin: 18,
    color: "white",
    width: 105,
    height: 45,
    marginTop: 100,
    borderTopLeftRadius: 14,
    borderBottomRightRadius: 14,
    borderTopRightRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  blackContainer: {
    backgroundColor: "black",
    width: windowWidth,
    height: windowHeight,
    top: 20,
    borderTopRightRadius: 60,
    justifyContent: "flex-end",
    borderTopLeftRadius: 60,
    borderBottomColor: "grey",
  },

  whiteContainer: {
    width: windowWidth,
    height: windowHeight * 0.92,
    backgroundColor: "white",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    justifyContent: "flex-end",
  },

  textStyle: {
    color: "white",
  },
});

export default HomeScreen;
