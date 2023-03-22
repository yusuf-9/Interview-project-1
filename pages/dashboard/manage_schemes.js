import DashboardNavbar from "@/Components/Dashboard_Navbar/DashboardNavbar";
import ManageScheme from "@/Components/Manage_Schemes/ManageSchemes";
import { db } from "@/lib/db";


export default function ManageSchemes({error, data}){
    if(error){
        return (
            <>
            <div className="container my-5 text-center">
                <h1>An error Occured</h1>
            </div>
            </>
        )
    }

    return (
        <>
            <DashboardNavbar />
            <ManageScheme schemes={data}/>
        </>
    )
}

export async function getServerSideProps(){
    let queryString = "SELECT * FROM Schemes";
    try {
        const data = await db.query(queryString)
        console.log(data)
        return {
            props: {
                data: JSON.stringify(data)
            }
        }
    } catch (error) {
        return {
            props: {
                error: true
            }
        }
    }
    
}

