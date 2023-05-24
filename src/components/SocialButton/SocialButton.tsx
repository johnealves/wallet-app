import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Button, FacebookIcon, Title } from "./SocialButtonStyled";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

interface Props extends RectButtonProps {
  title: string
  iconName: React.ComponentProps<typeof Fontisto>["name"]
}

const SocialButton: React.FC<Props> = ({ title, iconName, ...rest }) => {
  return (
    <GestureHandlerRootView>
      <Button { ...rest }>
        <FacebookIcon name={iconName} />
        <Title>{title}</Title>
      </Button>
    </GestureHandlerRootView>
  );
};

export default SocialButton;
