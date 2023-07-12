import React, { ReactNode } from "react";
import styles from "./Button.module.css";

export interface CardProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const Button: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
