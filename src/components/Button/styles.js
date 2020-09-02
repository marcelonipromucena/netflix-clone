import styled from "styled-components";
import {Link} from 'react-router-dom';
import { COLORS, SIZES } from "../../constants/theme";

export const Container = styled(Link)`
  display: inline-block;
  text-align:center;
  transition: all 0.2s ease;
  text-decoration:none;
  padding:${(props) => (props.padding ? props.padding : " 7px 17px")};
  cursor:pointer;
  border-radius: ${SIZES.inputBorderRadius};
  width: ${(props) => (props.width ? props.width : "85px")};
  box-sizing: border-box;
  background: ${(props) => (props.backgroundColor ? props.backgroundColor : COLORS.red)};
  color: ${(props) => (props.textColor ? props.textColor : "#fff")};
  margin: ${(props) => (props.margin ? props.margin : "0px")};


  &:hover {
    background: ${(props) => (props.backgroundHoverColor ? props.backgroundHoverColor : COLORS.darkred)};
    color: ${(props) => (props.textHoverColor ? props.textHoverColor : "#FFF")};
    transition: all 0.2s ease;
  }
`;
