import React from 'react';

import { LiaArrowUpSolid } from 'react-icons/lia';
import styled from 'styled-components';

import theme from '@/theme';

const { colors, device, typography } = theme;
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <FooterTop>
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <LiaArrowUpSolid size={32} />
        </button>
      </FooterTop>
      <FooterBottom> Copyright © {currentYear}. All rights reserved.</FooterBottom>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  margin-top: 50px;
  width: 68%;
  @media ${device.laptop} {
    width: 100%;
  }
`;

const FooterTop = styled.div`
  width: 100%;
  position: relative;
  height: 1px;
  &::before {
    content: '';
    position: absolute;
    background-color: rgba(255, 255, 255, 0.2);
    top: 0px;
    bottom: 0px;
    width: 110px;
    right: 0px;
  }
  &::after {
    content: '';
    position: absolute;
    background-color: rgba(255, 255, 255, 0.2);
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 220px;
  }
  button {
    all: unset;
    position: absolute;
    width: 21px;
    height: 26px;
    display: block;
    right: 154px;
    top: 50%;
    margin-top: -17px;
    color: ${colors.white};
    text-decoration: none;
    cursor: pointer;
    transition: 300ms all ease-in-out;
    &:hover {
      color: ${colors.leather};
    }
  }
`;

const FooterBottom = styled.p`
  padding: 42px 20px;
  color: ${colors.gray};
  font-size: ${typography.fontSizes.$5};
  line-height: 30px;
`;
