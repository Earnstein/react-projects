import { Row, Col } from "react-bootstrap";
import CustomForm from "../components/CustomForm";

const SustainPage = () => {
  return (
    <Row className="py-5">
      <Col xs="12" lg="8">
        <Row>
          <h5 className="title fw-bold">Sustainability</h5>
          <hr />
          <div className="mt-1">
            <h6 className="mb-1 title fw-bold">Your Partner in Success</h6>
            <p>
              At GSA, we have the responsibility to be environmentally sound in
              our design with regards to impact, efficiency and sustainability.
              Our consulting engineers have the knowledge and supporting
              technologies to assist clients in creating sustainable “green”
              buildings.
              <br />
              <br />
              Please take a moment to review a comprehensive presentation about
              GSA’s services and success…
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
            <h2 className="mb-1 title fw-bold">SUPPORTING YOUR PROJECT</h2>
            <ul>
              <li>Prepare MEP/FP/LV basis of design for the project </li>
              <li>
                Prepare preliminary utility load estimates for the project
                including HVAC estimated loads
              </li>
              <li>Prepare code review as it relates to MEP systems</li>
              <li>Attend design coordination meetings</li>
              <li>Provide construction administration services</li>
              <li>Provide onsite review and observations with reports</li>
              <li>Provide review of all testing and balancing </li>
              <li>
                Provide full time onsite representation during construction
                (when requested)
              </li>
              <li>Gas piping systems </li>
              <li>Sanitary (foul) piping systems</li>
              <li>Grease waste systems </li>
              <li>Roof drainage systems </li>
              <li>Vacuum and compressed air systems</li>
              <li>Fire Protection Engineering and Design</li>
              <li>Sprinkler system design and calculations </li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="mb-1 title fw-bold">CABLING PROJECTS</h2>
            <ul>
              
              <li>Main computer system/network </li>
              <li>Accounting system</li>
              <li>LAN, WAN and Internet Network Infrastructure </li>
              <li>Point of sale (POS system) </li>
              <li>Telephone system</li>
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

export default SustainPage;
