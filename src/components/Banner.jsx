import Header from "./Header"
import { Link } from "react-router-dom"
import "../style/Style.css"
// import bg from "../assets/BMW iX (i20).png"


function Banner() {
    return (
        <>
            <div className="d-flex justify-content-center flex-column" >
                <Link className="Banner-image links" >
                    <Header />
                    <p className="ms-5 ps-5 pt-3 fs-5" style={{ color: "white" }}>Sheer Driving Pleasure</p>
                    <div className="d-flex flex-column mt-5 " style={{ maxWidth: "500px", marginLeft: "5%" }}>
                        <p style={{ fontSize: "20px", color: "white" }}>The new all electric </p>
                        <h1 style={{ fontSize: "50px", color: "white" }}>BMW iX Drive 50</h1>
                        <p style={{ fontSize: "20px", color: "white" }}>Stay ahead of the curve</p>
                        <button className="btn btn-primary w-75">Discover Now</button>
                    </div>
                </Link>
            </div >

        </>
    )
}

export default Banner