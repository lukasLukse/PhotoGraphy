import { login, register } from "@/apiCalls/user";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./styles.module.css";
import cookie from "js-cookie";
import { Button } from "../Button/Button";

const SignupForm = () => {
  const router = useRouter();

  const goToPage = () => {
    router.push("/");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [isShowError, setShowError] = useState(false);
  const [isButtonLoading, setButtonLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const loginUser = async () => {
    try {
      setButtonLoading(true);
      setShowError(false);

      const response = await login({ email, password });

      if (response.status === 200) {
        cookie.set(process.env.JWT_KEY as string, response.data.token);
        cookie.set("user_id", response.data.userId);
        router.push("/");
      } else {
        setShowError(true);
      }
    } catch (err) {
      console.log("Error:", err);
      setShowError(true);
    } finally {
      setButtonLoading(false);
    }
  };

  const registerUser = async () => {
    try {
      setButtonLoading(true);
      setShowError(false);

      const response = await register({ name, email, password });

      if (response.status === 201) {
        console.log(response.data);
        cookie.set(process.env.JWT_KEY as string, response.data.token);
        cookie.set("user_id", response.data.userId);
        router.push("/");
      } else {
        setShowError(true);
      }
    } catch (err) {
      console.log("Error:", err);
      setShowError(true);
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.form}>
          <div className={styles.close}>
            <Button onClick={goToPage} title={"X"} isLoading={false} />
          </div>
          <div className={styles.logo}>
            <img
              src="https://icons.iconarchive.com/icons/icons8/windows-8/256/Photo-Video-Slr-Small-Lens-icon.png"
              alt="photo"
            />
            <h1>PhotoLuke</h1>
          </div>
          {isRegistering && (
            <div>
              <label className={styles.label}>Name :</label>
              <input
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Name"
                type="text"
                className={styles.input}
              />
            </div>
          )}
          <div>
            <label className={styles.label}>Email :</label>
            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="email@email.com"
              type="text"
              className={styles.input}
            />
          </div>
          <div>
            <label className={styles.label}>Password :</label>
            <input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="*********"
              type="password"
              className={styles.input}
            />
          </div>
          {isShowError && (
            <h5 className={styles.error}>
              {isRegistering
                ? "Registration failed. Please check your details."
                : "Bad email or password."}
            </h5>
          )}
          <div className={styles.btnLogin}>
            <Button
              onClick={isRegistering ? registerUser : loginUser}
              title={isRegistering ? "Register" : "Login"}
              isLoading={isButtonLoading}
            />
          </div>
          <div className={styles.toggle}>
            <span>
              {isRegistering
                ? "Already have an account?"
                : "Don't have an account?"}{" "}
              <button
                onClick={() => {
                  setIsRegistering(!isRegistering);
                  setShowError(false);
                }}
                className={styles.linkButton}
              >
                {isRegistering ? "Login" : "Register"}
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
