import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const RestaurantPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.restaurantPage}>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["#ff5757", "#8c52ff"]}
      >
        <View style={styles.stateLayer}>
          <Text style={[styles.labelText, styles.labelTypo]} />
        </View>
      </LinearGradient>
      <LinearGradient
        style={[styles.button1, styles.buttonLayout]}
        locations={[0, 1]}
        colors={["#ff5757", "#8c52ff"]}
      >
        <View style={styles.stateLayer}>
          <Text style={[styles.labelText1, styles.labelTypo]} />
        </View>
      </LinearGradient>
      <Pressable
        style={[styles.movies, styles.homePosition]}
        onPress={() => navigation.navigate("MoviePage")}
      >
        <Text style={[styles.movies1, styles.movies1Typo]}>Movies</Text>
      </Pressable>
      <Pressable
        style={[styles.moviesProjector1Streamline, styles.streamlineLayout]}
        onPress={() => navigation.navigate("MoviePage")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/moviesprojector1streamlinenova-3.png")}
        />
      </Pressable>
      <LinearGradient
        style={[styles.button2, styles.buttonLayout]}
        locations={[0, 1]}
        colors={["#ff5757", "#8c52ff"]}
      >
        <View style={styles.stateLayer}>
          <Text style={[styles.labelText1, styles.labelTypo]} />
        </View>
      </LinearGradient>
      <Pressable
        style={styles.books}
        onPress={() => navigation.navigate("BookPage")}
      >
        <Text style={[styles.movies1, styles.movies1Typo]}>Books</Text>
      </Pressable>
      <Pressable
        style={[styles.booksStreamlineMicro3, styles.streamlineLayout]}
        onPress={() => navigation.navigate("BookPage")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/booksstreamlinemicro-3.png")}
        />
      </Pressable>
      <LinearGradient
        style={[styles.button3, styles.buttonLayout]}
        locations={[0, 1]}
        colors={["#ff5757", "#8c52ff"]}
      >
        <View style={styles.stateLayer}>
          <Text style={[styles.labelText1, styles.labelTypo]} />
        </View>
      </LinearGradient>
      <Pressable
        style={[styles.home, styles.homePosition]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.movies1, styles.movies1Typo]}>Home</Text>
      </Pressable>
      <Pressable
        style={styles.iconHome}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-home.png")}
        />
      </Pressable>
      <Text style={[styles.restaurantAi, styles.nexpick1FlexBox]}>
        Restaurant AI
      </Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("ExtraPage")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-71.png")}
        />
      </Pressable>
      <Pressable
        style={styles.nexpick}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.nexpick1, styles.nexpick1FlexBox]}>NexPick</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  labelTypo: {
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    textAlign: "left",
    lineHeight: 36,
  },
  buttonLayout: {
    height: 96,
    width: 104,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_11xl,
    position: "absolute",
    overflow: "hidden",
  },
  homePosition: {
    top: 717,
    position: "absolute",
  },
  movies1Typo: {
    fontFamily: FontFamily.lalezarRegular,
    lineHeight: 32,
    color: Color.schemesOnPrimary,
  },
  streamlineLayout: {
    height: 43,
    width: 46,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  nexpick1FlexBox: {
    display: "flex",
    alignItems: "center",
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
    top: 72,
    left: 123,
    width: 147,
    height: 62,
    backgroundColor: "transparent",
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  labelText1: {
    fontSize: FontSize.size_26xl,
    textAlign: "left",
  },
  button1: {
    left: 21,
    top: 709,
    height: 96,
    width: 104,
  },
  movies1: {
    fontSize: FontSize.size_smi,
    width: 76,
    height: 33,
    textAlign: "center",
  },
  movies: {
    left: 36,
  },
  moviesProjector1Streamline: {
    left: 51,
    top: 750,
  },
  button2: {
    top: 706,
    left: 265,
  },
  books: {
    left: 280,
    top: 714,
    position: "absolute",
  },
  booksStreamlineMicro3: {
    left: 296,
    top: 745,
  },
  button3: {
    left: 143,
    top: 709,
    height: 96,
    width: 104,
  },
  home: {
    left: 157,
  },
  icon2: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconHome: {
    left: "44.53%",
    top: "87.68%",
    right: "45.17%",
    bottom: "7.28%",
    width: "10.31%",
    height: "5.05%",
    position: "absolute",
  },
  restaurantAi: {
    top: 157,
    left: 48,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.rammettoOneRegular,
    color: Color.colorMediumorchid,
    width: 291,
    height: 83,
    textAlign: "center",
    lineHeight: 36,
    display: "flex",
    justifyContent: "center",
    position: "absolute",
  },
  wrapper: {
    left: "7.12%",
    top: "6.92%",
    right: "82.7%",
    bottom: "88.38%",
    width: "10.18%",
    height: "4.69%",
    position: "absolute",
  },
  nexpick1: {
    fontSize: FontSize.size_5xl,
    width: 95,
    height: 27,
    fontFamily: FontFamily.lalezarRegular,
    lineHeight: 32,
    color: Color.schemesOnPrimary,
    textAlign: "left",
  },
  nexpick: {
    left: 152,
    top: 91,
    position: "absolute",
  },
  restaurantPage: {
    backgroundColor: Color.colorGray,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default RestaurantPage;
