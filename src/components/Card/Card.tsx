import React, { ReactNode } from "react";
import styles from "./Card.module.css";
import Loading from "assets/loader.svg";

export interface CardProps {
  children?: ReactNode;
  title?: string | ReactNode;
  loading?: boolean;
}

const Card: React.FC<CardProps> = ({ title, children, loading = false }) => {
  return (
    <div className={styles.card}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={`${styles.content} ${loading && styles.loading}`}>
        {loading ? <img src={Loading} alt="loading" /> : children}
      </div>
    </div>
  );
};

export default Card;
