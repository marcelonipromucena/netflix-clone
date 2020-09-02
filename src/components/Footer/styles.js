import styled from "styled-components";

import { COLORS, SIZES } from "../../constants/theme";

export const FooterSection = styled.div`
  background: ${COLORS.black1};
  padding-left: 150px;
  height: 430px;

  & > p {
    padding-top: 80px;

    @media (max-width: 768px) {
      padding: 10px 0;
    }
  }
  @media (max-width: 768px) {
    padding: 10px;
    text-align: center;
  }
`;
export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;
export const FooterLink = styled.a`
  color: ${COLORS.gray2};
  text-decoration: none;
  padding: 5px 12px 10px 0;
  font-size: 0.8rem;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;
