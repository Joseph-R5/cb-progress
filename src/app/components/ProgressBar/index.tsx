'use client';
import { useEffect, useRef } from 'react';
import { ProgressBarProps } from "../../types/questions";
import styles from '../../styles/progressBar.module.css';
import Image from 'next/image';

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, onProgressChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const rect = container?.getBoundingClientRect();

    if (container && rect) {
      const progressRect = container.children[0].getBoundingClientRect();
      const progressWidth = rect.width / 6;

      container.style.setProperty('--progress-width', `${progressRect.width}px`);
      container.style.setProperty('--progress-x', `${(progressRect.left - rect.left) / progressWidth}`);
    }
  }, [progress]);

  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.progress} style={{ width: `${(progress - 1) * 16.7}%` }} />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/exit.svg"
          alt="X"
          width={50}
          height={50}
          className={styles.progressBarImage}
          onClick={() => onProgressChange(0, {})}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
