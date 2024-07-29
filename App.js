const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import WelcomePage from "./screens/WelcomePage";
import HomePage from "./screens/HomePage";
import ExtraPage from "./screens/ExtraPage";
import RestaurantPage from "./screens/RestaurantPage";
import MoviePage from "./screens/MoviePage";
import BookPage from "./screens/BookPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Lalezar-Regular": require("./assets/fonts/Lalezar-Regular.ttf"),
    "RammettoOne-Regular": require("./assets/fonts/RammettoOne-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="WelcomePage"
              component={WelcomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExtraPage"
              component={ExtraPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RestaurantPage"
              component={RestaurantPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MoviePage"
              component={MoviePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookPage"
              component={BookPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <WelcomePage />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
