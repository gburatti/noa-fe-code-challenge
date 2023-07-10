import React, {HTMLAttributes} from 'react';
import styles from "./styles.module.css";

interface IProps extends HTMLAttributes<HTMLDivElement> {
}

function Container({children, className, ...props}: IProps) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Container;
