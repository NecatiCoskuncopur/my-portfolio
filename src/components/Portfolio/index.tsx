import React from 'react';

import styled from 'styled-components';

import Card from './Card';
import data from '../../data.json';
import Subtitle from '../Subtitle';
import Title from '../Title';

const Portfolio = () => {
  return (
    <Wrapper aria-labelledby="portfolio-title">
      <Subtitle>PORTFOLIO</Subtitle>
      <Title
        text="Featured Projects"
        id='"portfolio-title"'
      />
      <ul>
        {data.portfolio.map(item => (
          <Card
            key={item.name}
            item={item}
          />
        ))}
      </ul>
    </Wrapper>
  );
};

export default Portfolio;

const Wrapper = styled.section`
  padding: 50px 0;
  position: relative;
  ul {
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
  }
`;
