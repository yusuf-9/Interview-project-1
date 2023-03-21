import React from "react";
import styles from "./Plans.module.css"
import cardImg1 from "./loan.jpg"
import cardImg2 from "./navy.webp"
import Ad from "./advertisement.jpg"
import Image from "next/image";

export default function Plans() {


    return (
        <>
            <div className="container-fluid mt-5">
                <h2>New plans</h2>
                <div className="row my-4">
                    <div className="col-xl-3 col-lg-4 col-md-6 mt-5">
                        <a href="#">

                            <div class="card">
                                <Image class={`card-img-top ${styles.card_img}`} src={cardImg1} alt="Card image cap"></Image>

                                <div class="card-body">
                                    <button className="btn btn-danger p-0 mb-2">Banking servies</button>
                                    <p class="card-text">Loan Based Schemes for Safai Karamcharis - Education Loan Scheme (ELS)</p>
                                    <div className="author_and_time d-flex my-2 justify-content-between">
                                        <div>
                                            <i class="bi bi-person mr-2"></i>
                                            <span>Admin</span>
                                        </div>
                                        <div>
                                            <i class="bi bi-clock"></i>
                                            31-Dec-22 to 24-Mar-23
                                        </div>
                                    </div>
                                    <button className="btn btn-info p-0 m-1 text-white">Minorities</button>
                                    <button className="btn btn-info p-0 m-1 text-white">NRI</button>
                                    <button className="btn btn-info p-0 m-1 text-white">Scheduled Tribe</button>
                                    <button className="btn btn-info p-0 m-1 text-white">Scheduled Caste</button>
                                    <button className="btn btn-info p-0 m-1 text-white">Labor</button>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6  mt-5">
                        <a href="#">

                            <div class="card">

                                <Image class={`card-img-top ${styles.card_img}`} src={cardImg1} alt="Card image cap"></Image>

                                <div class="card-body">
                                <button className="btn btn-danger p-0 mb-2">Banking servies</button>
                                    <p class="card-text">Loan Based Schemes for Safai Karamcharis - Education Loan Scheme (ELS)</p>
                                    <div className="author_and_time d-flex my-2 justify-content-between">
                                        <div>
                                            <i class="bi bi-person mr-2"></i>
                                            <span>Admin</span>
                                        </div>
                                        <div>
                                            <i class="bi bi-clock"></i>
                                            31-Dec-22 to 24-Mar-23
                                        </div>
                                    </div>
                                    <button className="btn btn-info p-0 m-1 text-white">Minorities</button>
                                    <button className="btn btn-info p-0 m-1 text-white">NRI</button>
                                    <button className="btn btn-info p-0 m-1 text-white">Scheduled Tribe</button>
                                    <button className="btn btn-info p-0 m-1 text-white">Scheduled Caste</button>
                                    <button className="btn btn-info p-0 m-1 text-white">Labor</button>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6  mt-5">
                        <a href="#">

                            <div class="card">
                                <Image class={`card-img-top ${styles.card_img}`} src={cardImg1} alt="Card image cap"></Image>

                                <div class="card-body">
                                <button className="btn btn-danger p-0 mb-2">Banking servies</button>
                                    <p class="card-text">Loan Based Schemes for Safai Karamcharis - Education Loan Scheme (ELS)</p>
                                    <div className="author_and_time d-flex my-2 justify-content-between">
                                        <div>
                                            <i class="bi bi-person mr-2"></i>
                                            <span>Admin</span>
                                        </div>
                                        <div>
                                            <i class="bi bi-clock"></i>
                                            31-Dec-22 to 24-Mar-23
                                        </div>
                                    </div>
                                    <button className="btn btn-info p-0 m-1 text-white">Minorities</button>
                                    <button className="btn btn-info p-0 m-1 text-white">NRI</button>
                                    <button className="btn btn-info p-0 m-1 text-white">Scheduled Tribe</button>
                                    <button className="btn btn-info p-0 m-1 text-white">Scheduled Caste</button>
                                    <button className="btn btn-info p-0 m-1 text-white">Labor</button>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col mt-5">
                        <a href="#">

                            <div class="card">
                                <Image class={`card-img-top ${styles.card_img}`} src={cardImg1} alt="Card image cap"></Image>

                                <div class="card-body">
                                <button className="btn btn-danger p-0 mb-2">Banking servies</button>
                                    <p class="card-text">Loan Based Schemes for Safai Karamcharis - Education Loan Scheme (ELS)</p>
                                    <div className="author_and_time d-flex my-2 justify-content-between">
                                        <div>
                                            <i class="bi bi-person mr-2"></i>
                                            <span>Admin</span>
                                        </div>
                                        <div>
                                            <i class="bi bi-clock"></i>
                                            31-Dec-22 to 24-Mar-23
                                        </div>
                                    </div>
                                    <button className="btn btn-info p-0 m-1 text-white">Minorities</button>
                                    <button className="btn btn-info p-0 m-1 text-white">NRI</button>
                                    <button className="btn btn-info p-0 m-1 text-white">Scheduled Tribe</button>
                                    <button className="btn btn-info p-0 m-1 text-white">Scheduled Caste</button>
                                    <button className="btn btn-info p-0 m-1 text-white">Labor</button>
                                </div>
                            </div>
                        </a>
                    </div>
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
                    <div className="col-xl-3 col-lg-4 col-md-6 mt-5">
                        <a href="#">

                        <div class="card">
                            <Image class={`card-img-top ${styles.card_img}`} src={cardImg2} alt="Card image cap"></Image>

                            <div class="card-body">
                            <button className="btn btn-danger p-0 mb-2">CSC center</button>
                                    <p class="card-text">Indian Naval Agniveer SSR And MR Admit Card 2023 Download Link Available</p>
                                <div className="author_and_time d-flex my-2 justify-content-between">
                                    <div>
                                        <i class="bi bi-person mr-2"></i>
                                        <span>Admin</span>
                                    </div>
                                    <div>
                                        <i class="bi bi-clock"></i>
                                        31-Dec-22 to 24-Mar-23
                                    </div>
                                </div>
                                <button className="btn btn-info p-0 m-1 text-white">Minorities</button>
                                <button className="btn btn-info p-0 m-1 text-white">NRI</button>
                                <button className="btn btn-info p-0 m-1 text-white">Scheduled Tribe</button>
                                <button className="btn btn-info p-0 m-1 text-white">Scheduled Caste</button>
                                <button className="btn btn-info p-0 m-1 text-white">Labor</button>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mt-5">
                    <a href="#">
                            
                        <div class="card">
                            <Image class={`card-img-top ${styles.card_img}`} src={cardImg2} alt="Card image cap"></Image>

                            <div class="card-body">
                            <button className="btn btn-danger p-0 mb-2">CSC center</button>
                                    <p class="card-text">Indian Naval Agniveer SSR And MR Admit Card 2023 Download Link Available</p>
                                <div className="author_and_time d-flex my-2 justify-content-between">
                                    <div>
                                        <i class="bi bi-person mr-2"></i>
                                        <span>Admin</span>
                                    </div>
                                    <div>
                                        <i class="bi bi-clock"></i>
                                        31-Dec-22 to 24-Mar-23
                                    </div>
                                </div>
                                <button className="btn btn-info p-0 m-1 text-white">Minorities</button>
                                <button className="btn btn-info p-0 m-1 text-white">NRI</button>
                                <button className="btn btn-info p-0 m-1 text-white">Scheduled Tribe</button>
                                <button className="btn btn-info p-0 m-1 text-white">Scheduled Caste</button>
                                <button className="btn btn-info p-0 m-1 text-white">Labor</button>
                            </div>
                        </div>
                            </a>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mt-5">
                    <a href="#">
                            
                        <div class="card">
                            <Image class={`card-img-top ${styles.card_img}`} src={cardImg2} alt="Card image cap"></Image>

                            <div class="card-body">
                            <button className="btn btn-danger p-0 mb-2">CSC center</button>
                                    <p class="card-text">Indian Naval Agniveer SSR And MR Admit Card 2023 Download Link Available</p>
                                <div className="author_and_time d-flex my-2 justify-content-between">
                                    <div>
                                        <i class="bi bi-person mr-2"></i>
                                        <span>Admin</span>
                                    </div>
                                    <div>
                                        <i class="bi bi-clock"></i>
                                        31-Dec-22 to 24-Mar-23
                                    </div>
                                </div>
                                <button className="btn btn-info p-0 m-1 text-white">Minorities</button>
                                <button className="btn btn-info p-0 m-1 text-white">NRI</button>
                                <button className="btn btn-info p-0 m-1 text-white">Scheduled Tribe</button>
                                <button className="btn btn-info p-0 m-1 text-white">Scheduled Caste</button>
                                <button className="btn btn-info p-0 m-1 text-white">Labor</button>
                            </div>
                        </div>
                            </a>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mt-5">
                    <a href="#">
                            
                        <div class="card">
                            <Image class={`card-img-top ${styles.card_img}`} src={cardImg2} alt="Card image cap"></Image>

                            <div class="card-body">
                            <button className="btn btn-danger p-0 mb-2">CSC center</button>
                                    <p class="card-text">Indian Naval Agniveer SSR And MR Admit Card 2023 Download Link Available</p>
                                <div className="author_and_time d-flex my-2 justify-content-between">
                                    <div>
                                        <i class="bi bi-person mr-2"></i>
                                        <span>Admin</span>
                                    </div>
                                    <div>
                                        <i class="bi bi-clock"></i>
                                        31-Dec-22 to 24-Mar-23
                                    </div>
                                </div>
                                <button className="btn btn-info p-0 m-1 text-white">Minorities</button>
                                <button className="btn btn-info p-0 m-1 text-white">NRI</button>
                                <button className="btn btn-info p-0 m-1 text-white">Scheduled Tribe</button>
                                <button className="btn btn-info p-0 m-1 text-white">Scheduled Caste</button>
                                <button className="btn btn-info p-0 m-1 text-white">Labor</button>
                            </div>
                        </div>
                            </a>
                    </div>
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