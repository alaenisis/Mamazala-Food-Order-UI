import React, { useState, useContext } from 'react';
import { Container, Row, Col, Alert, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const [error, setError] = useState('');
  const {login }= useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sessionStorage.clear();
    try {
      const response = await fetch('http://localhost:8083/api/customers/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        login(data);
        sessionStorage.setItem('userName', data.name);
        navigate('/menu');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const handleForgotPassword = () => {
    window.location.href = '../forgot-password.html';
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-white">
      <Row className="shadow" style={{ maxWidth: '800px', width: '100%' }}>
        <Col md={6} className="p-0">
          <div className="bg-warning h-100">
            <img
              src={require('../assets/img/image.png')}
              alt="LoginPic"
              className="w-100 h-100 object-fit-cover"
            />
          </div>
        </Col>
        <Col md={6} className="p-4" style={{ backgroundColor: '#F5F5DC' }}>
          <h2 className="mb-4 text-dark">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button
              type="submit"
              className="w-100"
              style={{
                backgroundColor: '#6B8E23',
                borderColor: '#6B8E23',
              }}
            >
              Login
            </Button>
            <Link
              className="d-block text-center mt-2"
              onClick={handleForgotPassword}
            >
              <br></br>
              Forgot Password?
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

