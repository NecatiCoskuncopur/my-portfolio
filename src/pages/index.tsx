import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { Footer, Header, Intro, Portfolio } from '@/components';
import theme from '@/theme';

const { colors, device } = theme;
const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper>
      <Header isScrolled={isScrolled} />
      <Content $isScrolled={isScrolled}>
        <Intro />
        <Portfolio />
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main`
  background-color: ${colors.codGray};
  color: ${colors.white};
`;

const Content = styled.div<{ $isScrolled: boolean }>`
  width: ${({ $isScrolled }) => ($isScrolled ? '68%' : '56%')};
  padding: ${({ $isScrolled }) => ($isScrolled ? '0 130px' : '0 107px')};
  @media ${device.laptop} {
    padding: 0 20px;
    width: 100%;
  }
`;
