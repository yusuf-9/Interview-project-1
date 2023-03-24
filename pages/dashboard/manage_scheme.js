import DashboardNavbar from "@/Components/Dashboard_Navbar/DashboardNavbar";
import ManageScheme from "@/Components/Manage_Schemes/ManageSchemes";
import { db } from "@/lib/db";


export default function ManageSchemes(props){

    return (
        <>
            <DashboardNavbar />
            <ManageScheme data={props.data}/>
        </>
    )
}

export async function getServerSideProps(){
    await db.connect()
    let queryString = "SELECT * from Schemes"
    const response = await db.query(queryString)
    return {
        props: {
            data: JSON.stringify(response)
        }
    }
}