import React from "react";
import equality_image from "../assets/image_asset/equality.jpg";
import woen_planting from "../assets/image_asset/women_plantin.jpeg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MDBBtn } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

function HomeScreen() {
  return (
    <div className="content">
      <section className="home_section">
        {/* <h1>This is from home page</h1> */}
        <Row xs={1} md={2} className="home_card">
          <Col>
            <Card className="">
              <Card.Img
                variant="top"
                src={equality_image}
                className="card_image"
              />
              <Card.Body>
                <Card.Title>Manage your Group</Card.Title>
                <Card.Text>
                  Come together with distant case study group, discus and share
                  ideas based on your topic by creating group of your choice
                </Card.Text>
                <NavLink className="nav_link_buttons_home" to="/login">
                  GET STARTED
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="">
              <Card.Img
                variant="top"
                src={woen_planting}
                className="card_image"
              />
              <Card.Body>
                <Card.Title>get in touch</Card.Title>
                <Card.Text>
                  Get in touch with your community and be a catalyst for your
                  own achievemnt with your generation
                </Card.Text>
                <NavLink className="nav_link_buttons_home" to="/login">
                  GET STARTED
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
}
export default HomeScreen;
