import React from 'react';

import { CgArrowTopRight } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

import theme from '@/theme';

const { borderRadius, colors, device, typography } = theme;

type CardProps = {
  item: {
    name: string;
    imgUrl: string;
    github: string;
    live: string;
  };
};
const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <ListItem key={item.name}>
      <img
        src={item.imgUrl}
        alt={`${item.name} project screenshot`}
      />
      <TextWrapper>
        <h4>{item.name}</h4>
        <Links>
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${item.name} on GitHub`}
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${item.name}`}
          >
            <CgArrowTopRight aria-hidden="true" />
          </a>
        </Links>
      </TextWrapper>
    </ListItem>
  );
};

export default Card;

const TextWrapper = styled.div`
  padding-top: 16px;
  flex: 1;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 0%;
    background-color: ${colors.alto};
    transition: width 0.5s ease;
  }

  h4 {
    font-size: ${typography.fontSizes.$6};
    font-weight: ${typography.fontWeights.medium};
    color: ${colors.alto};
  }
`;

const Links = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;

  a {
    color: ${colors.alto};
    font-size: ${typography.fontSizes.$5};
    display: flex;
    align-items: center;

    &:hover {
      color: ${colors.white};
    }
  }
`;

const ListItem = styled.li`
  width: calc(50% - 20px);
  display: flex;
  gap: 30px;
  align-items: flex-start;
  cursor: pointer;
  position: relative;

  img {
    width: 122px;
    height: 122px;
    object-fit: cover;
    border-radius: ${borderRadius.xl};
  }

  &:hover ${TextWrapper}::after {
    width: 100%;
  }

  &:hover ${Links} {
    opacity: 1;
    transform: translateY(5px);
  }

  @media ${device.laptop} {
    width: 100%;
  }
`;
