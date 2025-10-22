import React, { JSX } from 'react';

import { DiDotnet } from 'react-icons/di';
import { FaAws, FaGit, FaGithub, FaGitlab } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';
import { PiFileCSharpLight } from 'react-icons/pi';
import { SiCss3, SiHtml5, SiJquery, SiMongodb, SiNestjs, SiOpencv, SiPostgresql, SiReact, SiReactos, SiStyledcomponents, SiTypescript } from 'react-icons/si';
import { TbFileTypeSql } from 'react-icons/tb';

import { MarqueeContent, SkillItem, SkillWrapper, Track } from './style';
import data from '../../data.json';

const Skills = () => {
  const iconMap: Record<string, JSX.Element> = {
    HTML: <SiHtml5 />,
    CSS: <SiCss3 />,
    'Styled Components': <SiStyledcomponents />,
    'C#': <PiFileCSharpLight />,
    '.Net Core': <DiDotnet />,
    JavaScript: <IoLogoJavascript />,
    TypeScript: <SiTypescript />,
    JQuery: <SiJquery />,
    ReactJS: <SiReact />,
    NodeJS: <FaNodeJs />,
    NestJS: <SiNestjs />,
    ReactNative: <SiReactos />,
    MsSql: <TbFileTypeSql />,
    PostgreSQL: <SiPostgresql />,
    MongoDB: <SiMongodb />,
    'T-SQL': <TbFileTypeSql />,
    OpenCv: <SiOpencv />,
    Git: <FaGit />,
    Github: <FaGithub />,
    Gitlab: <FaGitlab />,
    Aws: <FaAws />,
  };

  return (
    <SkillWrapper>
      <Track>
        <MarqueeContent>
          {data.skills.map((item, i) => (
            <SkillItem key={`1-${i}`}>
              {React.cloneElement(iconMap[item.name], { 'aria-hidden': 'true' })}
              <span>{item.name}</span>
            </SkillItem>
          ))}
        </MarqueeContent>
        <MarqueeContent aria-hidden="true">
          {data.skills.map((item, i) => (
            <SkillItem key={`2-${i}`}>
              {React.cloneElement(iconMap[item.name], { 'aria-hidden': 'true' })}
              <span>{item.name}</span>
            </SkillItem>
          ))}
        </MarqueeContent>
      </Track>
    </SkillWrapper>
  );
};

export default Skills;
