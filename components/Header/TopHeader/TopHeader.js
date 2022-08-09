import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./topHeader.module.scss";
import InlineDropDownMenu from "./InlineDropDownMenu";
export default function TopHeader() {
  const [display, setDisplay] = useState(false);
  const [displayMode, setdisplayMode] = useState(null)
  useEffect(()=> {
    window.innerWidth <= 1024 ? setdisplayMode('mobile') : setdisplayMode('desktop') 
    window.addEventListener('resize', ()=> {
        window.innerWidth <= 1024 ? setdisplayMode('mobile') : setdisplayMode('desktop') 
    })

 }, [])

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

        <div className={styles.logoContainer}>
          {" "}
          <img src="/images/overtimeLogo.png" height="45px" width="64px" />
        </div>
      </div>
      {displayMode === 'mobile' ? 
      <>{display && (
        <div className={styles.dropdownMenuContainer}>
          <div className={styles.mainContent}>
            <div onClick={() => setDisplay(!display)}>
              <img src="/images/closeX.png" height="20px" width="20px" />
            </div>
            <div className={styles.logoContainer}>
              {" "}
              <img src="/images/overtimeLogo.png" height="45px" width="64px" />
            </div>
          </div>
          <div className={styles.dropdownMenuContent}>
            <h1>Overtime</h1>
            <ul className={styles.socialMediaList}>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Whatsapp</li>
            </ul>
            <InlineDropDownMenu/>
          </div>
        </div>
      )}</>
    :
    <InlineDropDownMenu/>
    }
      
    
    </div>
  );
}
