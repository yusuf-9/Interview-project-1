import React from "react";
import styles from "./Footer.module.css"
import Image from "next/image";
import Logo from "./logo.jpg"

export default function Footer() {


    return (
        <footer className={`${styles.footer} container-fluid`}>
            <div className="row d-flex justify-content-evenly d-sm-flex d-md-flex text-center pb-3">
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                    <div className={styles.logo_div}>
                        <Image src={Logo} className={styles.logo}></Image>
                    </div>
                    <p className="text-white mt-3">
                        Perferendis rendae fugia rchite beatae repderit vitae recaae debitis ae facere quidem animi placeat mentur at vltib uod numm partur libero tum.
                    </p>
                    <div className="mt-3">
                        <a className={`${styles.border} mx-1 my-1`} href="https://www.facebook.com/people/Shri-Durgashankar-Multistate/100084520129929/"> 
                        <span>
                            <i class={`${styles.font_size} text-white bi bi-twitter mx-1`}></i>
                        </span>
                        </a>
                        <a  className={`${styles.border} mx-1 my-1`} href="#">
                        <span >
                            <i class={`${styles.font_size}  text-white bi bi-facebook mx-1 my-1`}></i>
                        </span>
                        </a>
                        <a  className={`${styles.border} mx-1 my-1`} href="https://api.whatsapp.com/send/?phone=9763831830&text&type=phone_number&app_absent=0/">
                        <span >
                            <i class={`${styles.font_size}  text-white bi bi-whatsapp mx-1 my-1 `}></i>
                        </span>
                        </a>
                        <a  className={`${styles.border} mx-1 my-1`} href="https://www.instagram.com/shri_durgashankar_multistate/">
                        <span >
                            <i class={`${styles.font_size}  text-white bi bi-instagram mx-1 my-1`}></i>
                        </span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4 text-white">
                    <h5>Important links</h5>
                    <ul className={`d-flex flex-column mt-3 ${styles.ul}`}>
                        <a href="#" >
                            <li className={styles.li}>Link 1</li>
                        </a>
                        <a href="#">
                            <li className={styles.li}>Link 2</li>
                        </a>
                        <a href="#">
                            <li className={styles.li}>Link 3</li>
                        </a>
                        <a href="#">
                            <li className={styles.li}>Link 4</li>
                        </a>
                        <a href="#">
                            <li className={styles.li}>Link 5</li>
                        </a>
                        <a href="#">
                            <li className={styles.li}>Link 6</li>
                        </a>
                        <a href="#">
                            <li className={styles.li}>Privacy policy</li>
                        </a>
                        <a href="#">
                            <li className={styles.li}>Terms and conditions</li>
                        </a>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4 text-white">
                    <h5 className="mb-5">Company address</h5>
                    <p>
                        <strong>Address: </strong>FHASDF ASDJFLSDF ;ASDKF; SDF;LSAD;FLKASD ;FLKSAD;L
                    </p>

                    <p>
                        <strong>Telephone: </strong> 1234567890 / 0241-13254
                    </p>
                    <p>
                        <strong>Email: </strong> Info@example.in
                    </p>

                </div>
            </div>
            <div className={`${styles.upper_border} text-center text-white py-4`}>
                Copyright &copy; 2022 all rights reserved
            </div>
        </footer >
    )
}