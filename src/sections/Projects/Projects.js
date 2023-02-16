import { Container, Row, Col } from 'react-bootstrap';
import { Button } from '../../compenents/Button';
import Typography from '../../compenents/Typography/Typography';

function Projects() {
  return (
    <Container className="py-3">
      <Row>
        <Col xs={12}>
          <Typography value="projects." level={3} />
          <hr />
          <Row className="text-center">
          <Typography value="404 Not Found" level={3} code={true} />
            <Col>
              <Button value="hire us" />
            </Col>
          </Row>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
