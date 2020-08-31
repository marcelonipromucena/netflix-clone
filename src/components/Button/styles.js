import styled from "styled-components";

import { COLORS, SIZES } from "../../constants/theme";

export const Container = styled.a`
  display: inline-block;
  text-align:center;
  transition: all 0.2s ease;
  padding: 7px 17px;
  cursor:pointer;
  border-radius: ${SIZES.inputBorderRadius};
  
  background: ${(props) => (props.backgroundColor ? props.backgroundColor : COLORS.red)};
  color: ${(props) => (props.textColor ? props.textColor : "#fff")};

  &:hover {
    background: ${(props) => (props.backgroundHoverColor ? props.backgroundHoverColor : COLORS.darkred)};
    color: ${(props) => (props.textHoverColor ? props.textHoverColor : "#FFF")};
    transition: all 0.2s ease;
  }
`;
