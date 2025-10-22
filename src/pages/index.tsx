import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import { About, Footer, Header, Intro, Portfolio } from '@/components';
import theme from '@/theme';
import data from '../data.json';

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
    <>
      <Head>
        <title>{data.name}</title>
        <meta
          name="description"
          content={`${data.role} ${data.name} portfolio: projects, skills, and contact information.`}
        />
        <link
          rel="canonical"
          href="https://www.tolgakilic.com/"
        />
        <meta
          property="og:title"
          content={`${data.name} - Portfolio`}
        />
        <meta
          property="og:description"
          content={`${data.role} ${data.name} portfolio: projects, skills, and contact information.`}
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:url"
          content="https://www.tolgakilic.com/"
        />
        <meta
          property="og:image"
          content={data.avatar}
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content={`${data.name} - Portfolio`}
        />
        <meta
          name="twitter:description"
          content={`${data.role} ${data.name} portfolio: projects, skills, and contact information.`}
        />
        <meta
          name="twitter:image"
          content={data.avatar}
        />
      </Head>
      <Wrapper>
        <Header isScrolled={isScrolled} />
        <Content $isScrolled={isScrolled}>
          <Intro />
          <About />
          <Portfolio />
        </Content>
        <Footer />
      </Wrapper>
    </>
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
