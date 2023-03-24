import React, { useState } from "react";
import styles from "./Plans.module.css"
import Ad from "./advertisement.jpg"
import Image from "next/image";

export default function Plans({ data }) {
    const [schemes, setSchemes] = useState(JSON.parse(data))


    return (
        <>
            <div className="container-fluid mt-5">
                <h2>New plans</h2>
                <div className="row my-4">
                    {
                        schemes.slice(0, Math.ceil(schemes.length / 2)).map((x) => {
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-6  mt-5">
                                    <a href="#">

                                        <div class={`${styles.hover_border} card`}>
                                            <div className={`${styles.image_div} container-fluid`}>
                                                <Image class={`card-img-top ${styles.card_img}`} src={x.img} fill={true} alt="Card image cap"></Image>
                                            </div>

                                            <div class="card-body">
                                                <button className="btn btn-danger p-0 mb-2" >{x.main_category}</button>
                                                <p className={`${styles.p_width + " " + styles.text_bold} card-text`}>{x.title_eng}</p>
                                                <div className={`${styles.text_small} author_and_time d-flex my-2 justify-content-between`}>
                                                    <div>
                                                        <i class="bi bi-person mr-2"></i>
                                                        <span>Admin</span>
                                                    </div>
                                                    <div>
                                                        <i class="bi bi-clock"></i>
                                                        {x.start_date.split("-")[2] + "-" + x.start_date.split("-")[1] + "-" + x.start_date.split("-")[0].slice(2) + " to " + x.end_date.split("-")[2] + "-" + x.end_date.split("-")[1] + "-" + x.end_date.split("-")[0].slice(2)}
                                                    </div>
                                                </div>
                                                {x.tags.split(",").map((y) => {
                                                    return (
                                                        <button className="btn btn-info p-0 m-1 text-white" >{y}</button>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <a href="#">
                <div className={`container text-center my-5 ${styles.ad_div}`}>
                    <Image src={Ad} className={styles.ad}></Image>
                </div>
            </a>
            <div className="container-fluid">
                <h2>More plans</h2>
                <div className="row my-4">
                    {
                        schemes.slice(Math.ceil(schemes.length / 2)).map((x) => {
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-6  mt-5">
                                    <a href="#">

                                        <div class={`${styles.hover_border} card`}>
                                        <div className={`${styles.image_div} container-fluid`}>
                                                <Image class={`card-img-top ${styles.card_img}`} src={x.img} fill={true} alt="Card image cap"></Image>
                                            </div>

                                            <div class="card-body">
                                                <button className="btn btn-danger p-0 mb-2" >{x.main_category}</button>
                                                <p className={`${styles.p_width + " " + styles.text_bold} card-text`}>{x.title_eng}</p>
                                                <div className={`${styles.text_small} author_and_time d-flex my-2 justify-content-between`}>
                                                    <div>
                                                        <i class="bi bi-person mr-2"></i>
                                                        <span>Admin</span>
                                                    </div>
                                                    <div>
                                                        <i class="bi bi-clock"></i>
                                                        {x.start_date.split("-")[2] + "-" + x.start_date.split("-")[1] + "-" + x.start_date.split("-")[0].slice(2) + " to " + x.end_date.split("-")[2] + "-" + x.end_date.split("-")[1] + "-" + x.end_date.split("-")[0].slice(2)}
                                                    </div>
                                                </div>
                                                {x.tags.split(",").map((y) => {
                                                    return (
                                                        <button className="btn btn-info p-0 m-1 text-white" >{y}</button>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <a href="#">

                <div className={`container text-center my-5 ${styles.ad_div}`}>
                    <Image src={Ad} className={styles.ad}></Image>
                </div>
            </a>

        </>
    )
}