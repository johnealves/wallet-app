import React from "react";
import { Button, SafeAreaView, Text } from "react-native";

import {
  Container,
  ContentHeader,
  ContentBody,
  ContentFooter,
  Title,
  Description,
  ViewButton,
} from "./LoginStyles";
import ButtonGoogle from "../../components/ButtonGoogle/ButtonGoogle";
import Socialbutton from "../../components/SocialButton/SocialButton";
import Input from "../../components/Input/Input";

const Login: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Seja bem vindo(a) {"\n"} ao App carteira </Title>
          <Description>Entrar com</Description>
          <ViewButton>
            <ButtonGoogle title="Google"/>
            <Socialbutton title="Facebook" iconName="facebook"/>
          </ViewButton>
        </ContentHeader>

      <ContentBody>
        <Input name="email" iconName="mail"/>
      </ContentBody>

      <ContentFooter></ContentFooter>
      </Container>
    </SafeAreaView>
  );
};

export default Login;
