import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CharacterItem = ({ item, showInfo }) => {
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
      <Card bg={'dark'} text={'light'} className="text-center">
        <Card.Img className="character-img" variant="top" src={item.image} />
        <Card.Header className="text-warning">{item.name}</Card.Header>
        <Card.Body>
          <Card.Text>
            {item.species} | {item.gender}
            {' ( '}
            <i
              className={`fa fa-${genderIcon} text-success`}
              aria-hidden="true"
            ></i>
            {' )'}
          </Card.Text>
          <button className="banner-button" onClick={() => showInfo(item)}>
            More Info
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CharacterItem;
