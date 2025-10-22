import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import theme from '@/theme';
import data from '../../data.json';

const { colors, typography } = theme;

const texts = [data.name, data.role];

const TextWrapper = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === texts.length) return;

    const timeout = setTimeout(
      () => {
        setSubIndex(prev => (deleting ? prev - 1 : prev + 1));
      },
      deleting ? 50 : 100,
    );

    if (!deleting && subIndex === texts[index].length + 1) {
      setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex(prev => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink(prev => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);
  return (
    <Wrapper>
      <h1>Hi There! I am</h1>
      <p aria-label={texts[index]}>
        <span
          aria-hidden="true"
          style={{ opacity: blink ? 1 : 0 }}
        >
          [
        </span>
        {texts[index].substring(0, subIndex)}
        <span
          aria-hidden="true"
          style={{ opacity: blink ? 1 : 0 }}
        >
          ]
        </span>
      </p>
    </Wrapper>
  );
};

export default TextWrapper;

const Wrapper = styled.div`
  padding: 25px 0;
  text-align: center;
  h1 {
    margin-bottom: 8px;
    color: ${colors.gray};
    font-size: ${typography.fontSizes.$5};
    text-transform: uppercase;
  }
  p {
    font-size: ${typography.fontSizes.$7};
    color: ${colors.alto};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    span {
      color: ${colors.apple};
      transition: opacity 0.5s ease;
    }
  }
`;
