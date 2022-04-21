import { Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ButtonBar.css';

export default function ButtonBar(props: any) {
  const navigate = useNavigate();

  return (
    <Row
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        height: 75,
      }}
      className="fixed-bottom m-0 p-0"
    >
      <Col
        md={{ span: 4, offset: 8 }}
        className="d-flex flex-direction-row justify-content-end align-items-center"
      >
        <Button type="submit" className="mx-2 button-bar" variant="success">
          Kaydet
        </Button>
        <Button
          onClick={() => {
            // eslint-disable-next-line react/destructuring-assignment
            navigate(props.url);
          }}
          variant="danger"
        >
          Çıkış
        </Button>
      </Col>
    </Row>
  );
}
