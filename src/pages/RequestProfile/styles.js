import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #5a5aec;
`;

export const Content = styled.View`
  flex: 1;
  background: rgba(255, 255, 255, 0.5);
  margin: 5px 20px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

export const ContetnListImage = styled.View`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background: #5eb73e;
  align-self: center;
  margin-top: 30px;
`;

export const StarView = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-self: center;
`;

export const ContentFooter = styled.View`
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-evenly;
`;

export const ValueNote = styled.Text`
  font-size: 14px;
  color: #2d4467;
  font-weight: 500;
  margin-right: 10px;
`;

export const ReviewsText = styled.Text`
  font-size: 14px;
  color: #2b4a78;
  font-weight: 500;
`;

export const ListProfile = styled.View`
  flex-direction: row;
  margin-left: 10px;
  margin-top: 20px;
`;

export const ListProfileImage = styled.View`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  background: #ccc;
  margin: 10px;
`;

export const ListProfileStar = styled.View`
  flex-direction: row;
  align-self: center;
`;

export const ListProfileView = styled.View`
  margin-left: 10px;
`;

export const ListProfileName = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const ListProfileComent = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;
