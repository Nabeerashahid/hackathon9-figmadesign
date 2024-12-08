import Image from 'next/image';
import styles from '../styles/style.module.css';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

export default function Hero() {
    return(
        <div className={styles.hero}>
            <div className={styles.images}>
                <Image
                 src="/images/Rectangle 8926.jpg"
                 alt='rectangle-image'
                 width={280}
                 height={280}
                 className={styles.image1}
                />

                <Image
                 src="/images/unsplash.jpg"
                 alt='rectangle-image'
                 width={50}
                 height={50}
                 className={styles.image2}
                />

                <Image
                 src="/images/unsplash2.jpg"
                 alt='rectangle-image'
                 width={80}
                 height={80}
                 className={styles.image3}
                />

                <Image
                 src="/images/Rectangle 8928.jpg"
                 alt='rectangle-image'
                 width={70}
                 height={70}
                 className={styles.image4}
                />

                <div className={styles.hex}>
                 </div>

                 <div className={styles.leaf}>
                   <Image
                   src="/images/image 68.jpg"
                   alt='rectangle-image'
                   width={200}
                   height={150}
                   className={styles.image5}
                  />
                    </div>

                    
            </div>

                    <div className={styles.icon2}>
                        <FaTwitter />
                    </div>

                    <div className={styles.icon3}>
                        <FaFacebookF />
                    </div>
                    
                    <div className={styles.icon4}>
                    <FaPinterestP />
                </div>

                <div className={styles.line}>
                
            </div>

            <div className={styles.line2}>
                
            </div>
            
            <div className={styles.text}>
                <p className={styles.text1}> 
                 <i> Its Quick and Amusing </i>
                </p>
                <h2 className={styles.head2}><span>Th</span>e Art Of Speed food Quality</h2>
              
                <p className={styles.text2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Varius sed pharetra dictum neque massa congue </p>
            
                <button className={styles.btn}>
                    See Menu
                </button>
            </div>
            
            
                      
        </div>
    )
}