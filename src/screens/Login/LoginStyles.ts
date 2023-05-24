import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "@src/styles/theme";

export const Container = styled.View`
  padding: ${RFValue(10)}px
`
export const ContentHeader = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(20)}px
`

export const ContentBody = styled.View``

export const ContentFooter = styled.View``

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
  font-size: ${RFValue(25)}px;
  margin-top: ${RFValue(40)}px;
  text-align: center;
`

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
  font-size: ${RFValue(15)}px;
  margin-top: ${RFValue(60)}px;
  margin-bottom: ${RFValue(10)}px;
`

export const ViewButton = styled.View`
  flex-direction: row;
`