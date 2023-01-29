import { Container, Row, Col } from 'react-bootstrap';
import Typography from '../../compenents/Typography/Typography';

function AboutUs() {
  return (
    <Container className="py-3">
      <Row>
        <Col xs={12}>
          <Typography value="about us." level={3}/>
          <hr />
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
