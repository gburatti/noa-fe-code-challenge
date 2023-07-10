import React from 'react';
import {Link, Outlet} from "react-router-dom";
import images from "../../assets/images";
import styles from "./styles.module.css";
import Container from "../Container";

interface IProps {
}

function Layout(props: IProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Container>
          <nav className={styles.headerContent}>
            <Link to="/" className={styles.logo}>
              <img src={images.logo} alt="Noa logo"/>
            </Link>

            <div>
              <Link to="/stats" className={styles.navItem}>Stats</Link>
            </div>
          </nav>
        </Container>
      </div>

      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default Layout;
