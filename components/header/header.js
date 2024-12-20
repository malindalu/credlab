import Logo from '../../public/lab_logo.svg';
import styles from './header.module.css'


const Header = () => (
     <div className={styles.headerContainer}>
          <a href="/">  
               <Logo href="/" className={styles.logo} />
          </a>
          <div className={styles.menu}>
               <a href="/about">About Us</a>
               <a href="/publications">Publications</a>
               <a href="/gallery">Gallery</a>
          </div>
     </div>

);

export default Header;