import React, { useEffect, useRef } from 'react';

import { animated, useTrail } from '@react-spring/web';
import {
  SiBootstrap,
  SiCss3,
  SiFlask,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPython,
  SiReact,
  SiTypescript
} from 'react-icons/si';

import { Section } from '../Section';

import { Icon } from './Icon';

import fillerImage from '@/assets/skills-filler.svg';
import { useVisible } from '@/hooks/useVisible';

const icons = [
  <Icon icon={SiBootstrap} key="bootstrap" name="Bootstrap" />,
  <Icon icon={SiFlask} key="flask" name="Flask" />,
  <Icon icon={SiNodedotjs} key="node" name="Node.js" />,
  <Icon icon={SiNumpy} key="numpy" name="NumPy" />,
  <Icon icon={SiPandas} key="pandas" name="Pandas" />,
  <Icon icon={SiReact} key="react" name="React" />,
  <Icon icon={SiCss3} key="css" name="CSS" />,
  <Icon icon={SiHtml5} key="html" name="HTML" />,
  <Icon icon={SiJavascript} key="javascript" name="JavaScript" />,
  <Icon icon={SiPython} key="python" name="Python" />,
  <Icon icon={SiTypescript} key="typescript" name="TypeScript" />,
  <Icon icon={SiGit} key="git" name="Git" />
];

export const Skills = () => {
  const ref = useRef(null);
  const isVisible = useVisible(ref, {
    threshold: 0.5
  });

  const config = {
    mass: 1,
    tension: 200
  };

  const [trail, api] = useTrail(icons.length, () => ({
    config,
    opacity: 0,
    scale: 0
  }));

  useEffect(() => {
    api.start({
      opacity: 1,
      scale: 1
    });
  }, [isVisible]);

  return (
    <Section name="skills">
      <div className="grid h-full grid-cols-2">
        <div className="flex items-center justify-center">
          <img alt="filter" src={fillerImage} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>My Tech Stack</h3>
          <div className="grid grid-cols-5 gap-2" ref={ref}>
            {trail.map((style, index) => (
              <animated.div key={index} style={style}>
                {icons[index]}
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
