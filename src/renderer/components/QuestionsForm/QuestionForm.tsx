/* eslint-disable react/no-unused-state */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { collection, setDoc, addDoc } from 'firebase/firestore';
import {
  Container,
  Form,
  Row,
  Col,
  Image,
  InputGroup,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './QuestionForm.css';
import db from '../../firebase';

// eslint-disable-next-line react/prefer-stateless-function
export default class QuestionForm extends Component {
  PatientId;

  formsCollectionRef = collection(db, 'forms');

  constructor(props: any) {
    super(props);
    this.PatientId = this.props.PatientId;
    console.log('PatientId', this.PatientId);
    this.state = {
      Form: { FormName: 'Kabızlık Form' },
    };
  }

  createDocument = async () => {
    await addDoc(this.formsCollectionRef, this.state.Form);
    this.clearControls();
  };

  clearControls = () => {
    this.setState({
      Form: {},
    });
  };

  handleInputChange = (event: any) => {
    event.preventDefault();
    this.setState({
      Form: {
        ...this.state.Form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.createDocument();
    this.clearControls();
  };

  render() {
    return (
      <div>
        <Container fluid className="mt-3">
          <Form>
            <button onClick={this.handleSubmit} type="submit">
              Kaydet
            </button>
            {/*  1. Çocuğunuz kaç günde bir büyük tuvaletini yapıyor?............................................................................. */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row}>
                  <Col md="6">
                    <Form.Label>
                      1. Çocuğunuz kaç günde bir büyük tuvaletini yapıyor?
                    </Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Control
                      value={this.state.Form.q1 ?? ''}
                      onChange={this.handleInputChange}
                      name="q1"
                      type="text"
                      className="text-input"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 2. Büyük tuvaletini yapması için uyarı veya lavman yapmanız gerekiyor  */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="6">
                    <Form.Label>
                      2. Büyük tuvaletini yapması için uyarı veya lavman
                      yapmanız gerekiyor mu?
                    </Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      value="true"
                      onChange={this.handleInputChange}
                      name="q2"
                      className="check-input"
                      inline
                      type="radio"
                      label="Evet"
                    />
                    <Form.Check
                      value="false"
                      name="q2"
                      inline
                      type="radio"
                      className="check-input"
                      label="Hayır"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* Bristol Dışkı Skalası Resim */}
            <Row>
              <img
                className="image"
                src={require('/assets/q3.png')}
                alt="BristolDiskiSkalasi"
              />
            </Row>
            {/*  3. Kabızlık Tanı Kriterleri (Roma IV) */}
            <Card className="card">
              <Card.Body>
                <Form.Label as={Row}>
                  <b>3. Kabızlık Tanı Kriterleri (Roma IV):</b>
                </Form.Label>
                <Row>
                  {/* 4 yaşından küçük, en az bir ay süreyle aşağıdaki kriterlerden
                    en az iki tanesi olmalı: */}
                  <Form.Label>
                    4 yaşından küçük, en az bir ay süreyle aşağıdaki
                    kriterlerden en az iki tanesi olmalı:
                  </Form.Label>
                  {/* 3.1 -Haftada iki ya da daha az dışkılama */}
                  <Form.Group
                    as={Row}
                    className="wrap-to-right align-items-center"
                  >
                    <Col md="4" className="align-items-center">
                      <Form.Label>
                        - Haftada iki ya da daha az dışkılama
                      </Form.Label>
                    </Col>
                    <Col md="auto" className="align-items-center">
                      <Form.Check
                        className="check-input"
                        name="q3-1"
                        inline
                        type="radio"
                        label="Evet"
                      />
                      <Form.Check
                        className="check-input"
                        name="q3-1"
                        inline
                        type="radio"
                        label="Hayır"
                      />
                    </Col>
                  </Form.Group>
                  {/* 3.2 -	Aşırı dışkı birikmesi öyküsü */}
                  <Form.Group
                    as={Row}
                    className="wrap-to-right align-items-center"
                  >
                    <Col md="4" className="align-items-center">
                      <Form.Label>- Aşırı dışkı birikmesi öyküsü</Form.Label>
                    </Col>
                    <Col md="auto" className="align-items-center">
                      <Form.Check
                        className="check-input"
                        name="q3-2"
                        inline
                        type="radio"
                        label="Evet"
                      />
                      <Form.Check
                        className="check-input"
                        name="q3-2"
                        inline
                        type="radio"
                        label="Hayır"
                      />
                    </Col>
                  </Form.Group>
                  {/* 3.3 -	Ağrılı ve sert dışkılama */}
                  <Form.Group
                    as={Row}
                    className="wrap-to-right align-items-center"
                  >
                    <Col md="4" className="align-items-center">
                      <Form.Label>- Ağrılı ve sert dışkılama </Form.Label>
                    </Col>
                    <Col md="auto" className="align-items-center">
                      <Form.Check
                        className="check-input"
                        name="q3-3"
                        inline
                        type="radio"
                        label="Evet"
                      />
                      <Form.Check
                        className="check-input"
                        name="q3-3"
                        inline
                        type="radio"
                        label="Hayır"
                      />
                    </Col>
                  </Form.Group>
                  {/* 3.4 -	Büyük çaplı dışkılama */}
                  <Form.Group
                    as={Row}
                    className="wrap-to-right align-items-center"
                  >
                    <Col md="4" className="align-items-center">
                      <Form.Label>- Büyük çaplı dışkılama </Form.Label>
                    </Col>
                    <Col md="auto" className="align-items-center">
                      <Form.Check
                        className="check-input"
                        name="q3-4"
                        inline
                        type="radio"
                        label="Evet"
                      />
                      <Form.Check
                        className="check-input"
                        name="q3-4"
                        inline
                        type="radio"
                        label="Hayır"
                      />
                    </Col>
                  </Form.Group>
                  {/* 3.5 Rektumda büyük dışkı kitlesinin bulunması */}
                  <Form.Group
                    as={Row}
                    className="wrap-to-right align-items-center"
                  >
                    <Col md="4" className="align-items-center">
                      <Form.Label>
                        - Rektumda büyük dışkı kitlesinin bulunması
                      </Form.Label>
                    </Col>
                    <Col md="auto" className="align-items-center">
                      <Form.Check
                        className="check-input"
                        name="q3-5"
                        inline
                        type="radio"
                        label="Evet"
                      />
                      <Form.Check
                        className="check-input"
                        name="q3-5"
                        inline
                        type="radio"
                        label="Hayır"
                      />
                    </Col>
                  </Form.Group>
                </Row>
                {/* Tuvalet becerisini edindikten sonra aşağıdaki ölçütler kullanılabilmektedir: */}
                <Form.Label as={Row}>
                  Tuvalet becerisini edindikten sonra aşağıdaki ölçütler
                  kullanılabilmektedir:
                </Form.Label>
                <Row>
                  {/* 3.6 Haftada en az bir kere dışkı kaçırma öyküsü */}
                  <Form.Group
                    as={Row}
                    className="wrap-to-right align-items-center"
                  >
                    <Col md="4" className="align-items-center">
                      <Form.Label>
                        - Haftada en az bir kere dışkı kaçırma öyküsü
                      </Form.Label>
                    </Col>
                    <Col md="auto" className="align-items-center">
                      <Form.Check
                        className="check-input"
                        name="q3-6"
                        inline
                        type="radio"
                        label="Evet"
                      />
                      <Form.Check
                        className="check-input"
                        name="q3-6"
                        inline
                        type="radio"
                        label="Hayır"
                      />
                    </Col>
                  </Form.Group>
                  {/* 3.7 Tuvaleti bile tıkayabileGek kadar geniş çaplı dışkılama öyküsü */}
                  <Form.Group
                    as={Row}
                    className="wrap-to-right align-items-center"
                  >
                    <Col md="4" className="align-items-center">
                      <Form.Label>
                        - Tuvaleti bile tıkayabileGek kadar geniş çaplı
                        dışkılama öyküsü
                      </Form.Label>
                    </Col>
                    <Col md="auto" className="align-items-center">
                      <Form.Check
                        className="check-input"
                        name="q3-7"
                        inline
                        type="radio"
                        label="Evet"
                      />
                      <Form.Check
                        className="check-input"
                        name="q3-7"
                        inline
                        type="radio"
                        label="Hayır"
                      />
                    </Col>
                  </Form.Group>
                </Row>
                {/* 3. Kabızlık Skoru (Label) */}
                <Row>
                  <Col>
                    <Form.Label>
                      <b>Kabızlık Skoru (Roma IV)</b>
                    </Form.Label>
                  </Col>
                </Row>
                {/* <4 Yaş */}
                <Row>
                  <InputGroup>
                    <InputGroup.Text className="input-group-text">
                      &lt; 4 Yaş:
                    </InputGroup.Text>
                    <Form.Control
                      size="sm"
                      className="text-input"
                      style={{ maxWidth: 100 }}
                      name="q3-8-1"
                      type="text"
                    />
                    <InputGroup.Text className="input-group-text">
                      / 5 =
                    </InputGroup.Text>
                    <Form.Control
                      size="sm"
                      className="text-input"
                      style={{ maxWidth: 100 }}
                      name="q3-8-2"
                      type="text"
                      disabled
                    />
                  </InputGroup>
                </Row>
                {/* >4 Yaş */}
                <Row>
                  <InputGroup>
                    <InputGroup.Text>&gt; 4 Yaş:</InputGroup.Text>
                    <Form.Control
                      className="text-input"
                      style={{ maxWidth: 100 }}
                      name="q3-8-3"
                      type="text"
                    />
                    <InputGroup.Text>/ 7 =</InputGroup.Text>
                    <Form.Control
                      className="text-input"
                      style={{ maxWidth: 100 }}
                      name="q3-8-4"
                      type="text"
                      disabled
                    />
                  </InputGroup>
                </Row>
              </Card.Body>
            </Card>
            {/* 4. Kabızlık kaç yaşında başladı */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>4. Kabızlık kaç yaşında başladı</Form.Label>
                  </Col>
                  <Col md="3" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q4"
                      inline
                      type="radio"
                      label="Doğduğundan beri"
                    />
                    <Form.Check
                      className="check-input"
                      name="q4"
                      inline
                      type="radio"
                    />
                  </Col>
                  <Col>
                    <InputGroup style={{ width: 250, marginLeft: -80 }}>
                      <Form.Control
                        className="text-input"
                        size="sm"
                        style={{ maxWidth: 100 }}
                        name="q4-age"
                        type="text"
                      />
                      <InputGroup.Text className="input-group-text">
                        yaşından beri
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 5. Ne kadar süredir kabızlık şikayeti var? */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>
                      5. Ne kadar süredir kabızlık şikayeti var?
                    </Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Control
                      className="text-input"
                      size="sm"
                      name="q5"
                      type="text"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 6. Size göre kabızlık şikayetlerinin başlaması ile ilişkili olay var mı? */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="6">
                    <Form.Label>
                      6. Size göre kabızlık şikayetlerinin başlaması ile
                      ilişkili olay var mı?
                    </Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center wrap-to-right">
                    <Form.Check
                      className="check-input"
                      name="q6"
                      inline
                      type="radio"
                      label="Ek gıdaya başlama"
                    />
                    <Form.Check
                      className="check-input"
                      name="q6"
                      inline
                      type="radio"
                      label="Tuvalet eğitimi"
                    />
                    <Form.Check
                      className="check-input"
                      name="q6"
                      inline
                      type="radio"
                      label="Bilmiyorum"
                    />
                    <Form.Check
                      className="check-input"
                      name="q6"
                      inline
                      type="radio"
                      label="Diğer"
                    />
                    <Form.Control
                      className="text-input"
                      size="sm"
                      style={{
                        width: '200px',
                        height: '8px',
                        display: 'inline',
                      }}
                      name="q6-other"
                      type="text"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 7. Çocuğunuz kakasını doğduğunda ilk iki gün içinde yaptı mı?  */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="6">
                    <Form.Label>
                      7. Çocuğunuz kakasını doğduğunda ilk iki gün içinde yaptı
                      mı?
                    </Form.Label>
                  </Col>
                  <Row>
                    <Col md="auto" className="wrap-to-right align-items-center">
                      <Form.Check
                        className="check-input"
                        name="q7"
                        inline
                        type="radio"
                        label="Hayır"
                      />
                      <Form.Check
                        className="check-input"
                        name="q7"
                        inline
                        type="radio"
                        label="Evet"
                      />
                      <Form.Check
                        className="check-input"
                        name="q7"
                        inline
                        type="radio"
                        label="Bilmiyorum"
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 8. Tuvalet eğitimi aldı mı?  */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>8. Tuvalet eğitimi aldı mı?</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q8"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                    <Form.Check
                      className="check-input"
                      name="q8"
                      inline
                      type="radio"
                      label="Evet"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 9. Tuvalet eğitimini kaç yaşında verdiniz?  */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>
                      9. Tuvalet eğitimini kaç yaşında verdiniz?
                    </Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Control
                      className="text-input"
                      name="q9"
                      type="text"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 10. Tuvalet eğitimi sırasında ciddi sorun yaşadınız mı? */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>
                      10. Tuvalet eğitimi sırasında ciddi sorun yaşadınız mı?
                    </Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q10"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                    <Form.Check
                      className="check-input"
                      name="q10"
                      inline
                      type="radio"
                      label="Evet"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 11. Çocuğunuz büyük tuvaletini kaçırıyor mu? */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>
                      11. Çocuğunuz büyük tuvaletini kaçırıyor mu?
                    </Form.Label>
                  </Col>
                  <Col md="2">
                    <Form.Check
                      name="q11"
                      inline
                      type="radio"
                      label="Hayır"
                      className="check-input"
                    />
                    <Form.Check
                      name="q11"
                      inline
                      type="radio"
                      label="Evet"
                      className="check-input"
                    />
                  </Col>
                  <Col md="2">
                    <Form.Label>Evet ise -&gt;</Form.Label>
                  </Col>
                  <Col md="4">
                    <Form.Check
                      className="check-input"
                      name="q11-1"
                      inline
                      type="radio"
                      label="İç çamaşırı kirlenmesi"
                    />
                    <Form.Check
                      className="check-input"
                      name="q11-1"
                      inline
                      type="radio"
                      label="Bol miktarda kaçırma"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 12. Tuvalet eğitimi almış olmasına rağmen bez bağlamanız gerekiyor mu? */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>
                      12. Tuvalet eğitimi almış olmasına rağmen bez bağlamanız
                      gerekiyor mu?
                    </Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q12"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                    <Form.Check
                      className="check-input"
                      name="q12"
                      inline
                      type="radio"
                      label="Evet"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 13. İdrarını altına kaçırıyor mu ? */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>13. İdrarını altına kaçırıyor mu ?</Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q13"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                    <Form.Check
                      className="check-input"
                      name="q13"
                      inline
                      type="radio"
                      label="Evet"
                    />
                  </Col>
                  <Row>
                    <Col md="4" className="wrap-to-right">
                      <Form.Label>
                        Evet ise İdrarını ne zaman kaçırıyor?-&gt;
                      </Form.Label>
                    </Col>
                    <Col md="auto" className="wrap-to-right">
                      <Form.Check
                        className="check-input"
                        name="q13-1"
                        inline
                        type="radio"
                        label="Gece"
                      />
                      <Form.Check
                        className="check-input"
                        name="q13-1"
                        inline
                        type="radio"
                        label="Gündüz"
                      />
                      <Form.Check
                        className="check-input"
                        name="q13-1"
                        inline
                        type="radio"
                        label="Hem gece hem gündüz"
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 14. Dışkı tutma davranışı var mı? */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>14. Dışkı tutma davranışı var mı?</Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q14"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                    <Form.Check
                      className="check-input"
                      name="q14"
                      inline
                      type="radio"
                      label="Evet"
                    />
                  </Col>
                  <p>
                    (Bacaklarını makaslaması, öne doğru eğilmesi, ağrılı yüz
                    ifadesi)
                  </p>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 15. Kabızlık için daha önce tedavi aldı mı? */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>
                      15. Kabızlık için daha önce tedavi aldı mı?
                    </Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q15"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                    <Form.Check
                      className="check-input"
                      name="q15"
                      inline
                      type="radio"
                      label="Evet"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 16. Daha önce uygulanan tedaviler */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>16. Daha önce uygulanan tedaviler</Form.Label>
                  </Col>
                  {/* 16-1 Laksatif */}
                  <Row style={{ marginBottom: 5 }}>
                    {/* Düzenli */}
                    <Col md="3">
                      <InputGroup>
                        <InputGroup.Text className="input-group-text">
                          Laksatif:
                        </InputGroup.Text>
                        <Form.Control
                          className="text-input"
                          name="q16-comment"
                          type="text"
                        />
                      </InputGroup>
                    </Col>
                    {/* Süre, Düzensiz */}
                    <Col md="1">
                      <Form.Check
                        className="check-input"
                        name="q16-1"
                        type="radio"
                        label="Düzenli"
                      />
                    </Col>
                    <Col md="2">
                      <InputGroup>
                        <InputGroup.Text className="input-group-text">
                          Süre
                        </InputGroup.Text>
                        <Form.Control
                          className="text-input"
                          name="q16-1-comment"
                          type="text"
                        />
                      </InputGroup>
                    </Col>
                    <Col sm="auto">
                      <Form.Check name="q16-1" type="radio" label="Diğer" />
                    </Col>
                  </Row>
                  {/* 16-2 Lavman */}
                  <Row style={{ marginBottom: 5 }}>
                    <Col md="3">
                      <InputGroup>
                        <InputGroup.Text className="input-group-text">
                          Lavman:
                        </InputGroup.Text>
                        <Form.Control
                          className="text-input"
                          name="q16-comment"
                          type="text"
                        />
                      </InputGroup>
                    </Col>
                    <Col md="4" className="align-items-center">
                      <Form.Check
                        name="q16-2"
                        type="radio"
                        label="Düzenli"
                        inline
                        className="check-input"
                      />
                      <Form.Check
                        name="q16-2"
                        inline
                        type="radio"
                        label="Aralıklı"
                        className="check-input"
                      />
                      <Form.Check
                        name="q16-2"
                        inline
                        type="radio"
                        label="Çok nadiren"
                        className="check-input"
                      />
                    </Col>
                  </Row>
                  {/* 16-3 Anal Fissür tedavisi */}
                  <Row>
                    <Col md="auto">
                      <InputGroup>
                        <InputGroup.Text className="input-group-text">
                          Anal Fissür Tedavisi:
                        </InputGroup.Text>
                        <Form.Control
                          className="text-input"
                          name="q16-comment"
                          type="text"
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 17. İdrar yolu enfeksiyonu geçirdi mi? */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>
                      17. İdrar yolu enfeksiyonu geçirdi mi?
                    </Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q17"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                    <Form.Check
                      className="check-input"
                      name="q17"
                      inline
                      type="radio"
                      label="Evet"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 18. Ailede ciddi kabızlık sorunu olan başkalarıda var mı? */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>
                      18. İdrar yolu enfeksiyonu geçirdi mi?
                    </Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q18"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                    <Form.Check
                      className="check-input"
                      name="q18"
                      inline
                      type="radio"
                      label="Evet"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 19. Bilinen başka hastalığı var mı? */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>19. Bilinen başka hastalığı var mı?</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q19"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                    <Form.Check
                      className="check-input"
                      name="q19"
                      inline
                      type="radio"
                      label="Evet"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 20. Ameliyat oldu mu? */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>20. Ameliyat oldu mu?</Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q20"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                    <Form.Check
                      className="check-input"
                      name="q20"
                      inline
                      type="radio"
                      label="Evet"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 21. Sürekli kullandığı bir ilaç var mı? */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>
                      21. Sürekli kullandığı bir ilaç var mı?
                    </Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q21"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                    <Form.Check
                      className="check-input"
                      name="q21"
                      inline
                      type="radio"
                      label="Evet"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 22. Davranışsal sorunları var mı? */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="mb-3 align-items-center">
                  <Col md="4">
                    <Form.Label>22. Davranışsal sorunları var mı?</Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q22"
                      inline
                      type="radio"
                      label="Var"
                    />
                    <Form.Check
                      className="check-input"
                      name="q22"
                      inline
                      type="radio"
                      label="Yok"
                    />
                  </Col>
                  <Row>
                    <Col sm="auto" className="align-items-center">
                      <Form.Check
                        name="q22-1"
                        inline
                        type="radio"
                        label="Otizm"
                        className="check-input"
                      />
                      <Form.Check
                        name="q22-1"
                        inline
                        type="radio"
                        label="DEHB"
                      />
                      <Form.Check
                        name="q22-1"
                        inline
                        type="radio"
                        label="Anksiyete/ Depresyon"
                        className="check-input"
                      />
                      <Form.Check
                        name="q22-1"
                        inline
                        type="radio"
                        label="Diğer"
                        className="check-input"
                      />
                      <Form.Control
                        className="text-input"
                        name="q22-comment"
                        type="text"
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 23. Fizik Muayene */}
            <Card className="card">
              <Card.Body>
                <Row>
                  <Form.Label>
                    <b>Fizik Muayene</b>
                  </Form.Label>
                </Row>
                <Row>
                  <Form.Group as={Row} className="mb-3 align-items-center">
                    {/* Boy */}
                    <Row className="mb-1">
                      <Col sm="auto" className="align-items-center">
                        <InputGroup>
                          <InputGroup.Text className="input-group-text">
                            Boy (cm):
                          </InputGroup.Text>
                          <Form.Control
                            className="text-input"
                            name="23-1"
                            type="text"
                          />
                          <InputGroup.Text className="input-group-text">
                            Persentil:
                          </InputGroup.Text>
                          <Form.Control
                            className="text-input"
                            name="23-2"
                            type="text"
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                    {/* Kilo */}
                    <Row>
                      <Col sm="auto" className="align-items-center">
                        <InputGroup>
                          <InputGroup.Text className="input-group-text">
                            Kilo (kg):
                          </InputGroup.Text>
                          <Form.Control
                            className="text-input"
                            name="23-3"
                            type="text"
                          />
                          <InputGroup.Text className="input-group-text">
                            Kilo (persentil):
                          </InputGroup.Text>
                          <Form.Control
                            className="text-input"
                            name="23-4"
                            type="text"
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                  </Form.Group>
                </Row>
                {/* 24. Gelişim geriliği var mı?                   */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Gelişim geriliği var mı?</Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q24"
                      inline
                      type="radio"
                      label="Var"
                    />
                    <Form.Check
                      className="check-input"
                      name="q24"
                      inline
                      type="radio"
                      label="Yok"
                    />
                  </Col>
                </Form.Group>
                {/* 25. Anüs yerleşimi                                */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Anüs yerleşimi</Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q25"
                      inline
                      type="radio"
                      label="Normal"
                    />
                    <Form.Check
                      className="check-input"
                      name="q25"
                      inline
                      type="radio"
                      label="Ektopik"
                    />
                    <Form.Check
                      className="check-input"
                      name="q25"
                      inline
                      type="radio"
                      label="ARM"
                    />
                  </Col>
                </Form.Group>
                {/* 26. Anal Fissür */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Anal Fissür</Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q26"
                      inline
                      type="radio"
                      label="Var"
                    />
                    <Form.Check
                      className="check-input"
                      name="q26"
                      inline
                      type="radio"
                      label="Yok"
                    />
                  </Col>
                </Form.Group>
                {/* 27. Anal Fissür varsa */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Anal Fissür varsa</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q27"
                      inline
                      type="radio"
                      label="Akut"
                    />
                    <Form.Check
                      className="check-input"
                      name="q27"
                      inline
                      type="radio"
                      label="Kronik"
                    />
                  </Col>
                </Form.Group>
                {/* 28. Hemoroid */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Hemoroid</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q28"
                      inline
                      type="radio"
                      label="Var"
                    />
                    <Form.Check
                      className="check-input"
                      name="q28"
                      inline
                      type="radio"
                      label="Yok"
                    />
                  </Col>
                </Form.Group>
                {/* 29. Rektal Prolapsus */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Rektal Prolapsus</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q29"
                      inline
                      type="radio"
                      label="Var"
                    />
                    <Form.Check
                      className="check-input"
                      name="q29"
                      inline
                      type="radio"
                      label="Yok"
                    />
                  </Col>
                </Form.Group>
                {/* 30. Perianal fistül- Abse                       */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Perianal fistül- Abse</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q30"
                      inline
                      type="radio"
                      label="Var"
                    />
                    <Form.Check
                      className="check-input"
                      name="q30"
                      inline
                      type="radio"
                      label="Yok"
                    />
                  </Col>
                </Form.Group>
                {/* 31. Anal stenoz */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Anal stenoz</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q31"
                      inline
                      type="radio"
                      label="Var"
                    />
                    <Form.Check
                      className="check-input"
                      name="q31"
                      inline
                      type="radio"
                      label="Yok"
                    />
                  </Col>
                </Form.Group>
                {/* 32. Sakral Bölge */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Sakral Bölge</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q32"
                      inline
                      type="radio"
                      label="Normal"
                    />
                    <Form.Check
                      className="check-input"
                      name="q32"
                      inline
                      type="radio"
                      label="Sakral Gamze"
                    />
                    <Form.Check
                      className="check-input"
                      name="q32"
                      inline
                      type="radio"
                      label="Kıllanma Artışı"
                    />
                    <Form.Check
                      className="check-input"
                      name="q32"
                      inline
                      type="radio"
                      label="Kitle"
                    />
                  </Col>
                </Form.Group>
                {/* 33. Karında ele gelen fekalom */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Karında ele gelen fekalom</Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q33"
                      inline
                      type="radio"
                      label="Var"
                    />
                    <Form.Check
                      className="check-input"
                      name="q33"
                      inline
                      type="radio"
                      label="Yok"
                    />
                  </Col>
                </Form.Group>
                {/* 34. Batın Distansiyonu */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Batın Distansiyonu</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q34"
                      inline
                      type="radio"
                      label="Var"
                    />
                    <Form.Check
                      className="check-input"
                      name="q34"
                      inline
                      type="radio"
                      label="Yok"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 35. Rektal Tuşe */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>
                      <b>Rektal Tuşe</b>
                    </Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q35"
                      inline
                      type="radio"
                      label="Yapıldı"
                    />
                    <Form.Check
                      className="check-input"
                      name="q35"
                      inline
                      type="radio"
                      label="Yapılmadı"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
              <Card.Body className="wrap-to-right">
                {/* 36. Rektum dışkı ile dolu mu? */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Rektum dışkı ile dolu mu?</Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q36"
                      inline
                      type="radio"
                      label="Evet"
                    />
                    <Form.Check
                      className="check-input"
                      name="q36"
                      inline
                      type="radio"
                      label="Hayır"
                    />
                  </Col>
                </Form.Group>
                {/* 37. Dışkının kıvamı */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Dışkının kıvamı</Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q37"
                      inline
                      type="radio"
                      label="Sert"
                    />
                    <Form.Check
                      className="check-input"
                      name="q37"
                      inline
                      type="radio"
                      label="Balçık"
                    />
                    <Form.Check
                      className="check-input"
                      name="q37"
                      inline
                      type="radio"
                      label="Sulu"
                    />
                  </Col>
                </Form.Group>
                {/* 38. Anal kanalın maksimum sıkma gücü */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Anal kanalın maksimum sıkma gücü</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check name="q38" inline type="radio" label="Zayıf" />
                    <Form.Check name="q38" inline type="radio" label="Güçlü" />
                    <Form.Check
                      name="q38"
                      inline
                      type="radio"
                      label="Değerlendirilemedi"
                    />
                  </Col>
                </Form.Group>
                {/* 39. Ikınma sırasında anal kanal basıncı            */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>
                      Ikınma sırasında anal kanal basıncı{' '}
                    </Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q39"
                      inline
                      type="radio"
                      label="Azalıyor"
                    />
                    <Form.Check
                      className="check-input"
                      name="q39"
                      inline
                      type="radio"
                      label="Artıyor (dissinerji?)"
                    />
                    <Form.Check
                      className="check-input"
                      name="q39"
                      inline
                      type="radio"
                      label="Değerlendirilemedi"
                    />
                  </Col>
                </Form.Group>
                {/* 40. Ikınma sırasında karın kaslarını kasabiliyor mu?            */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>
                      Ikınma sırasında karın kaslarını kasabiliyor mu?
                    </Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q40"
                      inline
                      type="radio"
                      label="Zayıf"
                    />
                    <Form.Check
                      className="check-input"
                      name="q40"
                      inline
                      type="radio"
                      label="Güçlü"
                    />
                    <Form.Check
                      className="check-input"
                      name="q40"
                      inline
                      type="radio"
                      label="Hiç Kasamıyor"
                    />
                    <Form.Check
                      className="check-input"
                      name="q40"
                      inline
                      type="radio"
                      label="Değerlendirilemedi"
                    />
                  </Col>
                </Form.Group>
                {/* 41. Tuşeden sonra patlar tarzda gaita çıkışı var mı?            */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>
                      Tuşeden sonra patlar tarzda gaita çıkışı var mı?
                    </Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q41"
                      inline
                      type="radio"
                      label="Var"
                    />
                    <Form.Check
                      className="check-input"
                      name="q41"
                      inline
                      type="radio"
                      label="Yok"
                    />
                  </Col>
                </Form.Group>
                {/* 42. Ek özellik */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>
                      <b>Ek Özellik</b>
                    </Form.Label>
                  </Col>
                  <Row>
                    <Col md="12" className="align-items-center">
                      <Form.Control
                        size="sm"
                        name="q42"
                        as="textarea"
                        rows={3}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* 43. Kan Tetkikleri */}
            <Card className="card">
              <Card.Body>
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>
                      <b>Kan Tetkikleri</b>
                    </Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q43"
                      inline
                      type="radio"
                      label="Anemi"
                    />
                    <Form.Check
                      className="check-input"
                      name="q43"
                      inline
                      type="radio"
                      label="Hipotiroidi"
                    />
                    <Form.Check
                      className="check-input"
                      name="q43"
                      inline
                      type="radio"
                      label="Hipokalemi"
                    />
                    <Form.Check
                      className="check-input"
                      name="q43"
                      inline
                      type="radio"
                      label="Diğer"
                    />
                    <Form.Control
                      className="text-input"
                      size="sm"
                      name="q22-comment"
                      type="text"
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* Direkt Grafi */}
            <Card className="card">
              <Card.Body>
                <Col md="3">
                  <Form.Label>
                    <b>Direkt Grafi</b>
                  </Form.Label>
                </Col>
              </Card.Body>
              <Card.Body>
                {/* 44. Sakrum Gelişimi */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Sakrum Gelişimi</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q44"
                      inline
                      type="radio"
                      label="Normal"
                    />
                    <Form.Check
                      className="check-input"
                      name="q44"
                      inline
                      type="radio"
                      label="Anormal"
                    />
                    <Form.Check
                      className="check-input"
                      name="q44"
                      inline
                      type="radio"
                      label="Anormal"
                    />
                    <Form.Control
                      className="text-input"
                      name="q22-comment"
                      type="text"
                    />
                  </Col>
                </Form.Group>
                <Row>
                  <Col>
                    <img
                      src={require('/assets/q44.png')}
                      alt="q44"
                      height={250}
                      className="mb-3"
                    />
                  </Col>
                </Row>
                {/* 44. Sakral Oran */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Sakral Oran</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Control
                      size="sm"
                      className="text-input"
                      name="q44"
                      type="text"
                    />
                  </Col>
                </Form.Group>
                {/* 45. Fekal impaksiyon */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Fekal impaksiyon</Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Check
                      className="check-input"
                      name="q45"
                      inline
                      type="radio"
                      label="Var"
                    />
                    <Form.Check
                      className="check-input"
                      name="q45"
                      inline
                      type="radio"
                      label="Yok"
                    />
                  </Col>
                </Form.Group>
                {/* 46. Fekal impaksiyon derecesi */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Fekal impaksiyon</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q46"
                      inline
                      type="radio"
                      label="Hafif"
                    />
                    <Form.Check
                      className="check-input"
                      name="q46"
                      inline
                      type="radio"
                      label="Orta"
                    />
                    <Form.Check
                      className="check-input"
                      name="q46"
                      inline
                      type="radio"
                      label="Ağır"
                    />
                  </Col>
                </Form.Group>
                {/* 47. Kolonda dilatasyon */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Kolonda dilatasyon</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q46"
                      inline
                      type="radio"
                      label="Var"
                    />
                    <Form.Check
                      className="check-input"
                      name="q46"
                      inline
                      type="radio"
                      label="Yok"
                    />
                  </Col>
                </Form.Group>
                {/* 48. Kontrastlı Kolon Grafisi */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label> Kontrastlı Kolon Grafisi</Form.Label>
                  </Col>
                  <Col md="auto">
                    <Form.Control
                      name="q48"
                      type="date"
                      className="text-input"
                    />
                  </Col>
                </Form.Group>
                {/* 49. Kolonda Fekal impaksiyon varmı? */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Kolonda Fekal impaksiyon varmı?</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q49"
                      inline
                      type="radio"
                      label="Var"
                    />
                    <Form.Check
                      className="check-input"
                      name="q49"
                      inline
                      type="radio"
                      label="Yok"
                    />
                  </Col>
                </Form.Group>
                {/* 50. Kolonda Dilatasyon? */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Kolonda Dilatasyon?</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q50"
                      inline
                      type="radio"
                      label="Var"
                    />
                    <Form.Check
                      className="check-input"
                      name="q50"
                      inline
                      type="radio"
                      label="Yok"
                    />
                  </Col>
                  <Row>
                    <Col md="auto" className="wrap-to-right">
                      <Form.Label style={{ marginRight: 20 }}>
                        Var ise
                      </Form.Label>
                      <Form.Check
                        className="check-input"
                        name="q50-1"
                        inline
                        type="radio"
                        label="İzole Rektum"
                      />
                      <Form.Check
                        className="check-input"
                        name="q50-1"
                        inline
                        type="radio"
                        label="Rektosigmoid"
                      />{' '}
                      <Form.Check
                        className="check-input"
                        name="q50-1"
                        inline
                        type="radio"
                        label="Yaygın"
                      />
                      <Form.Control
                        className="text-input"
                        name="q50-1-comment"
                        type="text"
                        style={{ width: 200, display: 'inline' }}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                {/* 51. Rektopelvik oran */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Rektopelvik oran</Form.Label>
                  </Col>
                  <Col md="5">
                    <InputGroup>
                      <Form.Control
                        className="text-input"
                        // style={{ margin: 4 }}
                        name="q51-1"
                        type="text"
                      />
                      <InputGroup.Text className="input-group-text">
                        &gt; 0,61 = Megarektum
                        <Form.Check
                          style={{ marginLeft: 10 }}
                          className="check-input"
                          name="q51-2"
                          inline
                          type="radio"
                          label="Var"
                        />
                        <Form.Check
                          className="check-input"
                          name="q51-2"
                          inline
                          type="radio"
                          label="Yok"
                        />
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Form.Group>
                {/* 52. Transizyonel zon */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Kolonda dilatasyon</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <Form.Check
                      className="check-input"
                      name="q52"
                      inline
                      type="radio"
                      label="Yok"
                    />
                    <Form.Check
                      className="check-input"
                      name="q52"
                      inline
                      type="radio"
                      label="Var"
                    />
                    <Form.Control
                      className="text-input"
                      name="q52-comment"
                      type="text"
                      style={{ width: 200 }}
                    />
                  </Col>
                </Form.Group>
                {/* 52. Tüm kolonun dolum hacmi */}
                <Form.Group as={Row} className="align-items-center">
                  <Col md="4">
                    <Form.Label>Tüm kolonun dolum hacmi</Form.Label>
                  </Col>
                  <Col md="auto" className="align-items-center">
                    <InputGroup>
                      <Form.Control
                        className="text-input"
                        name="q52-comment"
                        type="text"
                        style={{ width: 100 }}
                      />
                      <InputGroup.Text className="input-group-text">
                        ml
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                  <Row className="wrap-to-right">
                    <Col md="auto" className="align-items-center">
                      <Form.Check
                        className="check-input"
                        name="q52"
                        inline
                        type="radio"
                        label="Hipermotil"
                      />
                      <Form.Check
                        className="check-input"
                        name="q52"
                        inline
                        type="radio"
                        label="Hipomotil"
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Card.Body>
            </Card>
            {/* BARSAK YÖNETİM PROGRAMI */}
            <Card className="card">
              <Card.Title className="card-title">
                BARSAK YÖNETİM PROGRAMI
              </Card.Title>
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
                        <InputGroup.Text>
                          Lavman sıvısı hacmi :{' '}
                        </InputGroup.Text>
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
                        6. Yatarak Direkt Batın Grafisi (YDBG): Kolonun boş
                        olduğundan emin olana kadar günlük grafi kontrolü
                      </Form.Label>
                    </Col>
                  </Row>
                  <Row className="wrap-to-right">
                    <Col md="3">
                      <InputGroup>
                        <InputGroup.Text>Tarih</InputGroup.Text>
                        <Form.Control
                          name="q58"
                          className="text-input"
                          type="date"
                        />
                      </InputGroup>
                    </Col>
                    <Col md="3">
                      <InputGroup>
                        <InputGroup.Text>YDBG</InputGroup.Text>
                        <Form.Control
                          name="q58"
                          className="text-input"
                          type="text"
                        />
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
                      7. Günlük laksatif tedavi: (Kolon boş ve ya boşaltıldıktan
                      sonra)
                    </Form.Label>
                  </Col>
                  <Col md="3">
                    <InputGroup>
                      <InputGroup.Text>Tarih</InputGroup.Text>
                      <Form.Control
                        className="text-input"
                        name="q54"
                        type="date"
                      />
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
                        <Form.Control
                          className="text-input"
                          name="q54"
                          type="date"
                        />
                      </InputGroup>
                    </Col>
                    <Col md="4">
                      <InputGroup>
                        <InputGroup.Text>
                          Laksatif Başlangıç Dozu
                        </InputGroup.Text>
                        <Form.Control
                          className="text-input"
                          name="q54"
                          type="text"
                        />
                      </InputGroup>
                    </Col>
                    <Col md="4">
                      <InputGroup>
                        <InputGroup.Text>Fiber Dozu</InputGroup.Text>
                        <Form.Control
                          className="text-input"
                          name="q54"
                          type="text"
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="wrap-to-right">
                    <Col md="3">
                      <InputGroup>
                        <InputGroup.Text>Tarih</InputGroup.Text>
                        <Form.Control
                          className="text-input"
                          name="q54"
                          type="date"
                        />
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
                        <Form.Control
                          className="text-input"
                          name="q54"
                          type="text"
                        />
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
          </Form>
        </Container>
      </div>
    );
  }
}
