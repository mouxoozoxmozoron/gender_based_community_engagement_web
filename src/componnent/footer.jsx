import React from "react";
import facebook_icon from "../assets/icon_images/facebook.png";
import instagram_icon from "../assets/icon_images/instagram.png";
import linkedin_icon from "../assets/icon_images/linked_in.png";
import twitter_icon from "../assets/icon_images/twitter.png";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <div className="main_footer">
      <MDBFooter
        bgColor="dark"
        className="text-center text-lg-start text-grey ffoter_body"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <img
                src={facebook_icon}
                alt="LOGIN"
                className="icon_style_footer"
              />
            </a>
            <a href="" className="me-4 text-reset">
              <img
                src={instagram_icon}
                alt="LOGIN"
                className="icon_style_footer"
              />
            </a>
            <a href="" className="me-4 text-reset">
              <img
                src={linkedin_icon}
                alt="LOGIN"
                className="icon_style_footer"
              />
            </a>
            <a href="" className="me-4 text-reset">
              <img
                src={twitter_icon}
                alt="LOGIN"
                className="icon_style_footer"
              />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  ABOUT GBCE
                </h6>
                <p>
                  Gender based community engagement(gbce) is a tool for
                  advocacing equality and inclussion for both men and women in
                  development by breaking barrier between community and gender
                  advocacy group for an effective commuint development.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Cervicess</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Event
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Advocacy
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Gender discussions
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Software management
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="https://www.aru.ac.tz/" className="text-reset">
                    ARU
                  </a>
                </p>
                <p>
                  <a href="" className="text-reset">
                    GBCe
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Dar es salaam, TZ.
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  mussaaron20@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" />+ 255 745450431
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" />+ 255 713074067
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="">
            gbc.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
