import { Container, Row, Col } from 'react-bootstrap';
import Picture from '../../compenents/Image/Image';
import Typography from '../../compenents/Typography/Typography';
import { contributors } from '../../dummyDatas/contributors';
import { IMAGE_TYPES } from '../../constants/images';

function Contributors() {
  return (
    <Container className="pt-3">
      <Row>
        <Col xs={12}>
          <Typography value="contributors." level={3} />
          <hr />
          <Row className="text-center pt-4">
            {contributors.map((item, index) => (
              <Col xs={12} sm={12} md={6} key={index}>
                <Picture value={item.image} type={IMAGE_TYPES.roundedCircle}/>
                <Col className="py-4">
                  <Col>
                    <Typography value={item.name} level={2} />
                  </Col>
                  <Col>
                    <Typography value={item.role} level={4} code={true}/>
                  </Col>
                  <Col>
                    <p>{item.description}</p>
                  </Col>
                  <Col>
                    <Row className="py-3">
                      {item.socials.map((item, index) => (
                        <Col key={index}>
                          <a href={item.uri} target="_blank" rel="noreferrer">
                            <ion-icon name={item.icon} size={item.size} />
                          </a>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Col>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Contributors;
