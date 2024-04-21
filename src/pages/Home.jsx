import { Col, Row } from "react-bootstrap"
import Banner from "../components/Banner"
import "../style/Style.css"
import Find_New_car from "../assets/NxW_Home_ICON_STOCK_CAR.png"
import bookTestDrive from "../assets/Book_a_Test_Drive.png"
import Build_Your_Car from "../assets/Build_Your_Own_Car.png"
import Discription from "../components/Discription"

function Home() {
  return (
    <>
      <Banner />
      {/* Tools */}
      <div>
        <p className="text-center" style={{ color: "#666666", fontSize: "22px", textTransform: "uppercase" }}>Shopping Tools</p>
        <p className="text-center" style={{ color: "#262626", fontSize: "32px", fontWeight: "500", textTransform: "uppercase" }}>Find your BMW</p>
        <Row>
          <Col md={1}></Col>
          <Col md={3} className="d-flex flex-column justify-content-center align-items-center">
            <img src={`${Find_New_car}`} height="150px" alt="search-image" />
            <p>Find New Car</p>
            <button className="btn px-4 py-2" style={{ border: "1px solid grey", fontWeight: "bold" }}>Search Now</button>
          </Col>

          <Col md={4} className="d-flex flex-column justify-content-center p-5 mt-5 align-items-center">
            <img src={`${bookTestDrive}`} height="150px" alt="Book a Test Drive" />
            <p>Book a Test Drive</p>
            <button className="btn py-2 px-4" style={{ border: "1px solid grey", fontWeight: "bold" }}>Request a Test Drive</button>
          </Col>

          <Col md={3} className="d-flex flex-column justify-content-center p-5 mt-5 align-items-center">
            <img src={`${Build_Your_Car}`} height="150px" alt="" />
            <p>Build Your Own</p>
            <button className="btn py-2 px-4" style={{ border: "1px solid grey", fontWeight: "bold" }}>Configure & Price</button>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>

      {/* Discription */}
      <Discription props="ix" />
      <Discription props="offer" />


    </>
  )
}

export default Home