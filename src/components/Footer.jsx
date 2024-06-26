import "../style/Footer.css"

function Footer() {
  return (
    <>
      <div className="d-flex gap-4 my-4 ps-5 pt-4" style={{ borderTop: "1px solid grey" }}>
        <p style={{ textTransform: "uppercase", color: "#4d4d4d", fontSize: "12px", fontWeight: "500" }}>Find Your BMW</p>
        <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="/dealer">All Models</a>
      </div>

      <div className="d-flex justify-content-around pt-5 pb-5 Footer-Links" style={{ backgroundColor: "#f6f6f6" }}>
        <div className="d-flex flex-column gap-2 " style={{ width:"250px"}}>
          <p style={{ textTransform: "uppercase", color: "#4d4d4d", fontSize: "12px" }}>contact</p>
          <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="/dealer">Find a Dealer</a>
          <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">Request A Test Drive</a>
          <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">Carrers</a>
          <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">Contact Us</a>
        </div>
        <div className="d-flex flex-column gap-2" style={{ width:"250px"}}>
          <p style={{ textTransform: "uppercase", color: "#4d4d4d", fontSize: "12px" }}>quick Links</p>
          <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="/dealer">Build your BMW</a>
          <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">BMW Financial Services</a>
          <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">BMW Safety</a>
          <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">EMI Calculator</a>
          <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">BMW Premium Selection (Used Cars)</a>
        </div>
        <div className="d-flex flex-column gap-2" style={{ width:"250px"}}>
          <p style={{ textTransform: "uppercase", color: "#4d4d4d", fontSize: "12px" }}>Experiance BMW</p>
          <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="/dealer">BMW Group</a>
          <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">BMW Excellence Club</a>
          <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">BMW Motorrad</a>
          <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">Charging Network</a>
        </div>
        <div className="d-flex flex-column gap-2" style={{ width:"250px"}}>
          <p style={{ textTransform: "uppercase", color: "#4d4d4d", fontSize: "12px" }}>Legal</p>
          <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="/dealer">Legal Disclaimer/Imprint</a>
          <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">Privacy Policy</a>
        </div>
      </div>
      <div className="d-flex ">
      </div>

      <div className="d-flex justify-content-between Footer-Legal">
        <p className="ms-5">@BMW AG 2024</p>
        <div className="d-flex justify-content-evenly">
          <a className="me-3" style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="/dealer">Legal Disclaimer/Imprint</a>
          <a className="me-3" style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="/dealer">Privacy Policy</a>
          <a className="me-5" style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="/dealer">Contact Us</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
