import { Link } from "react-router-dom"
import "../style/Style.css"
import logo from "../assets/BMW Logo 1.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons"


function Header() {
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-between align-items-center Navbar " style={{ borderBottom: "1px solid black" }}>
                <div className="d-flex align-items-center ">
                    <Link to={"/"}> <img src={logo} width="50px" alt="BML-Logo" /></Link>
                    <Link className="Navbar-link  ">Modals</Link>
                    <Link className="Navbar-link  ">Electric</Link>
                    <Link className="Navbar-link  ">Configerator</Link>
                    <Link className="Navbar-link  ">Visit Online Shop</Link>
                    <Link className="Navbar-link  ">More BMW</Link>
                </div>
                <div className="d-flex align-items-center">
                    <Link className="Navbar-link">Cart</Link>
                    <Link className="Navbar-link">Map</Link>
                    <Link className="Navbar-link">Search</Link>
                </div>

            </div>
        </div>
    )
}

export default Header