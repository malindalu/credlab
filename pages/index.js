import React from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
// import HomePageSection from '../components/homePageSection/homePageSection';
import Image from 'next/image';
// import { promises as fs } from 'fs';
import fs from 'fs/promises';



function Home({jsonData}) {
  // const file = fs.readFile(process.cwd() + '/app/data.json', 'utf8');
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
      <div className={styles.homePageContent}>
        <div className={styles.sectionNumber}>01</div>
        <div className={styles.homePageSection}>
          <div className={styles.homePageColumns}>
            <div className={styles.homePageColumnsTexts}>
              <div className={styles.intro}>
                    <hr className={styles.hr}></hr>
                    <div>NEWS</div>
              </div>
              <div className={styles.titleBold}>Current Projects</div>
              <div>{jsonData.homePageSection1} </div>
            </div>
              <Image 
              src="/poster.png" 
              width = "500"
              height = "400"
              />
          </div>
         
        </div>
      
      </div>
      <Footer/>

    </main>
  );
}

export default Home;

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
  
  
  // // const res = await fetch(`/descriptions.json`);
  // const fs = require('fs');
  // const file = await fs.readFile('/description.json', 'utf8');
  // // const data = await res.json();

  // // if (!data) {
  // //   return {
  // //     notFound: true
  // //   };
  // // }
  // // const fs = require('fs')
  // // fs.readFile('/description.txt', (err, inputD) => {
  // //   if (err) throw err;
  // //       console.log(inputD.toString());
  // // })

  // return {
  //   props: {  } // will be passed to the page component as props
  // };
}
