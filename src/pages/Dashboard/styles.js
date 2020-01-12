import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #5a5aec;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const ButtonDrawer = styled(RectButton)``;

export const ButtonSearch = styled(RectButton)``;

export const ButtonBurguer = styled(RectButton)``;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

export const Content = styled.View`
  flex: 1;
  /* justify-content: center;
  align-items: center; */
  background: #fff;
  margin: 0 20px;
  border-radius: 10px;
`;

export const ContentListView = styled.View`
  flex-direction: row;
  margin: 20px 20px;
`;

export const ContetnListImage = styled.View`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background: #5eb73e;
`;

export const ContentStart = styled.View`
  flex-direction: row;
`;

export const ContentView = styled.View`
  margin-left: 30px;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const ContentFooter = styled.View`
  flex-direction: row;
`;

export const ContentFooterTextValue = styled.Text`
  font-size: 14px;
  color: #638ac6;
  font-weight: 500;
  margin-right: 10px;
`;

export const ContentFooterReviews = styled.Text`
  font-size: 14px;
  color: #4e70a3;
  font-weight: 500;
`;
