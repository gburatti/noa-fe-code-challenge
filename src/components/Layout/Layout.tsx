import React, { ReactNode, useContext } from "react";
import logo from "assets/noaLogo.png";
import { useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "components/Button/Button";
import Pill from "components/Pill/Pill";
import { AppContext } from "views/App/App.context";

const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const state = useContext(AppContext);
  const erorrsCount = Object.values(state).reduce(
    (acc, req) => (req.error ? acc + 1 : acc),
    0
  );
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <img alt="logo" src={logo} style={{ maxWidth: "100px" }} />

        <div className={styles.nav}>
          <Button onClick={() => navigate("/")}>Map</Button>
          <Button onClick={() => navigate("/stats")}>
            Stats {erorrsCount > 0 && <Pill>!{erorrsCount}</Pill>}
          </Button>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
