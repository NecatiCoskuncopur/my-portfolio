import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import Education from './Education';
import Experience from './Experience';
import Info from './Info';
import Skills from './Skills';
import { StyledSection, Tab, Tabs } from './style';
import data from '../../data.json';
import Subtitle from '../Subtitle';
import Title from '../Title';

const About = () => {
  const [content, setContent] = useState<'experience' | 'education'>('experience');

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <StyledSection aria-labelledby="about-title">
      <Subtitle>ABOUT ME</Subtitle>
      <Title
        text="Biography"
        id="about-title"
      />
      <p>{data.aboutDescription}</p>

      <Info />

      <Tabs>
        <Tab
          $isActive={content === 'experience'}
          onClick={() => setContent('experience')}
          role="tab"
          aria-selected={content === 'experience'}
          aria-controls="experience-panel"
          id="experience-tab"
        >
          Experience
        </Tab>
        <Tab
          role="tab"
          aria-selected={content === 'education'}
          aria-controls="education-panel"
          id="education-tab"
          $isActive={content === 'education'}
          onClick={() => setContent('education')}
        >
          Education
        </Tab>
      </Tabs>

      <AnimatePresence mode="wait">
        {content === 'experience' && (
          <motion.div
            key="experience"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            role="tabpanel"
            id="experience-panel"
            aria-labelledby="experience-tab"
          >
            <Experience />
          </motion.div>
        )}

        {content === 'education' && (
          <motion.div
            key="education"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            role="tabpanel"
            id="education-panel"
            aria-labelledby="education-tab"
          >
            <Education />
          </motion.div>
        )}
      </AnimatePresence>

      <Skills />
    </StyledSection>
  );
};

export default About;
