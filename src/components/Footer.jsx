import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


function Footer() {
  return (
    <>
      <div className="d-flex gap-4 my-4 ps-5 pt-4" style={{borderTop:"1px solid grey"}}>
        <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="/dealer">Find your BMW</a>
        <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="/dealer">All Models</a>
      </div>
      <div
        className="d-flex flex-column py-5"
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <div className="d-flex justify-content-around pt-5">
          <div className="d-flex flex-column gap-2">
            <p style={{ textTransform: "uppercase", color: "#4d4d4d", fontSize: "12px" }}>contact</p>
            <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="/dealer">Find a Dealer</a>
            <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">Request A Test Drive</a>
            <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">Carrers</a>
            <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">Contact Us</a>
          </div>
          <div className="d-flex flex-column gap-2">
            <p style={{ textTransform: "uppercase", color: "#4d4d4d", fontSize: "12px" }}>quick Links</p>
            <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="/dealer">Build your BMW</a>
            <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">BMW Financial Services</a>
            <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">BMW Safety</a>
            <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">EMI Calculator</a>
            <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">BMW Premium Selection (Used Cars)</a>
          </div>
          <div className="d-flex flex-column gap-2">
            <p style={{ textTransform: "uppercase", color: "#4d4d4d", fontSize: "12px" }}>Experiance BMW</p>
            <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="/dealer">BMW Group</a>
            <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">BMW Excellence Club</a>
            <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">BMW Motorrad</a>
            <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">Charging Network</a>
          </div>
          <div className="d-flex flex-column gap-2">
            <p style={{ textTransform: "uppercase", color: "#4d4d4d", fontSize: "12px" }}>Legal</p>
            <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="/dealer">Legal Disclaimer/Imprint</a>
            <a style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="">Privacy Policy</a>
          </div>
        </div>
        <div className="d-flex pb-5">
        </div>
        <div className="d-flex justify-content-between">
          <p className="ms-5">@BMW AG 2024</p>
          <div className="d-flex justify-content-evenly">
            <a className="me-3" style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="/dealer">Legal Disclaimer/Imprint</a>
            <a className="me-3" style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="/dealer">Legal Disclaimer/Imprint</a>
            <a className="me-5" style={{ fontSize: "14px", color: "#4d4d4d", fontWeight: "bold", textDecoration: "none" }} href="/dealer">Legal Disclaimer/Imprint</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
