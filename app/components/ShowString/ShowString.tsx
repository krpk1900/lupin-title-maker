"use client";

import * as React from 'react';
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
          return currentIndex + 1;
        } else {
          clearInterval(timer);
          setShowAllString(true);
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
