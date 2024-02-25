"use client";

import * as React from 'react';
import { playSound } from '../../utils/sound';
import styles from './ShowString.module.css';

type ShowStringProps = {
  string: string;
}

export const ShowString = ({ string }: ShowStringProps) => {
  const [index, setIndex] = React.useState(0);
  const [showAllString, setShowAllString] = React.useState(false);

  const typeNextChar = () => {
    if (index < string.length - 1) {
      playSound({ filename: '/sound/typeWriter.mp3', volume: 1 });
      setIndex(index + 1);
    } else {
      playSound({ filename: '/sound/titleCall.mp3', volume: 0.6 });
      setShowAllString(true);
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(typeNextChar, 220);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    showAllString ? (
      <div className={styles.showAllString}>{string}</div>
    ) : (
      <div className={styles.showString}>{string[index]}</div>
    )
  );
};
