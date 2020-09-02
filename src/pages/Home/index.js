import React from "react";
import { FiChevronRight, FiX } from "react-icons/fi";

import image01 from "../../assets/img/img1.png";
import image02 from "../../assets/img/img2.png";
import image03 from "../../assets/img/img3.png";
import image04 from "../../assets/img/img4.png";
import logo from "../../assets/img/logo.svg";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Text from "../../components/Text";
import { COLORS, SIZES } from "../../constants/theme";
import {
  DropdownContent,
  DropdownTitle,
  EmailInput,
  FAQSection,
  GetStartedButton,
  HeaderContainer,
  Logo,
  Navbar,
  NavbarLeft,
  NavbarRight,
  OverlayContainer,
  Section,
  SubscribeSection,
  WrapperCenterContent,
  WrapperEmailInput,
  WrapperSessionImage,
  WrapperSessionText,
} from "./styles";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <OverlayContainer>
          <Navbar>
            <NavbarLeft>
              <Logo src={logo} />
            </NavbarLeft>
            <NavbarRight>
              <Button to="/login">Sign In</Button>
            </NavbarRight>
          </Navbar>

          <WrapperCenterContent>
            <Text className="h1" color={"#FFF"} fontWeight={"Bold"} fontSize={SIZES.h1}>
              Unlimited movies, TV shows, and more.
            </Text>
            <Text className="h2" color={"#FFF"} fontSize={SIZES.h2}>
              Watch anywhere. Cancel anytime.
            </Text>
            <Text className="h3" color={"#FFF"} fontSize={SIZES.h3}>
              Ready to watch? Enter your email to create or restart your membership.
            </Text>

            <WrapperEmailInput>
              <EmailInput placeholder="Email address" />
              <GetStartedButton>
                GET STARTED &nbsp; <FiChevronRight />{" "}
              </GetStartedButton>
            </WrapperEmailInput>
          </WrapperCenterContent>
        </OverlayContainer>
      </HeaderContainer>

      <Section>
        <WrapperSessionText>
          <Text className="h1" color={"#FFF"} fontWeight={"Bold"} fontSize={SIZES.h1}>
            Enjoy on your TV.
          </Text>

          <Text className="h2" color={"#FFF"} fontSize={SIZES.h2}>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.{" "}
          </Text>
        </WrapperSessionText>
        <WrapperSessionImage>
          <img src={image01} alt="image01" />
        </WrapperSessionImage>
      </Section>

      <Section>
        <WrapperSessionImage>
          <img src={image02} alt="image02" />
        </WrapperSessionImage>
        <WrapperSessionText>
          <Text className="h1" color={"#FFF"} fontWeight={"Bold"} fontSize={SIZES.h1}>
            Download your shows to watch offline.
          </Text>

          <Text className="h2" color={"#FFF"} fontSize={SIZES.h2}>
            Save your favorites easily and always have something to watch.{" "}
          </Text>
        </WrapperSessionText>
      </Section>

      <Section>
        <WrapperSessionText>
          <Text className="h1" color={"#FFF"} fontWeight={"Bold"} fontSize={SIZES.h1}>
            Watch everywhere.
          </Text>

          <Text className="h2" color={"#FFF"} fontSize={SIZES.h2}>
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without
            paying more.
          </Text>
        </WrapperSessionText>
        <WrapperSessionImage>
          <img src={image03} alt="image03" />
        </WrapperSessionImage>
      </Section>

      <FAQSection>
        <Text className="h1" color={"#FFF"} fontWeight={"Bold"} fontSize={SIZES.h1}>
          Frequently Asked Questions
        </Text>

        <DropdownTitle>
          What is Netflix? <FiX tabindex="1" />
          <DropdownContent className="tab-1">
            <p>
              Netflix is a streaming service that offers a wide variety of award-winning TV shows,
              movies, anime, documentaries, and more on thousands of internet-connected devices.
            </p>
            <p>
              You can watch as much as you want, whenever you want without a single commercial – all
              for one low monthly price. There's always something new to discover and new TV shows
              and movies are added every week!
            </p>
          </DropdownContent>
        </DropdownTitle>
        <DropdownTitle>
          How much does Netflix cost? <FiX tabindex="2" />
          <DropdownContent className="tab-2">
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all
              for one fixed monthly fee. Plans range from BRL21.90 to BRL45.90 a month. No extra
              costs, no contracts.
            </p>
          </DropdownContent>
        </DropdownTitle>

        <DropdownTitle>
          Where can i watch? <FiX tabindex="3" />
          <DropdownContent className="tab-3">
            <p>
              Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix
              account to watch instantly on the web at netflix.com from your personal computer or on
              any internet-connected device that offers the Netflix app, including smart TVs,
              smartphones, tablets, streaming media players and game consoles.
            </p>
            <p>
              You can also download your favorite shows with the iOS, Android, or Windows 10 app.
              Use downloads to watch while you're on the go and without an internet connection. Take
              Netflix with you anywhere.
            </p>
          </DropdownContent>
        </DropdownTitle>

        <DropdownTitle>
          How do i cancel? <FiX tabindex="4" />
          <DropdownContent className="tab-4">
            <p>
              Netflix is flexible. There are no pesky contracts and no commitments. You can easily
              cancel your account online in two clicks. There are no cancellation fees – start or
              stop your account anytime.
            </p>
          </DropdownContent>
        </DropdownTitle>

        <DropdownTitle>
          What can i watch on Netflix? <FiX tabindex="5" />
          <DropdownContent className="tab-5">
            <p>
              Netflix has an extensive library of feature films, documentaries, TV shows, anime,
              award-winning Netflix originals, and more. Watch as much as you want, anytime you
              want.
            </p>
          </DropdownContent>
        </DropdownTitle>

        <DropdownTitle>
          Is Netflix good for kids? <FiX tabindex="6" />
          <DropdownContent className="tab-6">
            <p>
              The Netflix Kids experience is included in your membership to give parents control
              while kids enjoy family-friendly TV shows and movies in their own space.
            </p>
            <p>
              Kids profiles come with PIN-protected parental controls that let you restrict the
              maturity rating of content kids can watch and block specific titles you don’t want
              kids to see.
            </p>
          </DropdownContent>
        </DropdownTitle>
      </FAQSection>

      <SubscribeSection>
        <Text className="h3" color={"#FFF"} fontSize={SIZES.h3} marginBottom={"15px"}>
          Ready to watch? Enter your email to create or restart your membership.
        </Text>

        <WrapperEmailInput>
          <EmailInput placeholder="Email address" />
          <GetStartedButton>
            GET STARTED &nbsp; <FiChevronRight />
          </GetStartedButton>
        </WrapperEmailInput>
      </SubscribeSection>

      <Footer />
    </>
  );
};

export default Home;
