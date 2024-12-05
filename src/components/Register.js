import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Container, Row, Col, Alert, Form, Button } from 'react-bootstrap';

const Register = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const { register: authRegister } = useContext(AuthContext);

  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      sessionStorage.clear();
      try {
        if (formData.password !== formData.confirmPassword) {
          setError('Password and confirm password do not match');
          return;
        }
  
        const userData = {
          name: formData.name,
          email: formData.email,
          password: formData.password
        };
  
        const response = await fetch('http://localhost:8083/api/customers/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });

        const data = await response.json();
        console.log(data);
        authRegister(data);
        setSuccess('Registration successful!');
        setTimeout(() => {
            sessionStorage.setItem('userName', data.name);
            navigate('/menu');
        }, 1500);
      } catch (error) {
        console.error(error);
        setError('Registration failed!');
      }
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
            <h2 className="mb-4 text-dark">Register</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                className="w-100"
                style={{ 
                  backgroundColor: '#6B8E23',
                  borderColor: '#6B8E23'
                }}
              >
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
};

export default Register;

