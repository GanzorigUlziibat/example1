import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, Modal } from "react-native";
import Swiper from "react-native-swipe-image";

export default function App() {
  const [number, setNumber] = useState(100);
  const [boolean, setBoolean] = useState(true);
  const [images, setImages] = useState([
    {
      url: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "shakira",
    },
    {
      url: "https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg?cs=srgb&dl=adorable-animal-cat-9413.jpg&fm=jpg",
      name: "cat",
    },
    {
      url: "https://i.pinimg.com/236x/c6/6b/11/c66b111bf4df809e87a1208f75d2788b.jpg",
      name: "baby",
    },
  ]);

  const bottom = () => {
    alert("Swipe Bottom");
  };

  const top = () => {
    alert("Swipe Top");
  };
  return (
    <View style={{ flex: 1 }}>
      <Swiper
        images={images}
        swipeBottom={(e) => bottom(e)}
        swipeTop={(e) => top(e)}
        imageHeight={number}
        textSize={number}
        textBold={boolean}
        textColor={String}
        textUnderline={boolean}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
