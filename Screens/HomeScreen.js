import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import AddButton from "./AddButton";

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
import { ScrollView } from "react-native-gesture-handler";
// const buttonList = [
//   { id: 1, title: "Pay Out" },
//   { id: 2, title: "Top Up" },
//   { id: 3, title: "Deposit" },
// ];

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const title = "Greg";

function HomeScreen({ navigation }) {
  const [cards, setcards] = useState([
    { src: require("../assets/visa.jpg"), id: "1" },
    { src: require("../assets/visa.jpg"), id: "2" },
  ]);
  const [buttonList, setbuttonList] = useState([
    { id: "1", title: "Pay Out" },
    { id: "2", title: "Top Up" },
    { id: "3", title: "Deposit" },
  ]);
  const onPressHandler = () => {
    navigation.navigate("Settings");
    // navigation.push("Settings");
  };
  return (
    <ImageBackground source={image} style={styles.image}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
        bounces={true}
      >
        <Text style={styles.title}>Hello ${title}</Text>

        <FlatList
          horizontal={true}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          data={cards}
          renderItem={({ item }) => (
            <TouchableOpacity>
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
            </TouchableOpacity>
          )}
        />

        <FlatList
          idExtractor={(item) => item.id}
          horizontal={true}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          data={buttonList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
              <View style={styles.scrollList}>
                <Text style={styles.textStyle}>{item.title} </Text>
                <Ionicons name="add-circle-outline" size={24} color="white" />
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <AddButton />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  title: {
    fontSize: 26,
    paddingLeft: 30,
    marginTop: 30,
  },

  scrollList: {
    backgroundColor: "black",
    margin: 18,
    color: "white",
    width: 105,
    height: 45,
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
    height: windowHeight / 1.65,
    borderTopRightRadius: 60,
    justifyContent: "flex-end",
    borderTopLeftRadius: 60,
    borderBottomColor: "grey",
  },

  whiteContainer: {
    width: windowWidth,
    alignItems: "center",
    justifyContent: "flex-end",
    height: 100,
    alignSelf: "flex-end",
    bottom: 3,
    backgroundColor: "white",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // bottom: 0,
    // backgroundColor: 'white'
  },
  textStyle: {
    color: "white",
  },
});

export default HomeScreen;
