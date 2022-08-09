import Link from "next/link"
import { useRouter } from "next/router";
import InlineDropwDonwMenu from "../TopHeader/InlineDropDownMenu";
import styles from './downHeader.module.scss'
export default function DownHeader () {
    const { asPath } = useRouter();
    return(
      <>
          <ul className={styles.list}>
        <Link href="/">
        <li className={asPath === "/" ? styles.selected : ''}>Home</li>
      </Link>
      <Link href="/fixture">
        <li className={asPath === "/fixture" ? styles.selected : ''}>
          Fixture
        </li>
      </Link>
      <Link href="/positions">
        <li className={asPath === "/positions" ? styles.selected : ''}>
          Positions
        </li>
      </Link>
        </ul>
        </>
    
    )
}