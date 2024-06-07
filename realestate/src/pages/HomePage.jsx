import { Row, Col, Form } from "react-bootstrap";
import CustomCard from "../components/CustomCard";
import { CARDS } from "../constants";
const HomePage = () => {
  return (
    <>
      <Row className="py-5">
        <Col xs="12" lg="8">
          <Row>
            <h5 className="mb-1 title">Giovanetti Shalman Associates</h5>
            <hr />
            <p>
              Giovanetti Shulman Associates, Consulting Engineers (GSA), is
              guided by our three main principals of excellence:
            </p>
            <div>
              <ol>
                <li>
                  <strong>INVOLVEMENT</strong>
                  <br />
                  GSA prides itself on our commitment to our clients and their
                  projects with Principal involvement from the inception to the
                  completion of the project.
                </li>
                <li>
                  <strong>SOLUTIONS</strong>
                  <br />
                  GSA is committed to exceed the normal engineering design
                  services offered by other firms by having the ability to solve
                  complex problems and design issues, while maintaining the
                  project’s design expectations and budgets.
                </li>
                <li>
                  <strong>DETAILS</strong>
                  <br />
                  GSA’s commitment to details assures the client that the entire
                  design team will meet the design intent of the project and
                  that the resulting design, will serve as a model for future
                  projects.
                </li>
              </ol>
            </div>
            <p className="mb-4">
              <em>
                “Your smile is your logo, your personality is your business
                card, how you leave others feeling after an experience becomes
                your trademark.”
              </em>
              <strong>
                {" "}
                <br />– Jay Danzie
              </strong>
            </p>

            <p className="mb-4">
              <h3 className="mb-1 title">Our Services</h3>
              <p>
                Mechanical Engineering and Design
                <br />
                Electrical Engineering and Design Plumbing Engineering and
                Design
                <br />
                Fire Protection Engineering and Design
                <br />
                Low-Voltage Systems Cabling Engineering and Design
                <br />
                Sustainable Systems Building Design (LEED Services)
              </p>
            </p>
            <p>
              <h3 className="mb-1 title">Project Types:</h3>
              <p>
                Casinos
                <br />
                Hotels
                <br />
                Resturants & Nightclubs
                <br />
                Residential High Rise
                <br />
                Retail Shopping Areas
                <br />
                Office Buildings & Complexes
                <br />
                Financial Facilities
                <br />
                Assisted Care Living Facilities
                <br />
                Parking Structures
                <br />
                Medical & Wellness Centers
                <br />
                Hospitals
                <br />
                Educational
                <br />
                Data Centers & Computer Rooms <br />
                Central Plant Facilities
              </p>
            </p>
          </Row>
        </Col>
        <Col xs="12" lg="4">
          <h5 className="mb-3 title">RECENT PROJECTS</h5>
          {CARDS.map((product) => (
            <CustomCard
              key={product.title}
              title={product.title}
              image={product.image}
            />
          ))}

          <div>
            <h4>Send a message</h4>
            <p>Fields marked with an <span className="text-danger">*</span> are required</p>
            <Form>
              <Form.Group
                className="mb-3 rounded-0 need-was-validated"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label as="h6" className="title fw-bold">Name <span className="text-danger star text-center">*</span></Form.Label>
                <Form.Control type="text"/>
              </Form.Group>
              <Form.Group
                className="mb-3 rounded-0"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label as="h6" className="title fw-bold">Email <span className="text-danger star text-center">*</span></Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group
                className="mb-3 rounded-0"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label as="h6" className="title fw-bold">Message <span className="text-danger star text-center">*</span></Form.Label>
                <Form.Control as="textarea" rows={6}  required/>
              </Form.Group>
              <button className="btn btn-primary rounded-0 button-submit">Submit</button>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
