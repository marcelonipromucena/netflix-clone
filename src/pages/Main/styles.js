import styled from "styled-components";

import luciferbg from "../../assets/img/luciferbg.webp";
import Text from "../../components/Text";
import { COLORS, SIZES } from "../../constants/theme";

export const Row = styled.div`
  display: flex;
`;

export const HeaderContainer = styled.div`
  display: flex;
  /* padding:30px; */
  height: 700px;
  width: 100%;
  background: ${COLORS.black1};
  background-image: url(${luciferbg});
  background-size: cover;
`;

export const OverlayContainer = styled.div`
  width: 100%;
  height: 30%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
`;

export const Logo = styled.img`
  color: ${COLORS.red};
  width: 133px;
  margin-right: 30px;
`;

export const Navbar = styled.div`
  margin: 30px 56px 0 56px;
  height: 60px;
`;

export const NavbarLeft = styled.div`
  float: left;
  display: flex;
  align-items: center;
  width: 60%;

  & > ul li {
    display: inline-block;
    margin: 0 10px;
  }

  & > ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 0.9rem;

    &.active {
      font-weight: bold;
      border-bottom: 2px solid ${COLORS.red};
      transition: all 0.2s ease;
    }
    &:hover {
      border-bottom: 2px solid ${COLORS.red};
      transition: all 0.2s ease;
    }
  }
`;
export const NavbarRight = styled.div`
  float: right;

  & > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    & > li {
      display: inline-block;
      margin: 0 10px;
      & > a {
        color: #fff;
        font-size: 1.2rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        & > img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`;

export const WrapperCenterContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 0px 70px 50px;

  & > p.h3 {
    margin-bottom: 15px;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
`;

export const MovieDetails = styled.div`
  & > p.h1 {
    color: #fff;
    font-size: 20px;
    margin: 20px 0;
    font-weight: bold;
    @media (max-width: 768px) {
      width: 90%;
      font-size: 30px;
    }
  }

  & > p.h2 {
    color: #fff;
    width: 400px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
  }
`;
export const MovieLogo = styled.img`
  width: 60%;
`;

export const PlayButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  background: #fff;
  color: ${COLORS.gray4};
  padding: 10px;
  border-radius: 4px;
  width: 125px;
  height: 25px;
  text-align: center;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    transition: all 0.2s ease;
  }
`;
export const MoreInformationButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  background: rgba(150, 150, 150, 0.5);
  color: ${COLORS.white};
  padding: 10px;
  border-radius: 4px;
  width: 200px;
  height: 25px;
  margin-left: 15px;
  text-align: center;
  font-weight: bold;
  transition: all 0.2s ease;

  & > svg {
    font-size: 20px;
  }

  &:hover {
    background: rgba(150, 150, 150, 0.9);
    transition: all 0.2s ease;
  }
`;

export const MovieSliderControls = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const SliderPreview = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 125px;
  border-left: 4px solid #fff;
  padding: 1px;
  padding-left: 15px;
`;
export const MovieAge = styled.div`
  width: 40px;
  height: 40px;
  background: red;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: bold;
`;

export const WrapperMovieListing = styled.div`
  position: relative;
  padding: 0 0 15px 50px;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 1;
`;

export const MovieCategoryTitle = styled.div`
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;
export const Movies = styled.div`
  overflow-x: hidden;
  white-space:nowrap;
`;
export const Movie = styled.a`
  display: inline-block;
`;

export const MovieThumb = styled.img`
  width: 275px;
  height: 155px;
  margin:0 3px 20px 0;
`;
