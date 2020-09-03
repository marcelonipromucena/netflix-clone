import React from "react";
import { FaBell, FaCaretDown, FaPlay, FaSearch } from "react-icons/fa";
import { FiBell, FiChevronRight, FiGift, FiInfo, FiSearch } from "react-icons/fi";

import logo from "../../assets/img/logo.svg";
import luciferlogo from "../../assets/img/luciferlogo.webp";
import movie1 from "../../assets/img/movie1.png";
import movie2 from "../../assets/img/movie2.png";
import movie3 from "../../assets/img/movie3.png";
import movie4 from "../../assets/img/movie4.png";
import movie5 from "../../assets/img/movie5.png";
import movie6 from "../../assets/img/movie6.png";
import movie7 from "../../assets/img/movie7.png";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Text from "../../components/Text";
import { COLORS, SIZES } from "../../constants/theme";
import {
  HeaderContainer,
  Logo,
  MoreInformationButton,
  Movie,
  MovieAge,
  MovieCategoryTitle,
  MovieDetails,
  MovieLogo,
  MovieSliderControls,
  MovieThumb,
  Movies,
  Navbar,
  NavbarLeft,
  NavbarRight,
  OverlayContainer,
  PlayButton,
  Row,
  SliderPreview,
  WrapperCenterContent,
  WrapperMovieListing,
} from "./styles";

const Main = () => {
  return (
    <>
      <HeaderContainer>
        <OverlayContainer>
          <Navbar>
            <NavbarLeft>
              <Logo src={logo} />
              <ul>
                <li>
                  <a href="#" className="active">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#">Séries</a>
                </li>
                <li>
                  <a href="#">Filmes</a>
                </li>
                <li>
                  <a href="#">Mais recentes</a>
                </li>
                <li>
                  <a href="#">Minha lista</a>
                </li>
              </ul>
            </NavbarLeft>
            <NavbarRight>
              <ul>
                <li>
                  <a href="#">
                    <FaSearch />
                  </a>
                </li>
                <li>
                  <a href="#">INFANTIL</a>
                </li>
                <li>
                  <a href="#">
                    <FiGift />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaBell />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png" />
                    &nbsp;
                    <FaCaretDown />
                  </a>
                </li>
              </ul>
            </NavbarRight>
          </Navbar>

          <WrapperCenterContent>
            <MovieDetails>
              <MovieLogo src={luciferlogo} />
              <Text className="h1">Top 1 de hoje no Brasil</Text>
              <Text className="h2">
                O dono deste piano-bar é o próprio diabo. Antes de abominá-lo, saiba que ele também
                soluciona assassinatos.
              </Text>
              <Row>
                <PlayButton href="#">
                  <FaPlay />
                  &nbsp; Assistir
                </PlayButton>
                <MoreInformationButton href="#">
                  <FiInfo />
                  &nbsp; Mais informações
                </MoreInformationButton>
              </Row>
            </MovieDetails>

            <MovieSliderControls>
              <SliderPreview>
                <MovieAge>16</MovieAge>
              </SliderPreview>
            </MovieSliderControls>
          </WrapperCenterContent>

          <WrapperMovieListing>
            <MovieCategoryTitle>Populares na Netflix</MovieCategoryTitle>
            <Movies>
              <Movie>
                <MovieThumb src={movie1} />
                <MovieThumb src={movie2} />
                <MovieThumb src={movie3} />
                <MovieThumb src={movie4} />
                <MovieThumb src={movie5} />
                <MovieThumb src={movie6} />
                <MovieThumb src={movie7} />
              </Movie>
            </Movies>

            <MovieCategoryTitle>Em alta</MovieCategoryTitle>
            <Movies>
              <Movie>
                <MovieThumb src={movie1} />
                <MovieThumb src={movie2} />
                <MovieThumb src={movie3} />
                <MovieThumb src={movie4} />
                <MovieThumb src={movie5} />
                <MovieThumb src={movie6} />
                <MovieThumb src={movie7} />
              </Movie>
            </Movies>

            <MovieCategoryTitle>Em alta</MovieCategoryTitle>
            <Movies>
              <Movie>
                <MovieThumb src={movie1} />
                <MovieThumb src={movie2} />
                <MovieThumb src={movie3} />
                <MovieThumb src={movie4} />
                <MovieThumb src={movie5} />
                <MovieThumb src={movie6} />
                <MovieThumb src={movie7} />
              </Movie>
            </Movies>
          </WrapperMovieListing>
        </OverlayContainer>
      </HeaderContainer>
    </>
  );
};

export default Main;
