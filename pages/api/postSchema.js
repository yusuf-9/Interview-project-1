import axios from "axios";
import excuteQuery, { db } from "@/lib/db";


export default async function postSchema(req, res) {
    let date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let date_created = monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
    const body = req.body
    console.log(body)
    let tags = body.tags.join(", ")
    let queryString = `INSERT INTO Schemes(scheme_id, main_category, sub_category, title, title_eng, meta_description, meta_description_eng, start_date, end_date, tags, description, img, date_created, active_status) VALUES('${body.schemeId}', '${body.mainCategory}', '${body.subCategory}', '${body.title}', '${body.titleEng}', '${body.metaDesc}', '${body.metaDescEng}', '${body.startDate}', '${body.endDate}', '${body.tags}', '${body.desc}', '${body.url}', '${date_created}', 1)`;
    try {
        db.query(queryString, function (err, result) {
            if (err) {
                return res.json({ status: "failed" })
            }
            else {
                return res.json({ status: "success" })
            }
        })
    } catch (error) {
        return res.json({ status: "failed with error" })
    }

}