import React from 'react';

import styled from 'styled-components';

import theme from '@/theme';
import Subtitle from './Subtitle';
import Title from './Title';
import data from '../data.json';

const { colors, device, typography } = theme;

const Intro = () => {
  return (
    <Wrapper aria-labelledby="intro-title">
      <Subtitle aria-hidden="true">INTRODUCTION</Subtitle>
      <Title
        text={data.role}
        id="intro-title"
      />
      <p>{data.introDescription}</p>
    </Wrapper>
  );
};

export default Intro;

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: ${typography.fontSizes.$10};
    color: ${colors.gray};
    line-height: 44px;
    letter-spacing: 0;
    margin-bottom: 57px;
  }
  @media ${device.laptop} {
    height: auto;
    padding: 50px 0;
  }
  @media ${device.tablet} {
    p {
      font-size: ${typography.fontSizes.$6};
      line-height: 1.5;
    }
  }
`;
