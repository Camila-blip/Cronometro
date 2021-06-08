import {
  Container,
  Row,
  Col,
  Button,
  Nav,
  NavDropdown,
  Form
} from 'react-bootstrap';
function App() {
  return (
    <Container fluid style={{ backgroundColor: "black" }}>
      <Container>
        <Row>
          <Col sm={2}>
            <a>
              <img src="logo2.jfif" width="100" />
            </a>
          </Col>
          <Col sm={3} style={{ marginTop: "3%" }}>
            <Form.Control id="pesquisa" name="pesquisa" placeholder="Digite o que você procura" />
          </Col>
          <Col sm={1} style={{ marginTop: "3%" }}>
            <Button type="button" id="btnbuscar" name="btnbuscar">
              Buscar
            </Button>
          </Col>
          <Col sm={4}>
          </Col>
          <Col sm={2} style={{ marginTop: "3%" }}>
            <Button>Carrinho
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </Button>
          </Col>
        </Row>
        <Nav variant="pills" activeKey="1" as="ul">
          <Container>
            <NavDropdown title="Dropdown" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Dropdown" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Dropdown" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item as="li">
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
          </Container>
        </Nav>
      </Container>
    </Container>
  );
}

export default App;
