import { Row, Col, Container } from "react-bootstrap";
import React from "react";
import { sectionLinks } from "../constants";
import CustomForm from "../components/CustomForm";
import useMediaQuery from "../utils/useMediaQuery";

const ContactPage = () => {
  const isBigScreen = useMediaQuery("(min-width: 1060px)");

  const renderSection = (title, links) => (
    <Col xs="12" md="4" className="text-sm-start py-3">
      <h4 style={{ fontSize: isBigScreen ? "20px" : "16px" }}>{title}</h4>
      <ul className="nav flex-column">
        {links.map((link) => (
          <li key={link} className="nav-item mb-0 title-sm">
            <span href={link} className="nav-link p-0">
              {link}
            </span>
          </li>
        ))}
      </ul>
    </Col>
  );
  return (
    <Container>
      <Row className="py-5">
        <Col xs="12" lg="6">
          {["Pennsylvania Location", "Florida Location"].map((sectionTitle) => (
            <React.Fragment key={sectionTitle}>
              {renderSection(sectionTitle, sectionLinks[sectionTitle])}
            </React.Fragment>
          ))}
        </Col>
        <Col xs="12" lg="6">
          <CustomForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
