import React, { ReactNode } from "react";
import styles from "./Pill.module.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const Button: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <div {...props} className={styles.pill}>
      {children}
    </div>
  );
};

export default Button;
