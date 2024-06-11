import { Navbar, Nav, Container, Image, Col } from "react-bootstrap";
import Logo from "../assets/images/LogoWhite.svg";
import useMediaQuery from "../utils/useMediaQuery";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const isBigScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <header style={{ backgroundColor: "#3E3F3A" }}>
      <Container>
        <Navbar expand="lg" collapseOnSelect>
          <>
            <LinkContainer to={"/"}>
              <Navbar.Brand>
                <Col xs={6} md={6}>
                  <div className="flex-item">
                    <Image
                      src={Logo}
                      alt="logo"
                      fluid
                      style={{
                        maxWidth: isBigScreen ? "80px" : "50px",
                        color: "#000",
                      }}
                    />
                    {isBigScreen ? (
                      <h5 className="text-white-50">
                        Amplitude Associates <br /> Consulting Engineers{" "}
                      </h5>
                    ) : (
                      <h6 className="text-white-50">
                        Amplitude Associates <br /> Consulting Engineers{" "}
                      </h6>
                    )}
                  </div>
                </Col>
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <LinkContainer to={"/"}>
                  <Nav.Link className="link">HOME</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/about"}>
                  <Nav.Link className="link">ABOUT</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/sustain"}>
                  <Nav.Link className="link">SUSTAINABILITY</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/projects"}>
                  <Nav.Link className="link">PROJECTS</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/teams"}>
                  <Nav.Link className="link">TEAMS</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/contact"}>
                  <Nav.Link className="link">CONTACT</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
