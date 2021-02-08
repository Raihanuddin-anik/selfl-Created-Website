import React from 'react';
import { Button, Card } from 'react-bootstrap';
const LocationItem = (props) => {
  
  const { name, image} = props.Location;
  const {isActive} =props.isActive;
 
  return (
    <Card className={`bg-transparent ${isActive ? 'active' : 'not-active'}`}>
    <Card.Img variant="top" className="img-fluid" src={image} />
    <Button className="bg-transparent booking">{name}</Button>
  </Card>
  );
};

export default LocationItem;