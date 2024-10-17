import Link from "next/link";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <ul>
            <li>
              <Link href="/">LOGO</Link>
            </li>
          </ul>
        </div>
        <div className={styles.headerRight}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
          </ul>
          <button>SIGN UP</button>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <p>
          A forest is a large area covered primarily by trees and other
          vegetation, creating a complex ecosystem that supports a wide range of
          plant and animal species.
        </p>
      </div>
    </div>
  );
};

export default Header;
