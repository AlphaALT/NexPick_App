import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const ExtraPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.extraPage, styles.iconLayout]}>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["#ff5757", "#8c52ff"]}
      >
        <View style={styles.stateLayer}>
          <Text style={[styles.labelText, styles.labelFlexBox]} />
        </View>
      </LinearGradient>
      <Pressable
        style={styles.flutterStreamlineRounded}
        onPress={() => navigation.navigate("WelcomePage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/flutterstreamlineroundedmaterialsymbols-1.png")}
        />
      </Pressable>
      <LinearGradient
        style={[styles.button1, styles.buttonLayout]}
        locations={[0, 1]}
        colors={["#ff5757", "#8c52ff"]}
      >
        <View style={styles.stateLayer}>
          <Text style={[styles.labelText1, styles.labelFlexBox]}>UPDATES</Text>
        </View>
      </LinearGradient>
      <LinearGradient
        style={[styles.button2, styles.buttonLayout]}
        locations={[0, 1]}
        colors={["#ff5757", "#8c52ff"]}
      >
        <View style={styles.stateLayer}>
          <Text style={[styles.labelText1, styles.labelFlexBox]}>
            CONTACT US
          </Text>
        </View>
      </LinearGradient>
      <LinearGradient
        style={[styles.button3, styles.buttonLayout]}
        locations={[0, 1]}
        colors={["#ff5757", "#8c52ff"]}
      >
        <View style={styles.stateLayer}>
          <Text style={[styles.labelText1, styles.labelFlexBox]}>ABOUT US</Text>
        </View>
      </LinearGradient>
      <Pressable
        style={styles.nexpick}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.nexpick1, styles.labelFlexBox]}>NexPick</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  labelFlexBox: {
    textAlign: "left",
    color: Color.schemesOnPrimary,
  },
  buttonLayout: {
    height: 96,
    width: 259,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_11xl,
    position: "absolute",
    overflow: "hidden",
  },
  labelText: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    lineHeight: 36,
    color: Color.schemesOnPrimary,
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
    left: 127,
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
    height: "100%",
  },
  flutterStreamlineRounded: {
    left: 21,
    top: 49,
    width: 50,
    height: 50,
    position: "absolute",
  },
  labelText1: {
    fontSize: FontSize.size_17xl,
    textDecoration: "underline",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    lineHeight: 36,
    color: Color.schemesOnPrimary,
  },
  button1: {
    top: 255,
    left: 69,
    height: 96,
    width: 259,
  },
  button2: {
    top: 435,
    left: 71,
  },
  button3: {
    top: 616,
    left: 69,
    height: 96,
    width: 259,
  },
  nexpick1: {
    fontSize: FontSize.size_5xl,
    lineHeight: 32,
    fontFamily: FontFamily.lalezarRegular,
    display: "flex",
    width: 95,
    height: 27,
    color: Color.schemesOnPrimary,
    alignItems: "center",
  },
  nexpick: {
    left: 156,
    top: 95,
    position: "absolute",
  },
  extraPage: {
    backgroundColor: Color.colorGray,
    height: 852,
    flex: 1,
    width: "100%",
  },
});

export default ExtraPage;
