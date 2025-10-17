import BackButton from "@/components/BackButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, radius, spacingX, spacingY } from "@/constants/theme";
import React, { useRef, useState } from "react";
import Input from "@/components/Input";
import * as Icons from "phosphor-react-native";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { verticalScale } from "@/utils/stylings";
import { useRouter } from "expo-router";
import Button from "@/components/Button";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScreenWrapper showPattern={true}>
        <View style={styles.container}>
          <View style={styles.header}>
            <BackButton iconSize={28} />
            <Typo size={17} color={colors.white}>
              Forgot your password?
            </Typo>
          </View>

          <View style={styles.content}>
            <ScrollView
              contentContainerStyle={styles.form}
              showsVerticalScrollIndicator={false}
            >
              <View style={{ gap: spacingY._10, marginBottom: spacingY._15 }}>
                <Typo size={28} fontWeight="600">
                  Welcome Back
                </Typo>
                <Typo color={colors.neutral600}>
                  We are happy to see you again!
                </Typo>
              </View>

              <Input
                placeholder="Enter your email"
                onChangeText={(value: string) => (emailRef.current = value)}
                icon={
                  <Icons.Envelope
                    size={verticalScale(26)}
                    color={colors.neutral600}
                  />
                }
              />

              <Input
                placeholder="Enter your password"
                onChangeText={(value: string) => (passwordRef.current = value)}
                secureTextEntry={true}
                icon={
                  <Icons.Lock
                    size={verticalScale(26)}
                    color={colors.neutral600}
                  />
                }
              />

              <View style={{ marginTop: spacingY._25, gap: spacingY._15 }}>
                <Button loading={isLoading} onPress={handleSubmit}>
                  <Typo size={23} fontWeight="semibold">
                    Login
                  </Typo>
                </Button>
              </View>

              <View style={styles.footer}>
                <Typo size={14} color={colors.neutral600}>
                  Don&apos;t have an account?{" "}
                  <Pressable onPress={() => router.push("/(auth)/register")}>
                    <Typo
                      size={14}
                      color={colors.primary}
                      style={{ textDecorationLine: "none" }}
                    >
                      Sign Up
                    </Typo>
                  </Pressable>
                </Typo>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScreenWrapper>
    </KeyboardAvoidingView>
  );
};

export default Login;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    paddingHorizontal: spacingX._20,
    paddingTop: spacingY._15,
    paddingBottom: spacingY._25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: radius._50,
    borderTopRightRadius: radius._50,
    borderCurve: "continuous",
    paddingHorizontal: spacingX._20,
    paddingTop: spacingY._20,
  },

  form: {
    gap: spacingY._15,
    marginTop: spacingY._20,
  },

  footer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
