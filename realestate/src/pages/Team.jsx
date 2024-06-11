import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import CustomForm from "../components/CustomForm";
import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/author2.jpg";
import team3 from "../assets/images/author1.jpg";
import team4 from "../assets/images/author3.jpg";

const teamsData = [
  {
    id: 1,
    image: team1,
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Gabriel Hart",
    designation: "CEO",
  },
  {
    id: 2,
    image: team2,
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Sarah Wills",
    designation: "HR head",
  },
  {
    id: 3,
    image: team3,
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Nicholas Perry",
    designation: "(LEED)s Engr",
  },
  {
    id: 4,
    image: team4,
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "John Fedrick",
    designation: "(LEED)s Engr",
  },
];

const TeamPage = () => {
  return (
    <Container>
      <Row className="py-5">
        <div className="title fw-bold">
          <h2>Our teams</h2>
          <div className="subtitle">some of our experts</div>
        </div>
        <Col xs="12" lg="8">
          <Row>
            {teamsData.map((team) => (
              <Col xs={12} sm={6} md={4} key={team.id}>
                <div className="team-card">
                  <div className="image">
                    <Image
                      src={team.image}
                      fluid
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="content">
                    <h3 className="title fw-bold">{team.name}</h3>
                    <span className="designation title fw-bold">
                      {team.designation}
                    </span>
                    <p>{team.description}</p>
                  </div>
                </div>
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

export default TeamPage;
