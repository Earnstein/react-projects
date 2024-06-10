import { Row, Col, Card, Container, Image } from "react-bootstrap";
import CustomForm from "../components/CustomForm";
import { CARDS } from "../constants";

const ProjectPage = () => {
  return (
    <Container>
      <Row className="py-5">
        <Col xs="12" lg="8">
          <Row className="g-4">
            {CARDS.map((card) => (
              <Col key={card.title} xs="12" sm="6" md="4">
                <Card className="shadow-none h-100">
                  <Image  src={card.image} />
                  <Card.Body>
                    <Card.Title>
                      <a href="#" className="text-ellipsis text-wrap">
                        {card.title}
                      </a>
                    </Card.Title>
                    <Card.Text className="text-muted text-wrap">
                      {card.title}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs="12" lg="4">
          <CustomForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectPage;
