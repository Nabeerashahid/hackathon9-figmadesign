import Image from 'next/image';
import styles from '../styles/style.module.css';
import { PiHamburgerLight } from "react-icons/pi";
import { PiCookie } from "react-icons/pi";
import { PiWineLight } from "react-icons/pi";

export default function Category() {
    return (
        <div className={styles.category}>
            <p className={styles.categorypara}>
                <i>Food Category</i>
            </p>
            <h3 className={styles.heading}><span>Ch</span>oose Food Iteam</h3>

            <div className={styles.CategoryImages}>
                <div className={styles.Catimage1}>
                    <Image
                        src="/images/chinese.jpg"
                        alt='chinese food'
                        width={150}
                        height={150}
                        className={styles.chinese1}
                    />

                    <Image
                        src="/images/burger.jpg"
                        alt='chinese food'
                        width={150}
                        height={150}
                        className={styles.chinese2}
                    />

                    <Image
                        src="/images/food3.jpg"
                        alt='chinese food'
                        width={150}
                        height={150}
                        className={styles.chinese3}
                    />

                    <Image
                        src="/images/coco.jpg"
                        alt='chinese food'
                        width={150}
                        height={150}
                        className={styles.chinese4}
                    />
                </div>

                <div className={styles.group3}>
                    <p>Save 30%</p>
                </div>
                <div className={styles.group4}>
                    <p>Fast Food Dish</p>
                </div>


                <div className={styles.image3}>
                    <Image
                        src="/images/unsplash5.jpg"
                        alt='main Image'
                        width={200}
                        height={200}
                        className={styles.unsplash5}
                    />

                    <Image
                        src="/images/burger.jpg"
                        alt='chinese food'
                        width={150}
                        height={150}
                        className={styles.burger2}
                    />

                    <Image
                        src="/images/broast.jpg"
                        alt='chinese food'
                        width={150}
                        height={150}
                        className={styles.broast}
                    />

                    <Image
                        src="/images/unsplash6.jpg"
                        alt='chinese food'
                        width={150}
                        height={150}
                        className={styles.unsplash6}
                    />

                    <Image
                        src="/images/coffee.jpg"
                        alt='chinese food'
                        width={150}
                        height={150}
                        className={styles.coffee}
                    />

                    <Image
                        src="/images/fox.jpg"
                        alt='chinese food'
                        width={150}
                        height={150}
                        className={styles.fox}
                    />

                    <div className={styles.categoryText}>
                        <p className={styles.choose}> <i>Why Choose us</i></p>
                        <h3 className={styles.categoryHeading}> <span>Ex</span>ta ordinary taste And Experienced </h3>

                        <p className={styles.categorypara}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

                        <div className={styles.i}>
                            <PiHamburgerLight />

                        </div>
                        <div className={styles.i_para}>
                            Fast Food
                        </div>
                        <div className={styles.i2}>
                            <PiCookie />
                        </div>
                        <div className={styles.i_para2}>
                            Lunch
                        </div>
                        <div className={styles.i3}>
                            <PiWineLight />
                        </div>
                        <div className={styles.i_para3}>
                            Dinner
                        </div>

                        <div className={styles.years}>
                            <p className={styles.orange1}> 30+ </p>
                           <p className={styles.smpara}>
                            Years Of
                           </p>
                           <h3 className={styles.lgpara}>Experience</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}