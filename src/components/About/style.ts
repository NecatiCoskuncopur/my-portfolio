import styled, { keyframes } from 'styled-components';

import theme from '@/theme';
const { colors, device, typography } = theme;

//Main
const StyledSection = styled.section`
  padding: 50px 0;
  p {
    font-size: ${typography.fontSizes.$10};
    color: ${colors.gray};
    line-height: 44px;
    letter-spacing: 0;
    margin-bottom: 74px;
  }
  @media ${device.tablet} {
    p {
      font-size: ${typography.fontSizes.$6};
      line-height: 1.5;
    }
  }
`;

const Tabs = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  gap: 48px;
`;

const Tab = styled.li<{ $isActive: boolean }>`
  text-decoration: none;
  display: inline-block;
  color: ${({ $isActive }) => ($isActive ? colors.leather : colors.gray)};
  font-size: ${typography.fontSizes.$9};
  line-height: 30px;
  padding-top: 4px;
  cursor: pointer;
`;

// info
const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 54px;
  gap: 48px;
  flex-wrap: wrap;

  ul {
    width: calc(50% - 24px);
  }
  @media ${device.desktop} {
    ul {
      width: 100%;
    }
  }
`;

const InfoListItem = styled.li`
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: center;
  padding: 10px;
  color: ${colors.alto};
  font-size: ${typography.fontSizes.$4};
  line-height: 1.44;

  span {
    color: ${colors.gray};
    font-weight: ${typography.fontWeights.medium};
    text-transform: uppercase;
  }
  a {
    transition: 300ms all ease-in-out;
    &:hover {
      color: ${colors.leather};
    }
  }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(0); }
`;

const InfoButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  width: calc(50% - 24px);
  height: 220px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  text-decoration: none;
  cursor: pointer;
  transition: 300ms all ease-in-out;
  &:hover {
    border: 2px solid ${colors.leather};
    .icon-up {
      animation: ${float} 1.5s ease-in-out infinite;
    }
  }
  span {
    color: ${colors.gray};
    font-weight: ${typography.fontWeights.medium};
    text-transform: uppercase;
    font-size: ${typography.fontSizes.$5};
  }
  @media ${device.desktop} {
    width: 100%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    width: 58px;
    height: 58px;
    fill: ${colors.alto};
    transition: transform 0.3s ease;
  }
`;

const IconUp = styled.svg`
  position: relative;
  top: 36px;
  margin-bottom: -12px;
`;

const IconDown = styled.svg`
  position: relative;
  top: -2px;
`;

// Experience - Education

const ContentList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  li {
    padding: 42px 40px 43px;
    background-color: ${colors.cinder};
    color: ${colors.alto};
    h4 {
      font-weight: ${typography.fontWeights.normal};
      font-size: ${typography.fontSizes.$9};
      margin-bottom: 17px;
      line-height: 1.2;
    }
    p {
      font-size: ${typography.fontSizes.$5};
      color: ${colors.gray};
      line-height: 1.44;
      margin: 0;
    }
  }
`;

const TopWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 14px;
  h5 {
    font-size: ${typography.fontSizes.$5};
    font-weight: ${typography.fontWeights.normal};
    line-height: 30px;
    letter-spacing: 0;
  }
  span {
    display: block;
    color: ${colors.gray};
    font-size: ${typography.fontSizes.$4};
    line-height: 30px;
  }
`;

// Skills
const SkillWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  background: ${colors.smokyBlack};
  padding: 16px 0;
  color: ${colors.white};
`;

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 25s linear infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  &:hover {
    animation-play-state: paused;
  }
`;

const MarqueeContent = styled.div`
  display: flex;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 200px;
  font-size: 18px;
  padding: 8px 16px;
  justify-content: center;
  white-space: nowrap;

  svg {
    font-size: 28px;
  }
`;

export {
  ContentList,
  IconDown,
  IconUp,
  IconWrapper,
  InfoButton,
  InfoListItem,
  InfoWrapper,
  MarqueeContent,
  SkillItem,
  SkillWrapper,
  StyledSection,
  Tab,
  Tabs,
  TopWrapper,
  Track,
};
