import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import team1 from "../assets/images/team1.jpg";
import CustomForm from '../components/CustomForm';

const teamsData = [
  {
    id: 1,
    image: team1,
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Gabriel Hart',
    designation: 'CEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 2,
    image: team1,
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'David Antony',
    designation: 'Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 3,
    image: team1,
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Nicholas Perry',
    designation: 'UX Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 4,
    image: team1,
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Sarah Wills',
    designation: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  }
];

const ContactPage = () => {
  return (
    <>
      <Container>
        <div className="title-holder">
          <h2>Our teams</h2>
          <div className="subtitle">some of our experts</div>
        </div>
        <Row>
          <Col xs="12" lg="8">
            <Row>
              {
                teamsData.map(team => (
                  <Col xs={12} sm={6} md={4} key={team.id}>
                    <div className='team-card'>
                      <div className='image'>
                        <Image src={team.image} fluid />
                      </div>
                      <div className='content'>
                        <h3>{team.name}</h3>
                        <span className='designation'>{team.designation}</span>
                        <p>{team.description}</p>
                      </div>
                    </div>
                  </Col>
                ))
              }
            </Row>
          </Col>
          <Col xs="12" lg="4">
            <CustomForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactPage;
