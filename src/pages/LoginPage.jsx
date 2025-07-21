import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../actions';
import { Container, Row, Col, Form, Button, Card, Image } from 'react-bootstrap';
import Footer from '../components/Footer';
import '../styles/Login.scss';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (password) => {
    const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    return pattern.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError('Password must be 8+ characters with 1 capital, 1 number, and 1 symbol.');
    } else {
      setError('');
      dispatch(login(email));
      navigate('/countries');
    }
  };

  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            <Card className="p-4">
              <h3 className="text-center mb-3">Login</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                {error && <div className="text-danger mb-2">{error}</div>}
                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Card>
          </Col>
          <Col md={6} className="d-none d-md-block">
            <Image
              src="../images/img1.png"
              alt="Login visual"
              fluid
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default LoginPage;