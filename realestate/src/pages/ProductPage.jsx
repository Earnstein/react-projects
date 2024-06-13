import { useParams } from "react-router-dom";
import { Row, Col, Card, Container, Image, Button } from "react-bootstrap";
import CustomForm from "../components/CustomForm";
import { PROJECTS } from "../constants";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { name: title } = useParams();
  const project = PROJECTS.find((p) => p.title === title);
  return (
    <Container>
      <Row className="py-5">
        <Col xs="12" lg="6">
          <Card className="shadow-none">
            <Image src={project.image} fluid />
            <Card.Body>
              <h6 className="p-0 text">{project.title}</h6>
            </Card.Body>
          </Card>
          <Link to={"/"}>
            <Button className="rounded-0 button-submit mb-4 mt-2">Go back</Button>
          </Link>
        </Col>
        <Col xs="12" lg="6">
          <CustomForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
