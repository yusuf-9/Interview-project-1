import React, { useEffect } from "react";
import styles from "./ManageSchemes.module.css"

export default function ManageScheme({ schemes }) {
    useEffect(() => {
        console.log(JSON.parse(schemes))
    }, [])

    return (
        <div className={`${styles.main_container} container-fluid  pt-5`}>
            <div className={`container py-2 px-4`}>
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-auto py-4">
                        <h2>Business type</h2>
                    </div>
                    <div className="col-auto">
                        <a href="#" className="mx-2 text-primary">
                            Schemes
                        </a>
                        /
                        <a href="#" className="mx-2">
                            Manage Schemes
                        </a>
                    </div>
                </div>
                <div className={`row ${styles.white_bg} ${styles.border} py-3 d-flex justify-content-between align-items-center`}>
                    <div className="col-auto">
                        <h4 className="text-primary">Center registration</h4>
                    </div>
                    <div className="col-auto">
                    </div>
                </div>
                <div className={`row ${styles.white_bg} py-3`}>
                    <div className="table-responsive">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Sr No</th>
                                    <th scope="col">Scheme Sategory</th>
                                    <th scope="col">Scheme Sub Category</th>
                                    <th scope="col">Schemes Title</th>
                                    <th scope="col">Schemes Start Date</th>
                                    <th scope="col">Schemes End Date</th>
                                    <th scope="col">Schemes Author</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Last modified</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    )
}