import Logo from '../resources/lab_logo.svg';
import styles from './header.module.css'


const Header = () => (
     <div className={styles.headerContainer}>
          <Logo className={styles.logo}/>
          <div className={styles.menu}>
               <div>About Us</div>
               <div>Publications</div>
          </div>
     </div>

);

export default Header;