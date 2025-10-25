import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";
import Header from "../components/Header";

const { width } = Dimensions.get("window");

const Home = () => {
  const [index, setIndex] = useState(0);
  const swipeDirection = useRef(new Animated.Value(0)).current;

  const profiles = [
    {
      _id: {
        $oid: "68f5ce17dc99208742f2f11f",
      },
      email: "alice.nguyen@example.com",
      password: "hashed_password_123",
      phone: "0901234567",
      status: true,
      profile: {
        name: "Alice Nguyen",
        dob: "1998-05-12T00:00:00Z",
        gender: "female",
        photos: [require("../../assets/IMG_20231014_225735.jpg")],
        aboutMe: "Yêu thích du lịch và đọc sách.",
      },
      location: {
        type: "Point",
        coordinates: [106.700981, 10.776889],
      },
      detail: {
        height: 160.5,
        interested: ["traveling", "music"],
        education: "University of Economics",
      },
      createdAt: "2025-01-01T10:00:00Z",
      updatedAt: "2025-10-01T10:00:00Z",
    },
    {
      _id: {
        $oid: "68f5ce17dc99208742f2f120",
      },
      email: "minh.tran@example.com",
      password: "hashed_pw_abc",
      phone: "0912345678",
      status: true,
      profile: {
        name: "Minh Tran",
        dob: "1995-09-10T00:00:00Z",
        gender: "male",
        photos: [require("../../assets/IMG_20231014_225735.jpg")],
        aboutMe: "Thích chơi thể thao và nấu ăn.",
      },
      location: {
        type: "Point",
        coordinates: [105.854444, 21.028511],
      },
      detail: {
        height: 175.2,
        interested: ["cooking", "fitness"],
        education: "Hanoi University of Science",
      },
      createdAt: "2025-02-15T14:30:00Z",
      updatedAt: "2025-10-10T09:15:00Z",
    },
    {
      _id: {
        $oid: "68f5ce17dc99208742f2f121",
      },
      email: "thao.le@example.com",
      password: "pw_hash_xyz",
      phone: "0976543210",
      status: false,
      profile: {
        name: "Thao Le",
        dob: "2000-01-22T00:00:00Z",
        gender: "female",
        photos: [require("../../assets/IMG_20231014_225735.jpg")],
        aboutMe: "Sinh viên, thích chụp ảnh và cà phê.",
      },
      location: {
        type: "Point",
        coordinates: [108.202167, 16.047079],
      },
      detail: {
        height: 158,
        interested: ["photography", "coffee"],
        education: "Duy Tan University",
      },
      createdAt: "2025-03-03T08:45:00Z",
      updatedAt: "2025-08-01T13:20:00Z",
    },
    {
      _id: {
        $oid: "68f5ce17dc99208742f2f122",
      },
      email: "quang.pham@example.com",
      password: "hashed_pw_999",
      phone: "0933456789",
      status: true,
      profile: {
        name: "Quang Pham",
        dob: "1992-12-05T00:00:00Z",
        gender: "male",
        photos: [require("../../assets/IMG_20231014_225735.jpg")],
        aboutMe: "Kỹ sư phần mềm, yêu công nghệ.",
      },
      location: {
        type: "Point",
        coordinates: [106.629664, 10.823099],
      },
      detail: {
        height: 178.3,
        interested: ["technology", "gaming"],
        education: "Ho Chi Minh University of Technology",
      },
      createdAt: "2025-04-20T16:00:00Z",
      updatedAt: "2025-09-15T12:00:00Z",
    },
    {
      _id: {
        $oid: "68f5ce17dc99208742f2f123",
      },
      email: "hanh.vo@example.com",
      password: "secure_hash_pw",
      phone: "0981122334",
      status: false,
      profile: {
        name: "Hanh Vo",
        dob: "1999-07-30T00:00:00Z",
        gender: "female",
        photos: [require("../../assets/IMG_20231014_225735.jpg")],
        aboutMe: "Người thích sự sáng tạo và nghệ thuật.",
      },
      location: {
        type: "Point",
        coordinates: [107.584938, 16.463713],
      },
      detail: {
        height: 162.8,
        interested: ["art", "travel"],
        education: "Hue University of Arts",
      },
      createdAt: "2025-05-11T10:25:00Z",
      updatedAt: "2025-09-25T19:40:00Z",
    },
  ];

  return (
    <SafeAreaView style={style.container}>
      <Header />
      <ScrollView>
        <View style={style.progressBarBackground}>
          <View style={style.progressBarFill} />
        </View>
        <View style={style.cardContainer}>
          <Swiper
            cards={profiles}
            cardIndex={index}
            renderCard={(item) => (
              <View style={style.card}>
                <ImageBackground
                  source={item.profile.photos[0]}
                  resizeMode="cover"
                  imageStyle={{ borderRadius: 30 }}
                  style={style.imageBackground}
                >
                  <View style={style.overlay} />
                  <View style={style.profileInfo}>
                    <Text style={style.profileName}>{item.profile.name}</Text>
                  </View>
                </ImageBackground>
                <View
                  style={{
                    backgroundColor: "white",
                    marginVertical: 10,
                    padding: 30,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                  }}
                >
                  <Text
                    style={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      fontWeight: "bold",
                    }}
                  >
                    My bio
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      paddingVertical: 10,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "left",
                        marginHorizontal: 20,
                      }}
                    >
                      {item.profile.aboutMe}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    marginVertical: 10,
                    padding: 30,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                  }}
                >
                  <Text
                    style={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      fontWeight: "bold",
                    }}
                  >
                    Sở thích
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      paddingVertical: 10,
                    }}
                  >
                    {item.detail.interested.map((interest, i) => (
                      <View
                        key={i}
                        style={{
                          borderRadius: 10,
                          shadowColor: "#000",
                          shadowOffset: { width: 0, height: 2 },
                          shadowOpacity: 0.25,
                          shadowRadius: 3.84,
                          // width: "20%",
                          justifyContent: "center",
                          alignContent: "center",
                          marginHorizontal: 10,
                          paddingVertical: 10,
                          backgroundColor: "rgb(243, 243, 243)",
                        }}
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            marginHorizontal: 20,
                          }}
                        >
                          {interest}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    marginVertical: 10,
                    padding: 30,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                  }}
                >
                  <Text
                    style={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      fontWeight: "bold",
                    }}
                  >
                    Giáo dục
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      paddingVertical: 10,
                    }}
                  >
                    <View
                      style={{
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        // width: "20%",
                        justifyContent: "center",
                        alignContent: "center",
                        marginHorizontal: 10,
                        paddingVertical: 10,
                        backgroundColor: "rgb(243, 243, 243)",
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          marginHorizontal: 20,
                        }}
                      >
                        {item.detail.education}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    marginVertical: 10,
                    padding: 30,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                  }}
                >
                  <Text
                    style={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      fontWeight: "bold",
                    }}
                  >
                    Chiều cao
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      paddingVertical: 10,
                    }}
                  >
                    <View
                      style={{
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        // width: "20%",
                        justifyContent: "center",
                        alignContent: "center",
                        marginHorizontal: 10,
                        paddingVertical: 10,
                        backgroundColor: "rgb(243, 243, 243)",
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          marginHorizontal: 20,
                        }}
                      >
                        {item.detail.height}
                      </Text>
                    </View>
                  </View>
                </View>
                <Image
                  style={{
                    width: "100%",
                    height: 400,
                    borderRadius: 30,
                    overflow: "hidden",
                  }}
                  source={item.profile.photos[0]}
                />
              </View>
            )}
            stackSize={2}
            backgroundColor={"transparent"}
            onSwiped={() => swipeDirection.setValue(0)}
            onSwiping={(x) => swipeDirection.setValue(x)}
            onSwipedAll={() => console.log("Hết rồi!!")}
            verticalSwipe={false}
            animateCardOpacity
            onSwipedLeft={() => console.log("DISLIKE")}
            onSwipedRight={() => console.log("LIKE")}
            infinite
            disableBottomSwipe
            disableTopSwipe
            stackSeparation={2}
            swipeAnimationDuration={200}
          />
        </View>
      </ScrollView>
      <Animated.View
        style={[
          style.sideLabel,
          {
            left: 10,
            opacity: swipeDirection.interpolate({
              inputRange: [-150, -50],
              outputRange: [1, 0],
              extrapolate: "clamp",
            }),
          },
        ]}
      >
        <Text style={[style.labelText, { color: "black" }]}>X</Text>
      </Animated.View>
      <Animated.View
        style={[
          style.sideLabel,
          {
            right: 10,
            opacity: swipeDirection.interpolate({
              inputRange: [50, 150],
              outputRange: [0, 1],
              extrapolate: "clamp",
            }),
          },
        ]}
      >
        <Text style={[style.labelText, { color: "black" }]}>✓</Text>
      </Animated.View>
      <Footer />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF4F81",
  },
  progressBarBackground: {
    height: 4,
    backgroundColor: "#e5e7eb",
    width: "100%",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#FF4F81",
    width: "50%",
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 80,
  },
  card: {
    width: width - 40,
    height: 1650,
    backgroundColor: "white",
  },
  imageBackground: {
    width: "100%",
    height: 600,
    borderRadius: 30,
    overflow: "hidden",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  profileInfo: {
    position: "absolute",
    left: 20,
    bottom: 20,
    justifyContent: "flex-start",
  },
  profileName: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  badge: {
    backgroundColor: "#bae6fd",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 6,
  },
  badgeText: {
    color: "#0284c7",
    fontSize: 12,
  },
  jobText: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 13,
    marginTop: 8,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
  },
  sideLabel: {
    position: "absolute",
    top: "45%",
    zIndex: 100,
  },
  labelText: {
    fontSize: 32,
    fontWeight: "bold",
    backgroundColor: "rgb(243, 243, 243)",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 40,
  },
  barContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: 90,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#FF6B9A",
    paddingBottom: 20,
  },
  iconButton: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  iconLabel: {
    color: "#FF6B9A",
    fontSize: 12,
    marginTop: 4,
  },
});

export default Home;
