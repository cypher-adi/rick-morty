import React, { useState, useEffect } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

const CharacterModal = ({ show, handleClose, item }) => {
  const [location, setLocation] = useState('');

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
  const location_fetch = () => {
    fetch(item.episode[0], { method: 'GET' })
      .then((res) => res.json())
      .then((resJson) => {
        setLocation(resJson.name);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    function fetchLocation() {
      location_fetch();
      return 1;
    }
    fetchLocation();
  }, []);

  return (
    <Modal
      show={show}
      size="lg"
      onHide={() => handleClose()}
      animation={true}
      keyboard={true}
      centered
      style={{ background: 'rgba(12, 12, 12, 0.75)' }}
    >
      <div className="bg-dark text-light p-2">
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md="3" className="d-sm-none d-md-block">
              <img src={item.image} className="img-thumbnail" alt={item.name} />
            </Col>
            <Col md="9" style={{ lineHeight: '30px', paddingTop: '10px' }}>
              <span className="text-muted">Origin: </span>
              {item.origin.name}
              <br />
              <span className="text-muted">Status: </span>
              <span className={statusColor}>{item.status}</span> <br />
              <span className="text-muted">Species: </span>
              {item.species}
              <br />
              <span className="text-muted">Gender: </span>
              {item.gender} {' ( '}
              <i
                className={`fa fa-${genderIcon} text-info`}
                aria-hidden="true"
              ></i>
              {' )'}
              <br />
              {item.type && (
                <>
                  <span className="text-muted">Type: </span>
                  {item.type}
                  <br />
                </>
              )}
              <span className="text-muted">Last Known Location: </span>
              {item.location.name}
              <br />
              <span className="text-muted">First Seen in: </span>
              {location}
              <br />
              <span className="text-muted">Total Episodes Appeared in: </span>
              {item.episode.length}
            </Col>
          </Row>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default CharacterModal;
