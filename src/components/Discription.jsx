/* eslint-disable react/prop-types */
import { Col, Row } from "react-bootstrap"
import data from "../data/data.json"

function Discription({props}) {
      return (
            <>
                  <div className="my-4 px-5">
                        <Row>
                              <Col md={6}  >
                                    <img src={props=="ix"?`${data.ix["img"]}`:`${data.offer["img"]}`} width="100%" alt="" />
                              </Col>
                              <Col md={6} >
                                    <p  style={{ textTransform: "uppercase", color: "#4d4d4d", fontSize: "20px", fontWeight: "300" }}>{props=="ix"?`${data.ix["title"]}`:`${data.offer["title"]}`}</p>
                                    <p style={{ textTransform: "uppercase", color: "#4d4d4d", fontSize: "24px", fontWeight: "500" }}>{props=="ix"?`${data.ix["subtitle"]}`:`${data.offer["subtitle"]}`}</p>
                                    <p style={{  color: "#121111", fontSize: "18px", fontWeight: "250" }}>{props=="ix"?`${data.ix["discripton"]}`:`${data.offer["discripton"]}`}</p>
                                    <button className="btn py-3 px-4" style={{ border: "1px solid grey", fontWeight: "bold" }}>Know More</button>
                              </Col>
                        </Row>
                  </div>
            </>
      )
}

export default Discription