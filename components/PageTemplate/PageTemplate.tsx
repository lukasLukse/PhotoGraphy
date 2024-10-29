import styles from "./styles.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ReactNode, useEffect, useState } from "react";
import { validateUse } from "../../apiCalls/user";

type PageTemplateProps = {
  children: ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const response = await validateUse();
        setIsUserLoggedIn(response.status === 200);
      } catch (error) {
        console.log(error);
        setIsUserLoggedIn(false);
      }
    };

    checkUserLoggedIn();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header isUserLoggedIn={isUserLoggedIn} />
      <div className={styles.main}>{children}</div>
      <Footer copyrightTitle="&#169; LUKŠĖS, LTU, Inc: All rights reserved." />
    </div>
  );
};

export default PageTemplate;
