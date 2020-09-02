import styled from "styled-components";

import { COLORS, SIZES } from "../../constants/theme";
import Text from "../../components/Text";

import bghome from "../../assets/img/bghome.jpg";

export const HeaderContainer = styled.div`
  display: flex;
  /* padding:30px; */
  height: 800px;
  width: 100%;
  background: ${COLORS.black1};
  background-image: url(${bghome});
  background-size: cover;
  border-bottom: 8px solid ${COLORS.gray6};
`;

export const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.8)
  );
`;

export const Logo = styled.img`
  color: ${COLORS.red};
  width: 166px;
  @media(max-width:768px){
    width:75px;
  }
`;

export const Navbar = styled.div`
  margin: 30px 56px;
  height: 90px;


  @media(max-width:768px){
    margin:20px;
    position:relative;

  }
`;

export const NavbarLeft = styled.div`
  float: left;
`;

export const WrapperCenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  text-align: center;

  & > p.h1 {
    width: 600px;
  }
  & > p.h2 {
    margin: 15px 0;
  }
  & > p.h3 {
    margin-bottom: 15px;
  }
`;

export const LoginCard = styled.div`
  background: ${COLORS.black1};
  border-radius: 4px;
  min-height: 600px;
  width: 450px;
  margin-top: 100px;
  padding: 60px 68px 40px 68px;
  box-sizing: border-box;

  @media(max-width:768px){
    width:100%;
    padding:30px 20px;
  }
`;

export const SignInTitle = styled.h1`
  text-align: left;
  color: #fff;
  font-size: ${SIZES.h2};
  font-weight: 700;
  margin-bottom: 28px;
`;

export const InputGroup = styled.div`
  margin-bottom: 16px;
  text-align: left;
`;

export const Input = styled.input`
  font-size: 1em;
  border-radius: ${SIZES.inputBorderRadius};
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background: ${COLORS.gray4};
  border: none;
  padding-left: 20px;
  color: #fff;
  transition: all 0.2s;
  touch-action: manipulation;
  transition: all 0.2s ease;

  &:focus {
    background: ${COLORS.gray7};
    transition: all 0.2s ease;
  }

  &.dirt {
    border-bottom: 2px solid #ef6c00;
  }
`;

export const InputMessage = styled.p`
  color: #ef6c00;
  font-size: 0.8rem;
`;

export const CheckboxContainer = styled.label`
  display: flex;
  position: relative;

  width: 50%;
  & > svg {
    display: none;
    color: #000;
    position: absolute;
  }
`;

export const CheckboxInput = styled.input`
  position: relative;
  z-index: -9999;

  &:checked + svg {
    position: absolute;
    display: block;
    cursor: pointer;
    z-index: 1000;
  }
`;

export const Checkmark = styled.span`
  position: absolute;
  left: 0;
  width: 17px;
  cursor: pointer;
  height: 17px;
  border-radius: 2px;
  background: ${COLORS.gray8};
`;

export const CheckboxLabel = styled.label`
  color: ${COLORS.gray5};
  font-size: 0.8rem;
  margin-left: 10px;
`;

export const Row = styled.div`
  display: flex;
`;

export const NeedHelpLink = styled.div`
  color: ${COLORS.gray5};
  font-size:0.8rem;
  width:50%;
  text-align:right;
`;
