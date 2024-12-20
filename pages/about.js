import React from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import fs from 'fs/promises';



function About({jsonData}) {
  return (
    <main className={styles.page}>
      <Header/>
      <div >
        <div className={styles.titleContainer}>
          <div className={styles.titleTextContainer}>
            <div className={styles.intro}>
              <hr className={styles.hr}></hr>
            </div>
            <div className={styles.titleBold}>Meet the Team</div>
            <p className={styles.titleSmall}>We are a community of diverse and creative thinkers</p>
          </div>
        </div>
      </div>
      <div className={styles.homePageContent}>
      
      </div>
      <Footer/>

    </main>
  );
}

export default About;

export async function getStaticProps(context) {
  // const fs = require('fs');
  const filePath = process.cwd() + '/public/description.json';
    const data = await fs.readFile(filePath, 'utf8'); // 'utf8' encoding specified here
    const jsonData = JSON.parse(data); // Parse the JSON data
    
    return {
      props: {
        jsonData// Pass the data as props
      },
    };

}
