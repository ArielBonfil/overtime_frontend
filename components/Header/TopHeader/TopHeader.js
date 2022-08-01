import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./TopHeader.module.scss";
export default function TopHeader() {
  const [display, setDisplay] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div
          className={styles.menuToggler}
          onClick={() => setDisplay(!display)}
        >
          <svg viewBox="0 0 100 50" width="20" height="20">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </div>

        <img src="/images/overtimeLogo.png" height="45px" width="64px" />
      </div>
      {display && (
        <ul className={styles.list}>
         
        </ul>
      )}
    </div>
  );
}
