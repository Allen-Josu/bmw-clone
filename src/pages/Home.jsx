import Banner from "../components/Banner"
import Find_New_car from "../assets/NxW_Home_ICON_STOCK_CAR.png"
import bookTestDrive from "../assets/Book_a_Test_Drive.png"
import Build_Your_Car from "../assets/Build_Your_Own_Car.png"
import Discription from "../components/Discription"
import "../style/Home.css"

function Home() {
  return (
    <>
      <Banner />
      {/* Tools */}

      <p className="text-center mt-5" style={{ color: "#666666", fontSize: "20px", textTransform: "uppercase" }}>Shopping Tools</p>
      <p className="text-center" style={{ color: "#262626", fontSize: "28px", fontWeight: "500", textTransform: "uppercase" }}>Find your BMW</p>
      <div className="mb-3 w-100 d-flex justify-content-evenly align-items-center Home-Shopping">
        <div className="d-flex flex-column align-items-center">
          <img src={`${Find_New_car}`} width="100%" alt="find new car" />
          <p className="text-center fs-4">Find New Car</p>
          <button className="btn px-4" style={{ border: "1px solid grey", fontWeight: "bold" }}>Search Now</button>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img src={`${bookTestDrive}`} width="100%" alt="Book Test Drive" />
          <p className="text-center fs-4">Book A Test Drive</p>
          <button className="btn px-4" style={{ border: "1px solid grey", fontWeight: "bold" }}>Request a Test Drive</button>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img src={`${Build_Your_Car}`} width="100%" alt="Build Your Car" />
          <p className="text-center fs-4">Build your Own</p>
          <button className="btn px-4" style={{ border: "1px solid grey", fontWeight: "bold" }}>Configure and Price</button>
        </div>
      </div>

      {/* Discription */}
      <div className="mt-5">
        <Discription props="ix" />
        <Discription props="offer" />
      </div>



    </>
  )
}

export default Home