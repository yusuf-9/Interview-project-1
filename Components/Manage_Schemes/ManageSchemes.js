import React, { useEffect, useState } from "react";
import styles from "./ManageSchemes.module.css"
import axios from "axios";

export default function ManageScheme({ data }) {
    const [schemes, setSchemes] = useState(JSON.parse(data))

    async function deleteScheme(x){
        const data = await axios.post("/api/deleteScheme", {id: x})
        if(data.status === 200){
            window.alert("Scheme deleted successfully")
            const row = document.getElementById(x);
            const tbody = document.getElementById("table_body")
            tbody.removeChild(row)

        }
    }

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
                        <table class="table table-striped table-hover text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Sr No</th>
                                    <th scope="col">Scheme Sategory</th>
                                    <th scope="col">Scheme Sub Category</th>
                                    <th scope="col">Scheme Title</th>
                                    <th scope="col">Scheme Start Date</th>
                                    <th scope="col">Scheme End Date</th>
                                    <th scope="col">Scheme Author</th>
                                    <th scope="col">Last modified</th>
                                    <th scope="col">Action</th>

                                </tr>
                            </thead>
                            <tbody id="table_body">
                                {schemes.map((x) => {
                                    return (
                                        <>
                                            <tr id={x.scheme_id}>

                                                <td>
                                                    {schemes.indexOf(x) + 1}
                                                </td>
                                                <td>
                                                    {x.main_category}
                                                </td>
                                                <td>
                                                    {x.sub_category}
                                                </td>
                                                <td>
                                                    {x.title}
                                                </td>
                                                <td>
                                                    {x.start_date}
                                                </td>
                                                <td>
                                                    {x.end_date}
                                                </td>
                                                <td>
                                                    Admin
                                                </td>
                                                <td>
                                                    {x.date_created}
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={()=>{deleteScheme(x.scheme_id)}}>Delete</button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    )
}