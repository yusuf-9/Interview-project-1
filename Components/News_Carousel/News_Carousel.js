import React, { useEffect } from "react";
import styles from "./News_Carousel.module.css";


export default function News_Carousel() {

    
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      let container = document.getElementById("news_container")
      container.style.marginTop = "2rem"
      
    })
  }, [])





    return (
        <>
            <div className="container" id="news_container">
                <div id="carouselExampleAutoplaying" class={`${styles.carousel} carousel slide carousel-dark mb-5`} data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="d-flex justify-content-between">
                                <h4 className="text-danger text-bold">
                                    Live news
                                </h4>
                                <div>
                                    <i class="bi bi-twitter mx-1"></i>
                                    <i class="bi bi-facebook mx-1"></i>
                                    <i class="bi bi-whatsapp mx-1"></i>
                                    <i class="bi bi-instagram mx-1"></i>
                                    <i class="bi bi-youtube mx-1"></i>
                                </div>
                            </div>
                            <h6>
                                Following are the various online batches/courses available at Sachin Dhawale Academy, Pune
                            </h6>
                        </div>
                        <div class="carousel-item">
                            <div className="d-flex justify-content-between">
                                <h4 className="text-danger text-bold">
                                    Live news
                                </h4>
                                <div>
                                    <i class="bi bi-twitter mx-1"></i>
                                    <i class="bi bi-facebook mx-1"></i>
                                    <i class="bi bi-whatsapp mx-1"></i>
                                    <i class="bi bi-instagram mx-1"></i>
                                    <i class="bi bi-youtube mx-1"></i>
                                </div>
                            </div>
                                <h6>
                                    Following are the various online batches/courses available at Sachin Dhawale Academy, Pune
                                </h6>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}
