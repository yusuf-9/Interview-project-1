import React from "react";
import styles from "./Nav.module.css"
import Link from "next/link";

import Image from "next/image";

export default function DashboardNavbar() {

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary d-flex align-items-center">
            <div class="container-fluid">
                <a class="navbar-brand d-none d-lg-inline" href="#">
                    <h4>Dashboard</h4>
                </a>
                <a class="navbar-brand d-lg-none d-md-inline" href="#">
                    <Image src="/user-icon.webp" alt="" width={50} height={50} class={`${styles.user_icon} d-inline-block align-text-top`}></Image>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Schemes
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link class="dropdown-item" href="/dashboard/scheme_form">Submit Scheme</Link></li>
                                <li><Link class="dropdown-item" href="/dashboard/manage_scheme">Manage Schemes</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <a class="navbar-brand d-none d-lg-inline" href="#">
                    <Image src="/user-icon.webp" alt="" width={50} height={50} class={`${styles.user_icon} d-inline-block align-text-top`}></Image>
                </a>
                
            </div>
        </nav>
    )
}