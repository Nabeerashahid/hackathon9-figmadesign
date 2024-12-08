import styles from '../styles/style.module.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";



export default function Footer () {
    return(
        <div>
            <div className={styles.footer}>
            <p className={styles.foohead}>
               copyright © 2022 by Ayeman, All rights reserved
            </p>

            <div>
                <div className={styles.iconcontainer}>
            <div className={styles.fooicon}> 
            <FaFacebookF />
            </div>

            <div className={styles.fooicon2}> 
            <FaTwitter />
            </div>
            <div className={styles.fooicon3}> 
            <FaInstagram />
            </div>
            <div className={styles.fooicon4}> 
            <FaYoutube />

            </div>
            <div className={styles.fooicon5}> 
            <FaYoutube />
            </div>

            <div className={styles.fooicon6}> 
            <FaPinterest />
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}