import { Container, Row, Col } from 'react-bootstrap';
import TypingGenerator from '../../compenents/TypeWriter/TypeWriter';
import Typography from '../../compenents/Typography/Typography';

function Header() {
  return (
    <Container className="py-3">
      <Row>
        <Col xs={12}>
          <Typography value="manusiageeks." level={1} strong={true}/>
          <code>
            <strong>manusia</strong>
            <TypingGenerator>means a person</TypingGenerator>
          </code>
          <br />
          <code>
            <strong>geeks</strong>
            <TypingGenerator>means a person who is knowledgeable about and obsessively interested in a technology</TypingGenerator>
          </code>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
