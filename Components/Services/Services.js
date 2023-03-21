import React from "react";
import styles from "./Services.module.css"
import ServicesImg from "./services.webp"
import bankingImg from "./banking.webp"
import financialImg from "./financial.jpg"
import insuranceImg from "./insurance.webp"
import ScheduledImg from "./poverty-1.jpg"
import Image from "next/image";


export default function Services() {



    return (
        <div className={`container-fluid py-2 ${styles.services_div}`}>
            <div className="d-flex justify-content-between">
                <h2 className="text-black">
                    Our Services
                </h2>
                <a href="https://purainfotech.com/Category_ListPage">
                <button className="btn btn-primary">View all</button>
                </a>
            </div>
            <div className="row my-4 justify-content-center text-center">
                <div className="col">
                    <a href="#">
                    <Image src={bankingImg} className={styles.image}></Image>
                    <h4>Banking services</h4>
                    </a>
                </div>
                <div className="col">
                <a href="#">

                <Image src={insuranceImg} className={styles.image}></Image>
                    <h4>Insurance services</h4>
                    </a>
                </div>
                <div className="col">
                <a href="#">

                <Image src={financialImg} className={styles.image}></Image>
                    <h4>Financial services</h4>
                    </a>
                </div>
                <div className="col">

                <a href="#">

                <Image src={ServicesImg} className={styles.image}></Image>
                    <h4>Agriculture</h4>
                    </a>
                </div>
            <div className="col">
            <a href="#">

            <Image src={ScheduledImg} className={styles.image}></Image>
                <h4>Scheduled tribe</h4>
                </a>
            </div>
            </div>
        </div>
    )

}