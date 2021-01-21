import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";

import image from "../assets/5EFQB4UZ.jpg";
const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const title = "Greg";
function Below() {
  return (
    <>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.title}>Hello ${title}</Text>
        <View style={styles.scroll}>
          <View style={styles.scrollList}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Text style={styles.scrollText}>Top up</Text>
            </View>
          </View>
          <View style={styles.scrollList}>
            <Text style={styles.scrollText}>Top up</Text>
          </View>
          <View style={styles.scrollList}>
            <Text style={styles.scrollText}>Top up</Text>
          </View>
        </View>

        <View style={styles.blackContainer}>
          <View style={styles.whiteContainer}></View>
        </View>
      </ImageBackground>
    </>
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

  blackContainer: {
    backgroundColor: "black",
    width: windowWidth,
    height: windowHeight / 1.9,
    borderTopRightRadius: 60,
    justifyContent: "flex-end",
    // bottom: -89,
    borderTopLeftRadius: 60,
    borderBottomColor: "grey",
  },

  whiteContainer: {
    width: windowWidth,
    height: windowHeight / 2.25,
    backgroundColor: "white",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },

  scrollList: {
    backgroundColor: "black",
    color: "white",
    width: 85,
    height: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  scroll: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: windowHeight / 3.5,
    // backgroundColor: "red"
  },

  title: {
    paddingTop: 60,
    fontSize: 26,
    paddingLeft: 30,
  },
  scrollText: {
    color: "white",
  },
});

export default Below;
