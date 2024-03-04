import { Outlet } from "react-router-dom"
import Navbar from "../components/header/Navbar"

function Layout(){
    
    return(
        <div className="layout">
            <Navbar />
            <Outlet/>
        </div>
    )
}

export default Layout
