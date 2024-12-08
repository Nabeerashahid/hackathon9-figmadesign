
import Image from 'next/image';
import styles from '../styles/style.module.css';
import { FaCheck } from "react-icons/fa";
export default function About() {
    return (
        
        <div className={styles.about}>
            <Image
                src="/images/egg.jpg"
                alt='egg picture'
                width={100}
                height={100}
                className={styles.eggimage}
            />
        


            <div className={styles.subimage}>
                <Image
                    src="/images/food1.jpg"
                    alt="food picture"
                    width={100}
                    height={150}
                    className={styles.foodimage}
                />

            
            <Image
                src="/images/food2.jpg"
                alt='food picture'
                width={100}
                height={100}
                className={styles.food2image}
            />

</div>
            <div className={styles.group1}>
           <p className={styles.para}> <i> about us </i></p>
           <h1 className={styles.foodyhead}><span>We</span> Create the best foody product
</h1>

           <p className={styles.foodyhead2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

           <div className={styles.check}>
           <FaCheck />
           </div>

           <p className={styles.text2}>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            
      
            <div className={styles.check2}>
           <FaCheck />
           </div>

           <p className={styles.text3}> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
           

           <div className={styles.check3}>
           <FaCheck />
           </div>

           <p className={styles.text4}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
           
            <button className={styles.btn2}> Read More </button>
           </div>
        </div>

    )
}