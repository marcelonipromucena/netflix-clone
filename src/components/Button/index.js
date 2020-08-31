import React from "react";
import { Container } from "./styles";

const Button = ({ backgroundColor, textColor, backgroundHoverColor, textHoverColor, children }) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      textColor={textColor}
      backgroundHoverColor={backgroundHoverColor}
      textHoverColor={textHoverColor}>
      {children}
    </Container>
  );
};

export default Button;
