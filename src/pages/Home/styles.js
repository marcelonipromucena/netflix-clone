import styled from "styled-components";

import { COLORS, SIZES } from "../../constants/theme";
import Text from "../../components/Text";

import bghome from "../../assets/img/bghome.jpg";

export const HeaderContainer = styled.div`
  display: flex;
  /* padding:30px; */
  height: 700px;
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
  width: 133px;
`;

export const Navbar = styled.div`
  margin: 30px 56px;
  height: 90px;
`;

export const NavbarLeft = styled.div`
  float: left;
`;
export const NavbarRight = styled.div`
  float: right;
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
    @media (max-width: 768px) {
      width: 90%;
      font-size: 30px;
    }
  }
  & > p.h2 {
    margin: 15px 0;
  }
  & > p.h3 {
    margin-bottom: 15px;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
`;

export const WrapperEmailInput = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const EmailInput = styled.input`
  width: 400px;
  padding: 0 20px;
  font-size: 16px;
  height: 60px;
  border: none;

  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const GetStartedButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  border: none;
  background: ${COLORS.red};
  color: #fff;
  height: 60px;
  font-size: 26px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${COLORS.darkred};
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

export const Section = styled.div`
  height: 475px;
  background: ${COLORS.black1};
  display: flex;
  border-bottom: 8px solid ${COLORS.gray6};

  @media (max-width: 768px) {
    box-sizing: border-box;
    flex-direction: column;
    text-align: center;
    height: 100vh;
  }
`;

export const WrapperSessionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 550px;
  padding: 0 30px 0 60px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  & > p.h1 {
    width: 600px;
    @media (max-width: 768px) {
      width: 100%;
      font-size: 30px;
    }
  }
  & > p.h2 {
    margin: 15px 0;
    padding:5px;
  }
`;

export const WrapperSessionImage = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;

  & > img {
    width: 500px;
    height: 350px;

    @media (max-width: 768px) {
      width: 90%;
      height: auto;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
`;
export const FAQSection = styled.div`
  background: ${COLORS.black1};
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 45px;

  & > p.h1 {
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const DropdownTitle = styled.div`
  color: #fff;
  font-size: ${SIZES.h2}px;
  background: ${COLORS.gray3};
  padding: 10px;
  width: 60%;
  margin: 5px 0;

  & + div {
  }

  & > svg {
    float: right;
    font-size: 2rem;
    transform: translateY(-50%) rotate(-45deg);
    margin: 20px 15px 0 0;
    outline: none;
  }
  & > svg:focus {
    transform: translateY(-50%) rotate(90deg);
  }


  @media(max-width:768px){
      width:100%;
      font-size:20px;
    }
    
  & > svg:focus + .tab-1,
  & > svg:focus + .tab-2,
  & > svg:focus + .tab-3,
  & > svg:focus + .tab-4,
  & > svg:focus + .tab-5,
  & > svg:focus + .tab-6 {
    display: block;


  }
`;
export const DropdownContent = styled.div`
  display: none;
  border-top: 1px solid #000;
  margin-top: 15px;
  padding: 5px;

  & > p {
    margin: 10px 0;
  }
`;

export const SubscribeSection = styled.div`
  background: ${COLORS.black1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: row;
  padding-bottom: 40px;
  border-bottom: 8px solid ${COLORS.gray6};


  & p.h3{
    @media (max-width: 768px) {
      width:90%;
      text-align:center;
    }
  }
`;
