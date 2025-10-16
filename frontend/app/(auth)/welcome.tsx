import React from "react";
import { StyleSheet, View } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/stylings";
import Animated, { FadeIn } from "react-native-reanimated";
import Button from "@/components/Button";

const Welcome = () => {
  return (
    <ScreenWrapper showPattern={true}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Typo color={colors.white} size={43} fontWeight="bold">
            Welcome
          </Typo>
        </View>

        <Animated.Image
          source={require("../../assets/images/welcome.png")}
          entering={FadeIn.duration(700).springify()}
          style={styles.welcomeImage}
          resizeMode="contain"
        />

        <View>
          <Typo color={colors.white} size={33} fontWeight="800">
            {" "}
            Stay connected
          </Typo>
          <Typo color={colors.white} size={33} fontWeight="800">
            with yout friends
          </Typo>
          <Typo color={colors.white} size={33} fontWeight="800">
            and family
          </Typo>
        </View>

        <Button loading={false}>
          <Typo color={colors.white} size={16} fontWeight="bold">
            Get Started
          </Typo>
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: spacingX._20,
    marginVertical: spacingY._20,
  },
  background: {
    flex: 1,
    backgroundColor: colors.neutral900,
  },
  welcomeImage: {
    height: verticalScale(300),
    width: "100%",
  },
});
