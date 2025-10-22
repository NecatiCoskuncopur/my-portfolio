import React from 'react';

import { ContentList, TopWrapper } from './style';
import data from '../../data.json';
const Experience = () => {
  return (
    <ContentList aria-label="Experience List">
      {data.experience.map(item => (
        <li key={item.name}>
          <TopWrapper>
            <h5>{item.name}</h5>
            <span>{item.date}</span>
          </TopWrapper>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ContentList>
  );
};

export default Experience;
