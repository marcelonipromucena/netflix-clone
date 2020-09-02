import React from "react";

import {
  HeaderContainer,
  OverlayContainer,
  Navbar,
  NavbarLeft,
  Logo,
  WrapperCenterContent,
  LoginCard,
  SignInTitle,
  InputGroup,
  Label,
  Input,
  InputMessage,
  CheckboxContainer,
  CheckboxInputDummy,
  CheckboxInput,
  CheckboxLabel,
  Row,
  Checkmark,
  NeedHelpLink,
} from "./styles";

import { FiChevronRight, FiX, FiCheck } from "react-icons/fi";

import logo from "../../assets/img/logo.svg";

import Button from "../../components/Button";
import Text from "../../components/Text";
import Footer from "../../components/Footer";
import { SIZES, COLORS } from "../../constants/theme";

const Login = () => {
  return (
    <>
      <HeaderContainer>
        <OverlayContainer>
          <Navbar>
            <NavbarLeft>
              <Logo src={logo} />
            </NavbarLeft>
          </Navbar>

          <WrapperCenterContent>
            <LoginCard>
              <SignInTitle>Sign In</SignInTitle>
              <InputGroup>
                <Input
                  name="email-or-phone"
                  id="email-or-phone"
                  placeholder="Email or phone number"
                  className="dirt"
                />
                <InputMessage>Please enter a valid email or phone number.</InputMessage>
              </InputGroup>
              <InputGroup>
                <Input name="password" id="password" placeholder="Password" className="dirt" />
                <InputMessage>Your password must contain between 4 and 60 characters.</InputMessage>
              </InputGroup>

              <Button width={"100%"} padding={"15px"} margin={"24px 0 12px 0"}>
                Sign In
              </Button>
              <Row>
                <CheckboxContainer>
                  <CheckboxInput type="checkbox" />
                  <FiCheck />
                  <Checkmark />
                  <CheckboxLabel>Remember me?</CheckboxLabel>
                </CheckboxContainer>
                <NeedHelpLink>Need help? </NeedHelpLink>
              </Row>
              <Row>
                <Text color={COLORS.gray8}>
                  New to Netflix?{" "}
                  <Button
                    backgroundColor={"none"}
                    padding={"0"}
                    margin={"30px 0 0 0"}
                    width={"100px"}>
                    Sign up now.
                  </Button>
                </Text>
              </Row>
              <Row>
                <Text color={COLORS.gray8} fontSize={"12"} textAlign={"left"} margin={"15px 0 0 0"}>
                  This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
                  <a href="#">Learn more</a>
                </Text>
              </Row>
            </LoginCard>
          </WrapperCenterContent>
        </OverlayContainer>
      </HeaderContainer>

      <Footer />
    </>
  );
};

export default Login;
