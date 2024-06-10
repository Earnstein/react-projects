import { Row, Col, Card, Container } from "react-bootstrap";
import CustomForm from "../components/CustomForm";
import SemiLogo from "../assets/seminole.jpg";

const HRPage = () => {
  const hrTasks = [
    {
      title: "Employee Onboarding",
      text: "Streamline the process for new hires, ensuring they have all the necessary tools and information to succeed.",
      image: SemiLogo,
    },
    {
      title: "Performance Reviews",
      text: "Regularly scheduled reviews to provide feedback and set goals for continuous improvement.",
      image: SemiLogo,
    },
    {
      title: "Training and Development",
      text: "Ongoing training programs to enhance skills and career growth within the company.",
      image: SemiLogo,
    },
  ];

  return (
    <Container>
      <Row className="flex-lg-row flex-column">
        <Col lg="8" className="mb-4">
          <Row>
            <h2 className="mb-3">HR Headlines</h2>
            <img
              src="your-image-url.jpg"
              alt="HR Image"
              className="img-fluid mb-4"
            />
            <p>
              Welcome to the HR department. Here at our company, we value our
              employees and strive to create a supportive and inclusive
              workplace. Below you can find some of our main HR highlights and
              tasks.
            </p>
            <h2 className="mb-3">HR Tasks</h2>
            {hrTasks.map((task, index) => (
              <Col xs="6" md="4" className="mb-3" key={index}>
                <Card className="h-100 p-0">
                  <Card.Img variant="top" src={task.image} />
                  <Card.Body>
                    <Card.Title as="h6">{task.title}</Card.Title>
                    <Card.Text>{task.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg="4" className="mb-4">
          <CustomForm />
        </Col>
      </Row>
    </Container>
  );
};

export default HRPage;
