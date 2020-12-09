import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const CharacterItem = ({ item }) => {
  var genderIcon = item.gender;
  if (genderIcon.toLowerCase() === 'male') {
    genderIcon = 'mars';
  } else if (genderIcon.toLowerCase() === 'female') {
    genderIcon = 'venus';
  } else if (genderIcon.toLowerCase() === 'unknown') {
    genderIcon = 'question';
  } else {
    genderIcon = 'genderless';
  }

  var statusColor =
    item.status === 'Alive'
      ? 'text-success'
      : item.status === 'Dead'
      ? 'text-danger'
      : 'text-muted';

  return (
    <Col md={3} className="p-3 character-card">
      <Card bg={'dark'} text={'light'} key={item.index}>
        <Card.Img className="character-img" variant="top" src={item.image} />
        <Card.ImgOverlay className="pt-0 pl-2">
          <Card.Title>
            <span className={`${statusColor}`} style={{ fontSize: '2rem' }}>
              &#9673;
            </span>
          </Card.Title>
        </Card.ImgOverlay>
        <Card.Header className="text-warning">{item.name}</Card.Header>
        <Card.Body>
          <Card.Text>
            Gender: {item.gender}
            {' ( '}
            <i
              className={`fa fa-${genderIcon} text-success`}
              aria-hidden="true"
            ></i>
            {' )'}
            <br />
            Species: {item.species} <br />
          </Card.Text>
          <div className="text-center">
            <Button variant="info">More Info</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CharacterItem;
