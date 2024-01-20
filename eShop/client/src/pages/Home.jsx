import products from "../assets/products.js"
import { Row, Col } from "react-bootstrap";


const Home = () => {
  return <>
    <h1>Latest product</h1>
    <Row>
        {products.map((product) => {
          <Col sm={12} md={6} lg={4} xl={3}>
            <h3>{product.name}</h3>
          </Col>
        } )}
    </Row>
  </>;
};

export default Home;
