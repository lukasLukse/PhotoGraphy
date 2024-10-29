import styles from "./styles.module.css";
import SignupFrom from "@/components/SignupForm/SignupFrom";

const index = () => {
  return (
    <>
      <div className={styles.main}>
        <SignupFrom />
      </div>
    </>
  );
};

export default index;
