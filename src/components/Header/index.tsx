import React from 'react';

import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import theme from '@/theme';
import data from '../../data.json';

const { colors, device } = theme;

type HeaderProps = {
  isScrolled: boolean;
};

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const isMobile = useMediaQuery({ query: device.laptop });
  const isTablet = useMediaQuery({ query: device.tablet });

  const width = isMobile ? '100%' : isScrolled ? '32%' : '44%';

  let padding;
  if (isTablet) padding = '100px 20px';
  else if (isMobile) padding = '100px 20%';
  else padding = `100px calc(0.16 * ${isScrolled ? '32%' : '44%'})`;

  return (
    <Wrapper
      animate={{
        width,
        padding,
      }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 15,
      }}
    >
      <InnerWrapper>
        <FirstBorder aria-hidden="true" />
        <SecondBorder aria-hidden="true" />
        <img
          src={data.avatar}
          alt={`${data.name} - ${data.role}`}
        />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(motion.header)`
  background-color: ${colors.codGray};
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  color: ${colors.white};
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  @media ${device.laptop} {
    position: static;
    height: auto;
  }
`;

const InnerWrapper = styled.div`
  padding: 38px 41px;
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  z-index: 5;
  img {
    width: 100%;
    height: 100%;
  }
`;

const FirstBorder = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 20px;
  right: 0;
  top: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  transition: all 0.3s ease;
`;

const SecondBorder = styled.div`
  position: absolute;
  z-index: 1;
  left: 20px;
  bottom: 0;
  right: 20px;
  top: 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  transition: all 0.3s ease;
`;
