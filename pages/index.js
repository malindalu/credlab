import styles from '../styles/Home.module.css';
import Header from '../components/header';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <div >
        <div className={styles.titleContainer}>
          <div className={styles.titleTextContainer}>
            <div className={styles.intro}>
              <hr className={styles.hr}></hr>
              <div>INTRODUCTION</div>
            </div>
            <div className={styles.titleBold}>Here at Cred Lab,</div>
            <div>we maintain the online ecosystem</div>
          </div>

        </div>
      </div>
    </div>
    // <div>hi</div>
  );
}
