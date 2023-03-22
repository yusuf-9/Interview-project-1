import DashboardNavbar from "@/Components/Dashboard_Navbar/DashboardNavbar";
import ManageScheme from "@/Components/Manage_Schemes/ManageSchemes";
import { db } from "@/lib/db";


export default function ManageSchemes(){
    

    return (
        <>
            <DashboardNavbar />
            <ManageScheme />
        </>
    )
}



