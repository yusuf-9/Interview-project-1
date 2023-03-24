import React, {useState} from "react";
import styles from "./Form.module.css"
import Link from "next/link";
import axios from "axios";
import { v4 } from "uuid";
import storage from "../../lib/firebase"
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';



export default function Form() {
    const [schemeId, setSchemeId] = useState(v4().slice(0, 8).toUpperCase())
    const [mainCategory, setMainCategory] = useState(null)
    const [subCategory, setSubCategory] = useState(null)
    const [title, setTitle] = useState(null)
    const [titleEng, setTitleEng] = useState(null)
    const [metaDesc, setMetaDesc] = useState(null)
    const [metaDescEng, setMetaDescEng] = useState(null)
    const [startDate, setStateDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [tags, setTags] = useState([])
    const [desc, setDesc] = useState(null)
    const [img, setImg] = useState(null)

    useState(()=>{

    }, [])

    function submitForm(e){
        e.preventDefault();
        const loader = document.getElementById("loading")
        const message = document.getElementById("message")
        loader.classList.remove("invisible");

        const upload = ref(storage, `images/${img.name}`)
            uploadBytes(upload, img).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    axios.post("/api/postSchema", {schemeId, mainCategory, subCategory, title, titleEng, metaDesc, metaDescEng, startDate, endDate, tags, desc, url}).then((x)=>{
                        if(x.data.status === "success"){
                            loader.classList.add("invisible")
                                message.classList.remove("invisible")

                        }
                    })
                    })
            })
            
        
    }

    function addTag(){
        const tag = document.getElementById("tags").value;
        setTags([...tags, tag])
        const added_tags_div = document.getElementById("added_tags")
        const button = document.createElement("button")
        button.className = "btn btn-primary mx-2"
        button.setAttribute("disabled", true)
        button.innerText = tag;
        added_tags_div.appendChild(button)

    }



    return (
        <>
            <div className={`${styles.main_container} container-fluid  pt-5`}>
                <div className={`container py-2 px-4`}>
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-auto py-4">
                            <h2>Schemes upload</h2>
                        </div>
                        <div className="col-auto">
                            <a href="#" className="mx-2 text-primary">
                                Schemes
                            </a>
                            /
                            <a href="#" className="mx-2">
                                Scheme Upload
                            </a>
                        </div>
                    </div>
                    <div className={`row ${styles.white_bg} ${styles.border} py-3 d-flex justify-content-between align-items-center`}>
                        <div className="col-auto">
                            <h4 className="text-primary">Schemes upload</h4>
                        </div>
                        <div className="col-auto">
                            <Link href="/dashboard/manage_scheme">
                            <button className="btn btn-primary">Manage Schemes</button>
                            </Link>
                        </div>
                    </div>
                    <div className={`row ${styles.white_bg} py-3`}>
                        <form onSubmit={(e)=>{submitForm(e)}} > 
                            <div className="col">
                                <div className="row mt-3">
                                    <div className="col-6 d-flex align-items-center">
                                        <span className={`${styles.labels} form-label`}>
                                            Scheme ID :
                                        </span>
                                        <input type="text" className="form-control" value={schemeId} readOnly disabled name="scheme_id" />
                                    </div>
                                    <div className="col-6">
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-6 d-flex justify-content-between align-items-center">
                                        <span className={`${styles.labels} form-label`}>
                                            Main category :
                                        </span>
                                        <select className="form-select"  name="main_category" id="main_category" onChange={(e)=>{setMainCategory(e.target.value)}}>
                                            <option value="category 1" selected>Category 1</option>
                                            <option value="category 2">Category 2</option>
                                            <option value="category 3">Category 3</option>
                                            <option value="category 4">Category 4</option>
                                            <option value="category 5">Category 5</option>
                                        </select>
                                    </div>
                                    <div className="col-6 d-flex align-items-center">
                                        <span className={`${styles.labels} form-label`}>
                                            Sub category :
                                        </span>
                                        <select className="form-select" name="sub_category" id="sub_category" onChange={(e)=>{setSubCategory(e.target.value)}} >
                                            <option value="category 1" selected>Category 1</option>
                                            <option value="category 2">Category 2</option>
                                            <option value="category 3">Category 3</option>
                                            <option value="category 4">Category 4</option>
                                            <option value="category 5">Category 5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-6 d-flex align-items-center">
                                        <span className={`${styles.labels}`}>
                                            Scheme title :</span>
                                        <input type="text" className="form-control" onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter scheme title here" name="title" required/>

                                    </div>
                                    <div className="col-6 d-flex align-items-center">
                                        <span className={`${styles.labels}`}>
                                            Scheme title (English) :</span>
                                        <input type="text" className="form-control"  onChange={(e)=>{setTitleEng(e.target.value)}} placeholder="Enter scheme title in english here" name="title_eng" required />

                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col d-flex align-items-center">
                                        <span className={`${styles.labels}`}>
                                            Meta description :</span>
                                        <input type="text" className="form-control"  onChange={(e)=>{setMetaDesc(e.target.value)}} placeholder="Enter meta description here" name="meta_desc" required />

                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col d-flex align-items-center">
                                        <span className={`${styles.labels}`}>
                                            Meta description (English) :</span>
                                        <input type="text" className="form-control" onChange={(e)=>{setMetaDescEng(e.target.value)}} placeholder="Enter meta description in english here" name="meta_desc_eng" required/>

                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-6 d-flex align-items-center">
                                        <span className={`${styles.labels}`}>
                                            Start date :</span>
                                        <input type="date" className="form-control" onChange={(e)=>{setStateDate(e.target.value)}}  name="start_date" required/>

                                    </div>
                                    <div className="col-6 d-flex align-items-center">
                                        <span className={`${styles.labels}`}>
                                            End date :</span>
                                        <input type="date" className="form-control" onChange={(e)=>{setEndDate(e.target.value)}} name="end_date" required/>

                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-6 d-flex align-items-center">
                                        <span className={`${styles.labels}`}>
                                            Tags :</span>
                                        <select className="form-select" name="tags" id="tags">
                                            <option value="Tag 1" selected>Tag 1</option>
                                            <option value="Tag 2">Tag 2</option>
                                            <option value="Tag 3">Tag 3</option>
                                            <option value="Tag 4">Tag 4</option>
                                            <option value="Tag 5">Tag 5</option>
                                        </select>
                                            
                                    </div>
                                        <div className="col-6 d-flex align-items-center">
                                        <button className="btn btn-primary" onClick={addTag}>Add tag</button>
                                        </div>
                                    <div className="col-6 d-flex align-items-center">

                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col d-flex align-items-center" id="added_tags">
                                        <span className={`${styles.labels}`}>
                                            Added tags :</span>
                                    </div>
                                    <div className="col-6 d-flex align-items-center">

                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col d-flex align-items-center">
                                        <span className={`${styles.labels}`}>
                                            Description :</span>
                                        <textarea placeholder="Write scheme description here" onChange={(e)=>{setDesc(e.target.value)}} className={`${styles.textarea} form-control`} name="desc" required ></textarea>
                                    </div>

                                </div>
                                <div className="row mt-3">
                                    <div className="col-6 d-flex align-items-center">
                                        <span className={`${styles.labels}`}>
                                            Scheme Image :</span>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" onChange={(e)=>{setImg(e.target.files[0])}} id="customFile" name="image" required/>
                                        </div>

                                    </div>
                                    <div className="col-6 d-flex align-items-center">

                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col d-flex align-items-center justify-content-center">
                                        <input type="submit" value="Submit" className="btn btn-primary mx-2"/>
                                        <input type="reset" value="Reset" className="btn btn-danger mx-2" />
                                        <div id='loading' className="lds-dual-ring invisible" ></div>
                                    </div>
                                </div>
                                <div className="container text-center invisible" id="message">
                                    <h6>Scheme added successfully</h6>
                                </div>

                            </div>
                        </form>


                    </div>

                </div>
            </div>
        </>
    )
}