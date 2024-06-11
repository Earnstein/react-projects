import { Container, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NotFoundPage = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100 text-center">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 className="fw-bold notfound">404</h1>
          <h3>Page Not Found !!!</h3>
          <LinkContainer to={"/"}>
            <Button className="link"> Go Back Home</Button>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
