import Link from "next/link";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

type HeaderProps = {
  isUserLoggedIn: boolean;
};

const Header = ({ isUserLoggedIn }: HeaderProps) => {
  const router = useRouter();

  const goToPage = () => {
    router.push("/signup");
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <ul>
            <li>
              <Link href="/">
                <img
                  src="https://icons.iconarchive.com/icons/icons8/windows-8/256/Photo-Video-Slr-Small-Lens-icon.png"
                  alt="photo"
                />
                PhotoLuke
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.headerRight}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Album</Link>
            </li>
          </ul>
          {!isUserLoggedIn ? (
            <button className={styles.signUpBtn} onClick={goToPage}>
              SIGN UP
            </button>
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/512/266/266033.png"
              alt="User Avatar"
              className={styles.avatarImage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
