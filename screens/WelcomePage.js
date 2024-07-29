import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, Padding, FontSize } from "../GlobalStyles";

const WelcomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomePage}>
      <LinearGradient
        style={[styles.button, styles.buttonFlexBox]}
        locations={[0, 1]}
        colors={["#ff5757", "#8c52ff"]}
      >
        <Pressable
          style={styles.stateLayer}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Text style={[styles.labelText, styles.labelTypo]} />
        </Pressable>
      </LinearGradient>
      <Image
        style={styles.logo2Icon}
        contentFit="cover"
        source={require("../assets/logo-2.png")}
      />
      <Image
        style={styles.uncover2Icon}
        contentFit="cover"
        source={require("../assets/uncover-2.png")}
      />
      <LinearGradient
        style={[styles.button1, styles.buttonFlexBox]}
        locations={[0, 1]}
        colors={["#ff5757", "#8c52ff"]}
      >
        <View style={styles.stateLayer}>
          <Text style={[styles.labelText1, styles.labelTypo]} />
        </View>
      </LinearGradient>
      <Text style={[styles.nexpick, styles.nexpickTypo]}>NexPick</Text>
      <Pressable
        style={styles.welcomeToNexpickContainer}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.welcomeToNexpick, styles.nexpickTypo]}>
          Welcome to NexPick
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    backgroundColor: "transparent",
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  labelTypo: {
    color: Color.schemesOnPrimary,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    lineHeight: 36,
    textAlign: "left",
  },
  nexpickTypo: {
    display: "flex",
    fontFamily: FontFamily.lalezarRegular,
    lineHeight: 32,
    color: Color.schemesOnPrimary,
    alignItems: "center",
  },
  labelText: {
    fontSize: 28,
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
    top: 426,
    width: 365,
    height: 108,
    left: 14,
  },
  logo2Icon: {
    top: 127,
    left: -125,
    width: 644,
    height: 287,
    position: "absolute",
  },
  uncover2Icon: {
    top: 585,
    left: 42,
    width: 309,
    height: 145,
    position: "absolute",
  },
  labelText1: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  button1: {
    top: 78,
    left: 123,
    width: 147,
    height: 62,
    overflow: "hidden",
  },
  nexpick: {
    top: 100,
    left: 153,
    fontSize: FontSize.size_5xl,
    width: 95,
    height: 27,
    textAlign: "left",
    position: "absolute",
  },
  welcomeToNexpick: {
    fontSize: FontSize.size_21xl,
    textAlign: "center",
    width: 361,
    height: 69,
    justifyContent: "center",
  },
  welcomeToNexpickContainer: {
    top: 448,
    left: 14,
    position: "absolute",
  },
  welcomePage: {
    backgroundColor: Color.colorGray,
    width: "100%",
    height: 852,
    flex: 1,
  },
});

export default WelcomePage;
