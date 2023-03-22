import React, {useEffect} from "react";
import styles from "./header.module.css";


export default function Header() {

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      let navbar = document.getElementById("navbar")
      navbar.classList.add("fixed-top")
      
    })
  }, [])


  let date = new Date();
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return (
    <>
      <header className={`container-fluid d-flex align-items-center py-2 justify-content-between ${styles.border} d-none d-lg-flex`}>
        <span>
          <i className="bi bi-clock mx-2"></i>
          {days[date.getDay()] + ", " + monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()}
        </span>
        <div className={styles.news}>
          <span className={`${styles.schemes_banner} mx-2`}>
            Latest schemes
          </span>
          <a href="#" className="text-danger ">
          Loan based schemes for Kamcharis
          </a>
        </div>
        <div className="d-flex justify-content-center">
          <a href="https://purainfotech.com/SuperAdmin_HX46DTM2V1IA">
          <button type="button" className={`btn btn-danger ${styles.low_padding} mx-2`}>Super Login</button>
          </a>
          <a href="https://purainfotech.com/UsersLogin_ZR8E7NGW35CS">
          <button type="button" className={`btn btn-danger ${styles.low_padding} mx-2`}>User Login</button>
          </a>
          <a href="https://purainfotech.com/Registration_Form.aspx">
          <button type="button" className={`btn btn-info text-white ${styles.low_padding} mx-2`}>Sign up</button>
          </a>
          <a href="#" className="mx-1">
          <i class="bi bi-twitter"></i>
          </a>
          <a href="#" className="mx-1">
          <i class="bi bi-facebook "></i>
          </a>
          <a href="#" className="mx-1">
          <i class="bi bi-whatsapp "></i>
          </a>
          <a href="#" className="mx-1">
          <i class="bi bi-instagram"></i>
          </a>
          <a href="#" className="mx-1">
          <i class="bi bi-youtube"></i>
          </a>
        </div>
      </header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5" id="navbar">
      <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item text-white">
              <a class="nav-link text-white" href="#">Home<span class="sr-only"></span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About us
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">About us</a>
                <a class="dropdown-item" href="#">Terms and conditions</a>
                <a class="dropdown-item" href="#">Privacy policy</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Banking services
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                
                <a class="dropdown-item" href="#">Banking</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Insurance servies
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                
                <a class="dropdown-item" href="#">Insurance</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Financial services
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                
                <a class="dropdown-item" href="#">Finances</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Agriculture 
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                
                <a class="dropdown-item" href="#">Schemes</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Scheduled tribe
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                
                <a class="dropdown-item" href="#">Info</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Others
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item text-white">
              <a class="nav-link text-white" href="#">Contact<span class="sr-only"></span></a>
            </li>

          </ul>
        </div>
      </nav>
    </>
  )
}
