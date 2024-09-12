import styles from './footer.module.css'


const Footer = () => (
     <div className={styles.footerContainer}>
          <div className={styles.textContainer}>
               <div className={styles.textSection}>
                    <div>Contact</div>
                    <div>21 College Rd, Wellesley, MA</div>
               </div>
               <div className={styles.textSection}>
                    <div>Email</div>
                    <div>credlab @ gmail.com</div>
               </div>
          </div>
     </div>

);

export default Footer;