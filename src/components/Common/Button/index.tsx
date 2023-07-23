import Link from 'next/link';
import { FC } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  bgColor: string;
  linkTo: string;
  textColor: string;
  width?: string;
};

const Button: FC<ButtonProps> = ({ bgColor, linkTo, textColor, width }) => {
  return (
    <Link
      href={linkTo}
      style={{
        width: width,
      }}
    >
      <button
        className={styles.button}
        style={{
          backgroundColor: bgColor,
          color: textColor,
          width: width,
        }}
      >
        Get Started
      </button>
    </Link>
  );
};

export default Button;
