"use client";

import * as React from 'react';
import { playSound } from '../../utils/playSound';
import styles from './ShowString.module.css';

type ShowStringProps = {
  string: string;
}

export const ShowString = ({ string }: ShowStringProps) => {
  const [index, setIndex] = React.useState(0);
  const [showAllString, setShowAllString] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((currentIndex) => {
        if (currentIndex < string.length - 1) {
          playSound({ filename: '/sound/typeWriter.mp3', volume: 1 });
          return currentIndex + 1;
        } else {
          clearInterval(timer);
          setShowAllString(true);
          playSound({ filename: '/sound/titleCall.mp3', volume: 0.6 });
          return currentIndex;
        }
      });
    }, 220);

    return () => clearInterval(timer);
  }, [string]);

  return (
    showAllString ? (
      <div className={styles.showAllString}>{string}</div>
    ) : (
      <div className={styles.showString}>{string[index]}</div>
    )
  );
};
