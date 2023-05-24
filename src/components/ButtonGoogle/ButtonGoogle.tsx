import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Button, IconeGoogle, Title } from "./ButtonGoogleStyled";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text } from "react-native";
import PngGoogle from '../../assets/google.png'

interface Props extends RectButtonProps {
  title: string
}

const ButtonGoogle: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <GestureHandlerRootView>
      <Button { ...rest }>
        <IconeGoogle source={PngGoogle} resizeMode="contain"/>
        <Title>{title}</Title>
      </Button>
    </GestureHandlerRootView>
  );
};

export default ButtonGoogle;
