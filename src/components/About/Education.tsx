import React from 'react';

import { ContentList, TopWrapper } from './style';
import data from '../../data.json';

const Education = () => {
  return (
    <ContentList aria-label="Education List">
      {data.education.map(item => (
        <li key={item.institute}>
          <TopWrapper>
            <h5>{item.institute}</h5>
            <span>{item.date}</span>
          </TopWrapper>
          <h4>{item.programName}</h4>
          <p>{item.description}</p>
        </li>
      ))}
    </ContentList>
  );
};

export default Education;
