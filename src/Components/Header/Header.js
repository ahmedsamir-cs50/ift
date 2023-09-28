import React from "react";
import vid from "../Header/production.mp4";
import "../Header/Header.css";
import { Col, Container, Row } from "react-bootstrap";

import CountUp from "react-countup";
import { companyData } from "./Data";
const Header = () => {
  return (
    <>
      <div>
        <video src={vid} loop autoPlay muted className="video"/>{" "}
        <Container className="header ">
          <div className="header-text">
            <h3>We Are A Leading Animal Health Company </h3>
            <h1>Developing a Healthier & more Gratifying World</h1>
          </div>
         <Row>
          {
           companyData.map((item,index)=>{
            return(
              <Col sm={12} md={3} key={index} className=" company-status d-flex flex-row justify-content-center">
<div><CountUp className="count " start={0} end={item.num} duration={9} /></div>
<div className="mx-2">{item.type}</div>
</Col>
            )
           }) 
          }

         </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
//  <CountUp className="count " start={0} end={480} duration={5} />
{/* <div className="company-status d-flex justify-content-evenly flex-row  ">
<div className="d-flex justify-content-evenly ">
  <div >
    <CountUp className="count " start={0} end={480} duration={5} />
  </div>
 <div> <p> Employees</p></div>
 </div>
</div>
<div className="d-flex justify-content-evenly ">
  <div>
    <CountUp  className="count" start={0} end={230} duration={5} />{" "}
  </div>
  <div><p>Vetrenarians</p></div>
</div>
<div className="d-flex justify-content-evenly ">
  <div>
    <CountUp  className="count" start={0} end={50} duration={5} />{" "}
  </div>
  <div><p>Agricultural Engineers</p></div>
</div>
<div className="d-flex justify-content-evenly ">
  <div className="mx-2"> 5,000m2</div>
 <div> <p>  Warehouse</p></div>

</div> */}