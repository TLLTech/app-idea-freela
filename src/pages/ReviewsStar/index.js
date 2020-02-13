import React, { useState } from "react";
import Icon from "@expo/vector-icons/MaterialIcons";
import { View, Text, ActivityIndicator } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Rating, AirbnbRating } from "react-native-ratings";

import { Container, InputComment, InputView } from "./styles";
import api from "../../services/api";

export default function ReviewsStar({ navigation }) {
  const [star, setStar] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const chaves = navigation.getParam("chaves");

  function ratingCompleted(rating) {
    console.log("Rating is " + rating);
    setStar(rating);
  }

  function handleUpdateDados() {
    try {
      console.log(star);
      console.log(comment);

      const comments = api.database().ref("comments");
      const chave = comments.push().key;

      comments.child(chave).set({
        star,
        comment
      });

      setTimeout(() => {
        setComment("");
        setStar(0);

        navigation.goBack();
      });

      // const users = api.database().ref("comments");
      // const chave = users.push().key;

      // users.child(chave).set({
      //   describe,
      //   star
      //   // setImage
      // });

      // setTimeout(() => {
      //   setDescribe("");
      //   setStar(0);

      //   setLoading(false);
      // }, 3000);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Rating
        type="star"
        showRating
        minValue={10}
        onFinishRating={ratingCompleted}
        ratingCount={5}
        style={{
          paddingVertical: 10,
          margin: 10,
          backgroundColor: "transparent"
        }}
      />

      <InputView>
        <InputComment
          placeholder="Decribe tu experiencia"
          value={comment}
          onChangeText={setComment}
        />
      </InputView>
      {loading ? (
        <ActivityIndicator size={32} color="" />
      ) : (
        <Text onPress={handleUpdateDados}> ENVIAR</Text>
      )}
    </Container>
  );
}

// ReviewsStar.;
ReviewsStar.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          height: 40,
          width: 40,
          backgroundColor: "#ccc",
          borderRadius: 20
        }}
      />
      <View style={{ flexDirection: "column", marginLeft: 10 }}>
        <Text style={{ fontSize: 16, color: "#fff" }}>Profile Name</Text>
        <Text style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
          Valora tu experiencia
        </Text>
      </View>
    </View>
  ),
  headerLeft: (
    <Icon
      name="clear"
      size={30}
      color="#fff"
      style={{ marginLeft: 10 }}
      onPress={() => navigation.navigate("RequestProfile")}
    />
  ),
  headerRight: (
    <RectButton style={{ marginRight: 20 }}>
      <Text style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>
        PUBLICAR
      </Text>
    </RectButton>
  ),
  headerStyle: {
    backgroundColor: "#1a9ae2"
  }
});
