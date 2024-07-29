import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage}>
      <View style={[styles.frame, styles.frameLayout]}>
        <View style={[styles.frame1, styles.frameLayout]}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("ExtraPage")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/group-7.png")}
            />
          </Pressable>
          <View style={styles.frame2}>
            <View style={[styles.frame3, styles.frame3Layout]}>
              <LinearGradient
                style={[styles.button, styles.buttonFlexBox]}
                locations={[0, 1]}
                colors={["#ff5757", "#8c52ff"]}
              >
                <View style={styles.stateLayer}>
                  <Text style={[styles.labelText, styles.labelTypo]} />
                </View>
              </LinearGradient>
              <Pressable
                style={styles.nexpick}
                onPress={() => navigation.navigate("WelcomePage")}
              >
                <Text style={[styles.nexpick1, styles.homeFlexBox]}>
                  NexPick
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frame4}>
        <Text style={[styles.home, styles.homePosition]}>Home</Text>
      </View>
      <LinearGradient
        style={[styles.button1, styles.buttonLayout1]}
        locations={[0, 1]}
        colors={["#ff5757", "#8c52ff"]}
      >
        <View style={styles.stateLayer}>
          <Text style={[styles.labelText1, styles.labelTypo]} />
        </View>
      </LinearGradient>
      <View style={styles.frame5}>
        <Pressable
          style={styles.homePosition}
          onPress={() => navigation.navigate("BookPage")}
        >
          <Text style={[styles.books1, styles.books1Typo]}>Books</Text>
        </Pressable>
      </View>
      <View style={styles.frame6}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Pressable
          style={styles.restaurants}
          onPress={() => navigation.navigate("RestaurantPage")}
        >
          <Text style={[styles.books1, styles.books1Typo]}>Restaurants</Text>
        </Pressable>
        <Pressable
          style={styles.movies}
          onPress={() => navigation.navigate("MoviePage")}
        >
          <Text style={[styles.books1, styles.books1Typo]}>Movies</Text>
        </Pressable>
        <View style={[styles.buttonParent, styles.buttonParentPosition]}>
          <LinearGradient
            style={[styles.button2, styles.buttonLayout1]}
            locations={[0, 1]}
            colors={["#ff5757", "#8c52ff"]}
          >
            <View style={styles.stateLayer}>
              <Text style={[styles.labelText1, styles.labelTypo]} />
            </View>
          </LinearGradient>
          <Pressable
            style={[
              styles.moviesProjector1Streamline,
              styles.buttonParentPosition,
            ]}
            onPress={() => navigation.navigate("MoviePage")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/moviesprojector1streamlinenova-1.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.buttonGroup, styles.buttonLayout]}>
          <Image
            style={[styles.buttonIcon, styles.buttonLayout]}
            contentFit="cover"
            source={require("../assets/button.png")}
          />
          <Pressable
            style={styles.booksStreamlineMicro1}
            onPress={() => navigation.navigate("BookPage")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/booksstreamlinemicro-1.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 78,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frame3Layout: {
    height: 62,
    width: 147,
    left: 0,
  },
  buttonFlexBox: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_11xl,
    position: "absolute",
    overflow: "hidden",
  },
  labelTypo: {
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    textAlign: "left",
    lineHeight: 36,
  },
  homeFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  homePosition: {
    left: 1,
    top: 0,
    position: "absolute",
  },
  buttonLayout1: {
    height: 138,
    width: 145,
  },
  books1Typo: {
    fontFamily: FontFamily.lalezarRegular,
    lineHeight: 32,
    fontSize: FontSize.size_5xl,
    color: Color.schemesOnPrimary,
  },
  buttonParentPosition: {
    top: 28,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  buttonLayout: {
    height: 145,
    width: 138,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "0%",
    top: "0%",
    right: "83.47%",
    bottom: "48.72%",
    width: "16.53%",
    height: "51.28%",
    position: "absolute",
  },
  labelText: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  stateLayer: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    height: 62,
    width: 147,
    left: 0,
    top: 0,
  },
  nexpick1: {
    width: 95,
    height: 27,
    fontFamily: FontFamily.lalezarRegular,
    lineHeight: 32,
    fontSize: FontSize.size_5xl,
    color: Color.schemesOnPrimary,
    textAlign: "left",
  },
  nexpick: {
    left: 26,
    top: 20,
    position: "absolute",
  },
  frame3: {
    top: 16,
    position: "absolute",
    overflow: "hidden",
  },
  frame2: {
    left: 95,
    width: 147,
    top: 0,
    height: 78,
    position: "absolute",
    overflow: "hidden",
  },
  frame1: {
    width: 242,
    left: 0,
    top: 0,
  },
  frame: {
    top: 61,
    left: 34,
    width: 325,
  },
  home: {
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.rammettoOneRegular,
    color: Color.colorMediumorchid,
    width: 266,
    textAlign: "center",
    height: 83,
    display: "flex",
    alignItems: "center",
    lineHeight: 36,
    left: 1,
    justifyContent: "center",
  },
  frame4: {
    top: 164,
    left: 63,
    width: 267,
    height: 83,
    position: "absolute",
    overflow: "hidden",
  },
  labelText1: {
    fontSize: FontSize.size_26xl,
    textAlign: "left",
  },
  button1: {
    top: 310,
    left: 200,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_11xl,
    position: "absolute",
    overflow: "hidden",
  },
  books1: {
    width: 122,
    height: 49,
    textAlign: "center",
  },
  frame5: {
    top: 662,
    left: 135,
    width: 123,
    height: 49,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "21.84%",
    width: "27.25%",
    top: "13.17%",
    right: "11.28%",
    bottom: "64.99%",
    left: "61.48%",
    position: "absolute",
  },
  restaurants: {
    left: 168,
    top: 173,
    position: "absolute",
  },
  movies: {
    top: 176,
    left: 0,
    position: "absolute",
  },
  button2: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_11xl,
    position: "absolute",
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  icon1: {
    overflow: "hidden",
  },
  moviesProjector1Streamline: {
    left: 21,
    width: 100,
    height: 88,
  },
  buttonParent: {
    height: 138,
    width: 145,
    left: 0,
  },
  buttonIcon: {
    borderRadius: Border.br_11xl,
    width: 138,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  booksStreamlineMicro1: {
    left: 17,
    top: 24,
    width: 104,
    height: 100,
    position: "absolute",
  },
  buttonGroup: {
    top: 222,
    left: 84,
  },
  frame6: {
    top: 282,
    left: 44,
    width: 305,
    height: 419,
    position: "absolute",
    overflow: "hidden",
  },
  homePage: {
    backgroundColor: Color.colorGray,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default HomePage;
