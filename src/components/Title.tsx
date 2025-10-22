import styled from 'styled-components';

import theme from '@/theme';

const { colors, device, typography } = theme;

import React from 'react';

type TitleProps = {
  text: string;
  id: string;
};

const Title: React.FC<TitleProps> = ({ text, id }) => {
  return (
    <Wrapper id={id}>
      <span aria-hidden="true">{text}</span>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.h2`
  font-size: ${typography.fontSizes.$14};
  font-weight: ${typography.fontWeights.medium};
  color: ${colors.alto};
  letter-spacing: 0;
  line-height: 1.2;
  span {
    position: relative;
    padding-bottom: 15px;
    margin-bottom: 34px;
    display: inline-block;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background-color: rgba(255, 255, 255, 0.2);
      width: 50%;
    }
  }
  @media ${device.tablet} {
    font-size: ${typography.fontSizes.$11};
  }
`;
