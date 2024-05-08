import React from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section from "react-bootstrap/Col";
import notification_icon from "../assets/icon_images/notification.png";
import profile_icon from "../assets/icon_images/profile.png";
import app_icon from "../assets/icon_images/equality_logo.png";
//react icons
import { CgProfile } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";
import { get_cookie } from "../utilis/cookies_manager";



function MainHeader() {
  const user_name = get_cookie("user_name");
  return (
    <div className="main_nav_bar">
      <Container className="nav_bar_container">
        <Row>
          <Col className="logo_nav_bar">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active_link_status" : ""
              }
            >
              <img
                src={app_icon}
                alt="Notifications"
                className="icon_style_logo"
              />

            </NavLink>

            
          </Col>
          {/* <h3 className="logedname">{user_name}</h3> */}
          <Col className="left_nav_bar_col">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "active_link_status" : ""
              }

            >
              {/* <img
                src={profile_icon}
                alt="LOGIN"
                className="icon_style_profile"
              /> */}
              <CgProfile  size={40} color="grey"/> 


            </NavLink> {""}

            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                isActive ? "active_link_status" : ""
              }
            >
       <div style={{ position: 'relative', display: 'inline-block' }}>
        <IoNotifications size={35} color="grey" />
        <span className="notification_badge"
          style={{
            position: 'absolute',
            top: -5, // Adjust this value to position the count as needed
            right: -5, // Adjust this value to position the count as needed
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '5px',
            height: '25px', // Adjust this value for the height
            width: '25px', // Adjust this value for the width
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          5
        </span>
      </div>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default MainHeader;
