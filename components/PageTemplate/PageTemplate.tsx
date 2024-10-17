import styles from "./styles.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ReactNode } from "react";

type PageTemplateProps = {
  children: ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer copyrightTitle="&#169; LUKŠĖS, LTU, Inc: All rights reserved." />
    </div>
  );
};

export default PageTemplate;
