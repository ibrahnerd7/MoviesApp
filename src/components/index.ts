import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #252634;
  flex: 1;
`;

export const Header = styled.View`
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 16px;
  flex-direction: row;
`;

export const Heading = styled.Text`
  font-size: 32px;
  color: #ffffff;
  font-weight: 600;
`;

export const MoviesView = styled.View`
  padding-start: 24px;
  padding-end: 24px;
`;

export const MovieCard = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #1b1c2a;
  height: 168px;
  margin-top: 16px;
  border-radius: 16px;
`;

export const CardImage = styled.Image`
  width: 118px;
  height: 168px;
  border-radius: 16px;
`;

export const CardContent = styled.View`
  margin-top: 16px;
  margin-start: 16px;
  margin-end: 16px;
  display: flex;
`;

export const CardTitle = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  width: 162px;
`;

export const CardText = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: #cdced1;
  margin-top: 6px;
`;

export const Footer = styled.View`
  padding-top: 160px;
`;

export const RateBar = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #252634;
  margin-top: 16px;
  height: 24px;
  border-radius: 4px;
`;

export const RateStar = styled.View`
  margin: 6px;
`;

export const SearchButton = styled.TouchableOpacity`
  margin-top: 12px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 12px;
  margin-start: 20px;
`;

export const RateText = styled.Text`
  color: #cdced1;
  font-weight: 400;
  font-size: 12px;
  margin-top: 4px;
  margin-start: 8px;
`;

export const MovieDetailOverlay = styled.View`
  background-color: #000000c0;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const MovieDetailSubText = styled.Text`
  margin-top: 8px;
  font-size: 12px;
  color: #cdced1;
  font-weight: 400;
`;

export const MovieDetailText = styled.Text`
  margin-top: 16px;
  font-size: 12px;
  color: #ffffff;
  font-size: 14px;
`;

export const MovieDetailContent = styled.View`
  margin-top: 116px;
  margin-start: 24px;
  margin-end: 16px;
`;

export const SubHeading = styled.Text`
  margin-top: 48px;
  font-size: 24px;
  color: #ffffff;
  margin-end: 16px;
`;
