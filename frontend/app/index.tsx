import { View, StyleSheet, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@/constants/theme";
import Animated, { FadeIn } from "react-native-reanimated";
import { useRouter } from "expo-router";

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/(auth)/welcome");
    }, 1500);
  }, [router]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.neutral900}
      />
      <Animated.Image
        source={require("@/assets/images/splashImage.png")}
        entering={FadeIn.duration(1000).delay(1000)}
        style={styles.image}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  image: {
    aspectRatio: 1,
    height: "23%",
  },
});
