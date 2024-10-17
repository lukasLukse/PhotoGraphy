import PageTemplate from "@/components/PageTemplate/PageTemplate";
import styles from "../styles/Home.module.css";

const index = () => {
  return (
    <>
      <PageTemplate>
        <>
          <div className={styles.background}>
            <h1>Learn more : </h1>
            <div className={styles.sectionOne}>
              <div className={styles.photoOneWrapper}>
                <img
                  className={styles.img}
                  src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="image one"
                />
              </div>
              <div className={styles.photoOneText}>
                <h3>Snow Mountain:</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  eaque modi et quas nisi? Iusto reprehenderit molestias autem
                  soluta. Ipsam earum in amet consequatur tenetur sit voluptates
                  assumenda eius asperiores.
                </p>
              </div>
            </div>

            <div className={styles.sectionTwo}>
              <div className={styles.photoTwoWrapper}>
                <img
                  className={styles.img}
                  src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="image two"
                />
              </div>
              <div className={styles.photoTwoText}>
                <h3>Mountain night:</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  eaque modi et quas nisi? Iusto reprehenderit molestias autem
                  soluta. Ipsam earum in amet consequatur tenetur sit voluptates
                  assumenda eius asperiores.
                </p>
              </div>
            </div>

            <div className={styles.sectionThree}>
              <div className={styles.photoThreeWrapper}>
                <img
                  className={styles.img}
                  src="https://images.unsplash.com/photo-1521109464564-2fa2faa95858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D"
                  alt="image three"
                />
              </div>
              <div className={styles.photoThreeText}>
                <h3>Ocean drive :</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  eaque modi et quas nisi? Iusto reprehenderit molestias autem
                  soluta. Ipsam earum in amet consequatur tenetur sit voluptates
                  assumenda eius asperiores.
                </p>
              </div>
            </div>
          </div>
        </>
      </PageTemplate>
    </>
  );
};

export default index;
