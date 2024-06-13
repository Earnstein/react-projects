import { Container, Row, Col, Image } from "react-bootstrap";
import React from "react";
import { FooterImages, sectionLinks } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const renderSection = (title, links) => (
    <Col xs="12" md="4" className="text-sm-start py-3 text-white">
      <h5 style={{ fontSize: "16px" }}>{title}</h5>
      <ul className="nav flex-column">
        {links.map((link) => (
          <li key={link} className="nav-item mb-0 title-sm">
            <span href={link} className="nav-link p-0 text-white">
              {link}
            </span>
          </li>
        ))}
      </ul>
    </Col>
  );

  return (
    <footer className="flex-column">
      <div style={{ backgroundColor: "#333" }}>
        <Container className="px-2 py-5">
          <Row>
            {["Missoula Location", "Hickory Location"].map(
              (sectionTitle) => (
                <React.Fragment key={sectionTitle}>
                  {renderSection(sectionTitle, sectionLinks[sectionTitle])}
                </React.Fragment>
              )
            )}

            <Col xs="12" md="4">
              <div>
                <div className="img-flex">
                  {FooterImages.map((image) => (
                    <Link to="/contact" key={image.title}>
                      <Image
                        src={image.image}
                        fluid
                        style={{ maxHeight: "auto", maxWidth: "50px" }}
                      />
                    </Link>
                  ))}
                </div>
                <h5 className="mt-4 text-white" style={{ fontSize: "16px" }}>
                  Quick Links
                </h5>
                <div>
                  <p className="link-paragraph">Secure Webmail</p>
                  <p className="link-paragraph">Secure Ftp</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="text-start py-lg-3 py-2 footer-2">
        <Container>
          <p className="title-sm text-white">
            © {currentYear} Ampitude Associates Consulting Engineers
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
