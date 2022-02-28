import React from 'react';
import {
  Container,
  Form,
  Row,
  Col,
  Image,
  InputGroup,
  Card,
  Button,
} from 'react-bootstrap';
import './BarsakYonetim.css';

export default function BarsakYonetim() {
  return (
    <Card className="card" style={{ margin: 50 }}>
      <Card.Title className="card-title">BARSAK YÖNETİM PROGRAMI</Card.Title>
      <Card.Body>
        {/* 53. Anal Fissür Tedavisi */}
        <Form.Group as={Row} className="align-items-center">
          <Col md="4">
            <Form.Label>1. Anal Fissür Tedavisi</Form.Label>
          </Col>
          <Col md="auto">
            <Form.Check
              className="check-input"
              name="q53"
              inline
              type="radio"
              label="Gerek Yok"
            />
            <Form.Check
              className="check-input"
              name="q53"
              inline
              type="radio"
              label="Gerekli"
            />
            <Form.Control
              className="text-input"
              name="q53"
              style={{ width: 200 }}
            />
          </Col>
        </Form.Group>
        {/* 54. Diyet Önerileri */}
        <Form.Group as={Row} className="align-items-center">
          <Col md="4">
            <Form.Label>2. Diyet Önerileri</Form.Label>
          </Col>
          <Col md="auto">
            <Form.Control
              className="text-input"
              name="q54"
              style={{ minWidth: 400 }}
            />
          </Col>
        </Form.Group>
        {/* 55. Düzenli tuvalete oturma (her yemekten sonra) */}
        <Form.Group as={Row} className="align-items-center">
          <Col md="4">
            <Form.Label>
              3. Düzenli tuvalete oturma (her yemekten sonra)
            </Form.Label>
          </Col>
          <Col md="auto">
            <Form.Control
              className="text-input"
              name="q55"
              style={{ minWidth: 400 }}
            />
          </Col>
        </Form.Group>
        {/* 56. Egzersiz */}
        <Form.Group as={Row} className="align-items-center">
          <Col md="4">
            <Form.Label>4. Egzersiz</Form.Label>
          </Col>
          <Col md="auto">
            <Form.Control
              className="text-input"
              name="q56"
              style={{ minWidth: 400 }}
            />
          </Col>
        </Form.Group>
        {/* 57. Lavmanla kolonu boşaltma (1. aşama): (kolon dolu ise)  */}
        <Form.Group as={Row} className="align-items-center">
          <Col md="4">
            <Form.Label>
              5. Lavmanla kolonu boşaltma (1. aşama): (kolon dolu ise)
            </Form.Label>
          </Col>
          <Row className="wrap-to-right">
            <Col>
              <Form.Check
                className="check-input"
                name="q51-2"
                inline
                type="radio"
                label="İzotonik"
              />
              <Form.Check
                className="check-input"
                name="q51-2"
                inline
                type="radio"
                label="Gliserinli"
              />
              <Form.Check
                className="check-input"
                name="q51-2"
                inline
                type="radio"
                label="Fosfatlı (B.T. Enema)"
              />
              <Form.Check
                className="check-input"
                name="q51-2"
                inline
                type="radio"
                label="Karışım"
              />
            </Col>
          </Row>
          {/* Günlük lavman Sayısı */}
          <Row className="wrap-to-right">
            <Col md="5">
              <InputGroup>
                <InputGroup.Text>Günlük lavman Sayısı</InputGroup.Text>
                <Form.Control
                  className="text-input"
                  name="q55"
                  style={{ width: 50 }}
                />
                <InputGroup.Text>kez / gün</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
          {/* Lavman sıvısı hacmi : */}
          <Row className="wrap-to-right">
            <Col md="5">
              <InputGroup>
                <InputGroup.Text>Lavman sıvısı hacmi : </InputGroup.Text>
                <Form.Control
                  className="text-input"
                  name="q57"
                  style={{ width: 50 }}
                />
                <InputGroup.Text>ml (min. 350 ml) </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Form.Group>
        {/* 58. 6. Yatarak Direkt Batın Grafisi (YDBG): Kolonun boş olduğundan emin olana kadar günlük grafi kontrolü */}
        <Form.Group className="align-items-center">
          <Row>
            <Col>
              <Form.Label>
                6. Yatarak Direkt Batın Grafisi (YDBG): Kolonun boş olduğundan
                emin olana kadar günlük grafi kontrolü
              </Form.Label>
            </Col>
          </Row>
          <Row className="wrap-to-right">
            <Col md="3">
              <InputGroup>
                <InputGroup.Text>Tarih</InputGroup.Text>
                <Form.Control name="q58" className="text-input" type="date" />
              </InputGroup>
            </Col>
            <Col md="3">
              <InputGroup>
                <InputGroup.Text>YDBG</InputGroup.Text>
                <Form.Control name="q58" className="text-input" type="text" />
                <InputGroup.Text>gün</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
          <Row className="wrap-to-right">
            <Col>
              <Form.Check
                type="radio"
                className="check-input"
                name="q58"
                label="Kolon boş"
              />
            </Col>
          </Row>
          <Row className="wrap-to-right">
            <Col>
              <Form.Check
                type="radio"
                className="check-input"
                name="q58"
                label="Kolon dolu: Lavman dozu/ içeriğinde değişiklik? "
              />
            </Col>
          </Row>
          <Row className="wrap-to-right">
            <Col>
              <Form.Control
                type="text"
                className="text-input"
                style={{ width: 400 }}
              />
            </Col>
          </Row>
          <Row className="wrap-to-right">
            <Col md="4">
              <Form.Label>Dışkılama</Form.Label>
            </Col>
            <Col md="auto">
              <Form.Check
                type="radio"
                className="check-input"
                label="Var"
                inline
                name="q1111"
              />
              <Form.Check
                type="radio"
                className="check-input"
                label="Yok"
                inline
                name="q1111"
              />
            </Col>
          </Row>
          <Row className="wrap-to-right">
            <Col md="4">
              <Form.Label>Dışkı Kaçırma</Form.Label>
            </Col>
            <Col md="auto">
              <Form.Check
                type="radio"
                className="check-input"
                label="Var"
                inline
                name="q1111"
              />
              <Form.Check
                type="radio"
                className="check-input"
                label="Yok"
                inline
                name="q1111"
              />
            </Col>
          </Row>
          <Row className="wrap-to-right">
            <Col md="12">
              <InputGroup>
                <InputGroup.Text>Plan</InputGroup.Text>
                <Form.Control
                  type="text"
                  className="text-input"
                  style={{ width: 400 }}
                  name="asdasd"
                />
              </InputGroup>
            </Col>
          </Row>
        </Form.Group>
        {/* 59. 7. Günlük laksatif tedavi: (Kolon boş ve ya boşaltıldıktan
                      sonra) */}
        <Form.Group as={Row} className="align-items-center">
          <Col md="6">
            <Form.Label>
              7. Günlük laksatif tedavi: (Kolon boş ve ya boşaltıldıktan sonra)
            </Form.Label>
          </Col>
          <Col md="3">
            <InputGroup>
              <InputGroup.Text>Tarih</InputGroup.Text>
              <Form.Control className="text-input" name="q54" type="date" />
            </InputGroup>
          </Col>
        </Form.Group>
        <Row>
          <img
            className="image"
            src={require('/assets/q59.png')}
            alt="BristolDiskiSkalasi"
          />
        </Row>
        <Form.Group className="align-items-center">
          <Row className="wrap-to-right">
            <Col md="3">
              <InputGroup>
                <InputGroup.Text>Tarih</InputGroup.Text>
                <Form.Control className="text-input" name="q54" type="date" />
              </InputGroup>
            </Col>
            <Col md="4">
              <InputGroup>
                <InputGroup.Text>Laksatif Başlangıç Dozu</InputGroup.Text>
                <Form.Control className="text-input" name="q54" type="text" />
              </InputGroup>
            </Col>
            <Col md="4">
              <InputGroup>
                <InputGroup.Text>Fiber Dozu</InputGroup.Text>
                <Form.Control className="text-input" name="q54" type="text" />
              </InputGroup>
            </Col>
          </Row>
          <Row className="wrap-to-right">
            <Col md="3">
              <InputGroup>
                <InputGroup.Text>Tarih</InputGroup.Text>
                <Form.Control className="text-input" name="q54" type="date" />
              </InputGroup>
            </Col>
          </Row>
          <Row className="wrap-to-right">
            <Col md="1">
              <Form.Label>YDBG</Form.Label>
            </Col>
            <Col md="3">
              <Form.Check
                className="check-input"
                name="q54"
                type="radio"
                label="Kolon boş"
                inline
              />
              <Form.Check
                className="check-input"
                name="q54"
                type="radio"
                label="Kolon dolu"
                inline
              />
            </Col>
            <Col>
              <InputGroup>
                <InputGroup.Text>
                  Laksatif dozu/tipinde değişiklik?
                </InputGroup.Text>
                <Form.Control className="text-input" name="q54" type="text" />
              </InputGroup>
            </Col>
          </Row>
          <Row className="wrap-to-right">
            <Col md="4">
              <Form.Label>Laksatifi düzenli kullandı mı?</Form.Label>
            </Col>
            <Col md="auto">
              <Form.Check
                type="radio"
                name="aaa"
                className="check-input"
                label="Evet"
                inline
              />
              <Form.Check
                type="radio"
                name="aaa"
                className="check-input"
                label="Hayır"
                inline
              />
            </Col>
          </Row>
          <Row className="wrap-to-right">
            <Col md="4">
              <Form.Label>Dışkılama</Form.Label>
            </Col>
            <Col md="auto">
              <Form.Check
                type="radio"
                name="aaa"
                className="check-input"
                label="Yok"
                inline
              />
              <Form.Check
                type="radio"
                name="aaa"
                className="check-input"
                label="Var"
                inline
              />
            </Col>
            <Col md="3">
              <InputGroup>
                <InputGroup.Text>Yeterli</InputGroup.Text>
                <Form.Control className="text-input" type="text" />
                <InputGroup.Text>/</InputGroup.Text>
                <Form.Control className="text-input" type="text" />
                <InputGroup.Text>Yetersiz</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
          <Row className="wrap-to-right">
            <Col md="4">
              <Form.Label>Lavman Gerekti mi</Form.Label>
            </Col>
            <Col md="auto">
              <Form.Check
                type="radio"
                name="aaa"
                className="check-input"
                label="Hayır"
                inline
              />
              <Form.Check
                type="radio"
                name="aaa"
                className="check-input"
                label="Evet"
                inline
              />
            </Col>
            <Col md="3">
              <InputGroup>
                <InputGroup.Text>Sık</InputGroup.Text>
                <Form.Control className="text-input" type="text" />
                <InputGroup.Text>/</InputGroup.Text>
                <Form.Control className="text-input" type="text" />
                <InputGroup.Text>Nadir</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
          <Row className="wrap-to-right">
            <Col md="12">
              <InputGroup>
                <InputGroup.Text>Plan</InputGroup.Text>
                <Form.Control
                  type="text"
                  className="text-input"
                  style={{ width: 400 }}
                  name="asdasd"
                />
              </InputGroup>
            </Col>
          </Row>
        </Form.Group>
      </Card.Body>
    </Card>
  );
}
