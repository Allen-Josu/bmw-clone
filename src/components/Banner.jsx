import Header from "./Header"
import { Link } from "react-router-dom"
import { Col, Row } from "react-bootstrap"


function Banner() {
    return (
        <>
            <div className="d-flex Banner justify-content-center flex-column " >
                <Link className="Banner-image links" >
                    <Header />
                    <p className="ms-5 ps-5 pt-3 fs-5">Sheer Driving Pleasure</p>
                    <Row>
                        <Col md={1}></Col>
                        <Col md={4}>
                            <p>The new all electric </p>
                            <h1>BMW iX Drive 50</h1>
                            <p>Stay ahead of the curve</p>
                            <button className="btn btn-primary">Discover Now</button>
                        </Col>
                    </Row>
                </Link>
            </div >

        </>
    )
}

export default Banner