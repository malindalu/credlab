import React from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function Home() {
  return (
    <main className={styles.page}>
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
      <div className={styles.gradient}/>
      <div className={styles.homePageContent}>Coming Soon</div>
      <Footer/>

    </main>
  );
}

export default Home;
