import React from "react";
import { FooterSection, FooterLink, FooterGrid } from "./styles";
import { SIZES, COLORS } from "../../constants/theme";

import Text from "../../components/Text";
const Footer = () => {
  return (
    <FooterSection>
      <Text color={COLORS.gray2} marginBottom={"15px"}>
        Questions? Call<a href="tel:08007614632"> 0800-761-4632</a>
      </Text>

      <FooterGrid>
        <FooterLink href="#">FAQ</FooterLink>
        <FooterLink href="#">Investor Relations</FooterLink>
        <FooterLink href="#">Ways to Watch</FooterLink>
        <FooterLink href="#">Corporate Information</FooterLink>
        <FooterLink href="#">Netflix Originals</FooterLink>
        <FooterLink href="#">Help Center</FooterLink>
        <FooterLink href="#">Jobs</FooterLink>
        <FooterLink href="#">Terms of Use</FooterLink>
        <FooterLink href="#">Contact Us</FooterLink>
        <FooterLink href="#">Account</FooterLink>
        <FooterLink href="#">Redeem Gift Cards</FooterLink>
        <FooterLink href="#">Privacy</FooterLink>
        <FooterLink href="#">Speed Test</FooterLink>
        <FooterLink href="#">Media Center</FooterLink>
        <FooterLink href="#">Buy Gift Cards</FooterLink>
        <FooterLink href="#">Cookie Preferences</FooterLink>
        <FooterLink href="#">Legal Notices</FooterLink>
      </FooterGrid>
    </FooterSection>
  );
};

export default Footer;
