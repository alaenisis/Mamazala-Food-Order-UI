import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();

  return (
    <Card>
      <Card.Header>
        <h5 className="mb-0">Your Order</h5>
      </Card.Header>
      <Card.Body>
        {cart.map((item) => (
          <div key={item.name} className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h6 className="mb-0">{item.name}</h6>
              <small className="text-muted">R{item.price.toFixed(2)} x {item.quantity}</small>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Button 
                variant="outline-secondary" 
                size="sm"
                onClick={() => updateQuantity(item.name, -1)}
              >
                -
              </Button>
              <span>{item.quantity}</span>
              <Button 
                variant="outline-secondary" 
                size="sm"
                onClick={() => updateQuantity(item.name, 1)}
              >
                +
              </Button>
              <Button 
                variant="outline-danger" 
                size="sm"
                onClick={() => removeFromCart(item.name)}
              >
                ×
              </Button>
            </div>
          </div>
        ))}
        
        {cart.length > 0 && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Select Pickup Time</Form.Label>
              <Form.Select>
                <option>11:30 AM</option>
                <option>12:00 PM</option>
                <option>12:30 PM</option>
                <option>1:00 PM</option>
                <option>1:30 PM</option>
              </Form.Select>
            </Form.Group>
            
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="fw-bold">Total:</span>
              <span className="fw-bold">R{getTotal().toFixed(2)}</span>
            </div>
            
            <Button 
              variant="success" 
              className="w-100"
            >
              Place Order
            </Button>
          </>
        )}
        
        {cart.length === 0 && (
          <p className="text-center text-muted mb-0">Your cart is empty</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default Cart;
 