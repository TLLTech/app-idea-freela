import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const InputView = styled.View`
  height: 60px;
  width: 365px;
  background: #ddd;
  align-self: center;
  /* flex: 1; */
  border-radius: 5px;
`;

export const InputComment = styled.TextInput.attrs({
  placeholderTextColor: "#000"
})`
  flex: 1;
  padding: 10px;
`;
