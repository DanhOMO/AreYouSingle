import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/imageHeart.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>HeartSync</Text>
        <Text style={styles.subtitle}>
          Where Hearts Connect, Love Finds Its Sync.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonApple}>
          <Image source={require("../../assets/apple.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFacebook}>
          <Image
            source={require("../../assets/facebook.png")}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPhone}>
          <Image
            source={require("../../assets/telephone.png")}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Use phone number</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.terms}>
        By signing up you agree to our Terms and Conditions
      </Text>
      <Text style={styles.privacy}>
        See how we use your data in our Privacy Policy
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  logo: {
    width: 300,
    height: 200,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 5,
  },
  buttonContainer: {
    width: "80%",
    gap: 20,
  },
  buttonApple: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 25,
  },
  buttonFacebook: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(56, 154, 229)",
    padding: 10,
    borderRadius: 25,
  },
  buttonPhone: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00bdd5",
    padding: 10,
    borderRadius: 25,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  terms: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  privacy: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default WelcomeScreen;
