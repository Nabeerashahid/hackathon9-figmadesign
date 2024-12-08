
import styles from '../styles/style.module.css';
import { CiSearch } from "react-icons/ci";
import { PiHandbagBold } from "react-icons/pi";
export default function Navbar() {
    return(
        <div className={styles.body} >
            
             <h3 className={styles.heading1}><span>Food</span>tuck</h3>

             <div className={styles.navbar}>
             <nav className={styles.nav}>
                <ul> 
                    <li>
                        <a href="#"> Home </a>
                    </li>
                    <li>
                        <a href="#"> Menu </a>
                    </li>
                    <li>
                        <a href="#"> Blog </a>
                    </li>
                    <li>
                        <a href="#"> Pages </a>
                    </li>
                    <li>
                        <a href="#"> About </a>
                    </li>
                    <li>
                        <a href="#"> Shop </a>
                    </li>
                    <li>
                        <a href="#"> Contact </a>
                    </li>
                </ul>
                
             </nav>

             <div className={styles.search}> 
                <input className={styles.input} type='text' placeholder='Search...'></input>
                <div className={styles.icon}>
                <CiSearch />
                </div>
             </div>
             <div className={styles.bagicon}>
             <PiHandbagBold />
             </div>
             </div>
            
        </div>
    )
}