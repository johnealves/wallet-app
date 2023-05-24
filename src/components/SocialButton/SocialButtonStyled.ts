import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from "react-native-responsive-fontsize";
import { Fontisto } from "@expo/vector-icons";

export const Button = styled(RectButton)`
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: ${RFValue(5)}px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 16px;
  margin-left: ${RFValue(10)}px;
  padding: ${RFValue(5)}px;
  
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: ${RFValue(60)}px;
  width: ${RFValue(130)}px;
`

export const FacebookIcon = styled(Fontisto)`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${RFValue(20)}px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
  margin-left: ${RFValue(10)}px;
`