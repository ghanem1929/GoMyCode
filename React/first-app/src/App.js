import "./App.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import useCollapse from "react-collapsed";

function App() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="AppContainer">
      <Container fluid="md" className="App">
        <Row xs={1} md={2} className="g-2">
          <Col>
            <Card className="leftCard" bg="#242F9B">
              <div className="closeIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
              <Card.Title className="cardTitle">Get in touch</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Card.Subtitle className="mb-2 text-muted label">
                    Name
                  </Card.Subtitle>
                  <Form.Control
                    type="Name"
                    className="inputs"
                    placeholder="Enter your name"
                  />
                  {/* <Form.Text className="textInfo">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Card.Subtitle className="mb-2 text-muted">
                    Email
                  </Card.Subtitle>
                  <Form.Control
                    type="Email"
                    className="inputs"
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Card.Subtitle className="mb-2 text-muted">
                    company
                  </Card.Subtitle>
                  <Form.Control
                    type="Name"
                    className="inputs"
                    placeholder="Enter your company name"
                  />
                </Form.Group>
                <Form.Group className="intrrest">
                  <Card.Subtitle className="mb-2 text-muted ">
                    interrested in ...
                  </Card.Subtitle>
                  <button className="collapseBtn" {...getToggleProps()}>
                    {isExpanded ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-arrow-down"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <polyline points="19 12 12 19 5 12"></polyline>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-arrow-up"
                      >
                        <line x1="12" y1="19" x2="12" y2="5"></line>
                        <polyline points="5 12 12 5 19 12"></polyline>
                      </svg>
                    )}
                  </button>
                  <section {...getCollapseProps()}>
                    <ul className="list">
                      <li>sport</li>
                      <li>technoligy</li>
                      <li>business</li>
                    </ul>
                  </section>
                </Form.Group>
              </Form>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-mail"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
            </Card>
          </Col>

          <Col>
            <Card className="leftCard" bg="#242F9B">
              <Card.Title>Thank you</Card.Title>
              <Card.Subtitle>we'll be in touch shortly</Card.Subtitle>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
