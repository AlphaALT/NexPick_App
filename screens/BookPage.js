import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const BookPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookPage}>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["#ff5757", "#8c52ff"]}
      >
        <View style={styles.stateLayer}>
          <Text style={[styles.labelText, styles.labelTypo]} />
        </View>
      </LinearGradient>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("ExtraPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-71.png")}
        />
      </Pressable>
      <Text style={[styles.bookAi, styles.bookAiFlexBox]}>Book Ai</Text>
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
        style={[styles.restaurants, styles.moviesPosition]}
        onPress={() => navigation.navigate("RestaurantPage")}
      >
        <Text style={[styles.restaurants1, styles.nexpick1Typo]}>
          Restaurants
        </Text>
      </Pressable>
      <Pressable
        style={styles.foodBankStreamlineRounded}
        onPress={() => navigation.navigate("RestaurantPage")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/foodbankstreamlineroundedmaterialsymbols-2.png")}
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
        style={styles.home}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.restaurants1, styles.nexpick1Typo]}>Home</Text>
      </Pressable>
      <Pressable
        style={styles.iconHome}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-home.png")}
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
        style={[styles.movies, styles.moviesPosition]}
        onPress={() => navigation.navigate("MoviePage")}
      >
        <Text style={[styles.restaurants1, styles.nexpick1Typo]}>Movies</Text>
      </Pressable>
      <Pressable
        style={styles.moviesProjector1Streamline}
        onPress={() => navigation.navigate("MoviePage")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/moviesprojector1streamlinenova-31.png")}
        />
      </Pressable>
      <Pressable
        style={styles.nexpick}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.nexpick1, styles.nexpick1Typo]}>NexPick</Text>
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
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  bookAiFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  buttonLayout: {
    height: 96,
    width: 104,
    top: 711,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_11xl,
    position: "absolute",
    overflow: "hidden",
  },
  moviesPosition: {
    top: 719,
    position: "absolute",
  },
  nexpick1Typo: {
    fontFamily: FontFamily.lalezarRegular,
    lineHeight: 32,
    color: Color.schemesOnPrimary,
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
    top: 74,
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
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  wrapper: {
    left: "9.92%",
    top: "6.34%",
    right: "79.9%",
    bottom: "88.97%",
    width: "10.18%",
    height: "4.69%",
    position: "absolute",
  },
  bookAi: {
    top: 151,
    left: 50,
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
  labelText1: {
    fontSize: FontSize.size_26xl,
    textAlign: "left",
  },
  button1: {
    left: 27,
  },
  restaurants1: {
    fontSize: FontSize.size_smi,
    width: 76,
    height: 33,
    textAlign: "center",
  },
  restaurants: {
    left: 41,
  },
  foodBankStreamlineRounded: {
    left: 45,
    top: 739,
    width: 68,
    height: 61,
    position: "absolute",
  },
  button2: {
    left: 145,
  },
  home: {
    left: 158,
    top: 726,
    position: "absolute",
  },
  iconHome: {
    left: "45.04%",
    top: "88.26%",
    right: "44.66%",
    bottom: "6.69%",
    width: "10.31%",
    height: "5.05%",
    position: "absolute",
  },
  button3: {
    left: 263,
  },
  movies: {
    left: 278,
  },
  moviesProjector1Streamline: {
    left: 293,
    top: 752,
    width: 46,
    height: 43,
    position: "absolute",
  },
  nexpick1: {
    fontSize: FontSize.size_5xl,
    width: 95,
    height: 27,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  nexpick: {
    left: 150,
    top: 92,
    position: "absolute",
  },
  bookPage: {
    backgroundColor: Color.colorGray,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default BookPage;
