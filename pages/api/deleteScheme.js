import axios from "axios";
import excuteQuery, { db } from "@/lib/db";

export default async function deleteScheme(req, res) {
    let {id} = req.body
    let queryString = `DELETE FROM Schemes WHERE scheme_id = '${id}'`
    let result = await db.query(queryString)
    res.json(result)

}