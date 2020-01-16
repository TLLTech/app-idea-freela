import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: #5a5aec;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-top: 20px;
  text-align: center;
`;

export const Content = styled.ScrollView`
  align-self: center;
`;

export const ImageProfile = styled.View`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background: #ccc;
  align-self: center;
  margin-top: 30px;
`;

export const ContentInput = styled.View`
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.5);
  height: 50px;
  width: 350px;
  border-radius: 5px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#ccc"
})`
  padding: 10px;
  font-size: 16px;
`;

export const ButtonRegister = styled(RectButton)`
  background: #4676f0;
  border-radius: 5px;
  height: 50px;
  width: 179px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 50px;
`;

export const ButtonRegisterText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
