import { Container, Row, Col } from 'react-bootstrap';
import { socmed } from '../../dummyDatas/sosmed';
import Typography from '../../compenents/Typography/Typography';

function MediaSocial() {
  return (
    <Container className="py-3">
      <Row>
        <Col xs={12}>
          <Typography value="media social." level={3} />
          <hr />
          <Row className="text-center">
            {socmed.map((item, index) => (
              <Col key={index}>
                <a href={item.uri} target="_blank" rel="noreferrer">
                  <ion-icon name={item.icon} size={item.size} />
                </a>
              </Col>
            ))}
          </Row>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default MediaSocial;
