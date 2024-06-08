import { Row, Col } from "react-bootstrap";
import CustomForm from "../components/CustomForm";

const AboutPage = () => {
  return (
    <Row className="py-5">
      <Col xs="12" lg="8">
        <Row>
          <h5 className="title fw-bold">The Company</h5>
          <hr />
          <div className="mt-3">
            <h3 className="mb-1 title fw-bold">What we’re made of</h3>
            <strong>At Our Core…</strong>
            <p>
              GSA provides engineering services for projects with MEP/FP/LV
              construction cost ranging from $15,000 to $450 million and with
              general construction cost ranging from $1 million to $2.5 billion.
            </p>
            <div className="flex-item">
              <a className="presentation" href="#">
                Presentation
              </a>
              <a className="download" href="#">
                Download
              </a>
            </div>
          </div>

          <div className="mb-4 mt-4">
            <h3 className="mb-1 title fw-bold">
              The Blue Print of Our success
            </h3>
            <ul>
              <li>GSA was formed in 1982. </li>
              <li>
                GSA maintains its experience in what we know best, MEP/FP LV
                engineering and design
              </li>
              <li>
                GSA maintains an engineering staff of 40 to 50 engineers,
                designers and CAD staff.{" "}
              </li>
              <li>
                GSA provides engineering services for projects with MEP/FP/LV
                construction cost ranging from $15,000 to $450,000,000 and with
                general construction cost ranging from $1,000,000 to
                $2,500,000,000.
              </li>
              <li>
                GSA supports the architectural and interior design concepts,
                which have been approved by the client. As engineers, we look
                for inventive methods and solutions to maintain the integrity of
                the design.
              </li>
              <li>
                GSA’s officers and principals of the firm are actively involved
                with all projects and to provide personal attention to the
                client’s needs so that the client’s project requirements are met
                without over or under design, and within the agreed budget.
              </li>
            </ul>
          </div>
        </Row>
      </Col>
      <Col xs="12" lg="4">
        <CustomForm />
      </Col>
    </Row>
  );
};

export default AboutPage;
