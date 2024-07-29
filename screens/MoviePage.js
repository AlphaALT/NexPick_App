import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const MoviePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.moviePage}>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["#ff5757", "#8c52ff"]}
      >
        <View style={styles.stateLayer}>
          <Text style={[styles.labelText, styles.labelTypo]} />
        </View>
      </LinearGradient>
      <Text style={[styles.movieAi, styles.movieAiFlexBox]}>Movie AI</Text>
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
        style={[styles.restaurants, styles.booksPosition]}
        onPress={() => navigation.navigate("ExtraPage")}
      >
        <Text style={[styles.restaurants1, styles.nexpick1Typo]}>
          Restaurants
        </Text>
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
        style={[styles.books, styles.booksPosition]}
        onPress={() => navigation.navigate("BookPage")}
      >
        <Text style={[styles.restaurants1, styles.nexpick1Typo]}>Books</Text>
      </Pressable>
      <Pressable
        style={styles.foodBankStreamlineRounded}
        onPress={() => navigation.navigate("ExtraPage")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/foodbankstreamlineroundedmaterialsymbols-3.png")}
        />
      </Pressable>
      <Pressable
        style={styles.booksStreamlineMicro3}
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
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-home.png")}
        />
      </Pressable>
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
  movieAiFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  buttonLayout: {
    height: 96,
    width: 104,
    top: 709,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_11xl,
    position: "absolute",
    overflow: "hidden",
  },
  booksPosition: {
    top: 717,
    position: "absolute",
  },
  nexpick1Typo: {
    fontFamily: FontFamily.lalezarRegular,
    lineHeight: 32,
    color: Color.schemesOnPrimary,
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
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
    top: 71,
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
  movieAi: {
    top: 151,
    left: 51,
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
    left: 25,
  },
  restaurants1: {
    fontSize: FontSize.size_smi,
    width: 76,
    height: 33,
    textAlign: "center",
  },
  restaurants: {
    left: 39,
  },
  button2: {
    left: 265,
  },
  books: {
    left: 280,
  },
  foodBankStreamlineRounded: {
    left: 43,
    top: 737,
    width: 68,
    height: 61,
    position: "absolute",
  },
  booksStreamlineMicro3: {
    left: 296,
    top: 748,
    width: 46,
    height: 43,
    position: "absolute",
  },
  button3: {
    left: 143,
  },
  home: {
    left: 156,
    top: 724,
    position: "absolute",
  },
  icon2: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconHome: {
    left: "44.53%",
    top: "88.03%",
    right: "45.17%",
    bottom: "6.92%",
    width: "10.31%",
    height: "5.05%",
    position: "absolute",
  },
  wrapper: {
    left: "9.41%",
    top: "6.46%",
    right: "80.41%",
    bottom: "88.85%",
    width: "10.18%",
    height: "4.69%",
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
    left: 154,
    top: 92,
    position: "absolute",
  },
  moviePage: {
    backgroundColor: Color.colorGray,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default MoviePage;
