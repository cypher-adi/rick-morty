import React from 'react';
import { Card, Col } from 'react-bootstrap';

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
    <Col md={3} className="p-3 character-card" key={item.index}>
      <span
        className={`${statusColor}`}
        style={{
          fontSize: '2rem',
          zIndex: '10',
          position: 'absolute',
          marginLeft: '10px',
        }}
      >
        &#9673;
      </span>
      <Card bg={'dark'} text={'light'}>
        <Card.Img className="character-img" variant="top" src={item.image} />
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
            <button
              className="banner-button"
              onClick={() => alert('Clicked More Info')}
            >
              More Info
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CharacterItem;
