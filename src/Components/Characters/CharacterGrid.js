import React, { useState, useEffect } from 'react';
import Spinner from '../UI/Spinner';
import Pagination from '../UI/CustomPagination';
import { endpoints } from '../../Utils/endpoints';
import CharacterItem from './CharacterItem';
import { Row, Form, Col } from 'react-bootstrap';
import CharacterModal from './CharacterModal';

const { characters } = endpoints;

const CharacterGrid = () => {
  const [loaded, setLoaded] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState({});
  const [totalpages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const [show, setShow] = useState(false);
  const [modalItem, setModalItem] = useState([]);

  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  const fetchData = (n = name, s = status, g = gender, page = 1) => {
    setLoaded(false);
    setErrorMsg('');
    const url = characters + `?name=${n}&status=${s}&gender=${g}&page=${page}`;
    fetch(url, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((resJson) => {
        if (!resJson.error) {
          setData(resJson.results);
          setTotalPages(resJson.info.pages);
          setLoaded(true);
        } else {
          setErrorMsg(
            'Did those Morons disabled the web or no such person exists !?'
          );
          setLoaded(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(
          'Did those Morons disabled the web or no such person exists !?'
        );
        setLoaded(true);
      });
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    fetchData(name, status, gender, pageNumber);
  };

  useEffect(() => {
    function fetchAPI() {
      fetchData();
      return 1;
    }
    fetchAPI();
  }, []);

  const showInfo = (item) => {
    setShow(true);
    setModalItem(item);
  };

  const handleClose = () => {
    setShow(false);
    setModalItem([]);
  };

  const handleNameSearch = (e) => {
    var name = e.target.value;
    setName(name);
    setActivePage(1);
    fetchData(name, status, gender, 1);
  };

  const handleStatusChange = (e) => {
    var status = e.target.value;
    setStatus(status);
    setActivePage(1);
    fetchData(name, status, gender, 1);
  };

  const handleChange = (e) => {
    var gender = e.target.value;
    setGender(gender);
    setActivePage(1);
    fetchData(name, status, gender, 1);
  };

  return (
    <>
      <h2 className="text-center">
        <span className="border-bottom border-danger">Characters</span>
      </h2>
      <Form className="p-3">
        <Form.Row>
          <Col>
            <Form.Control
              type="text"
              id="name"
              value={name}
              onChange={handleNameSearch}
              placeholder="Search by name"
            />
          </Col>
          <Col>
            <Form.Control as="select" id="status" onChange={handleStatusChange}>
              <option disabled selected>
                Status
              </option>
              <option value="">All</option>
              <option>Alive</option>
              <option>Dead</option>
              <option>Unknown</option>
            </Form.Control>
          </Col>
          <Col>
            <Form.Control as="select" id="gender" onChange={handleChange}>
              <option disabled selected>
                Gender
              </option>
              <option value="">All</option>
              <option>Male</option>
              <option>Female</option>
              <option>Genderless</option>
              <option>Unknown</option>
            </Form.Control>
          </Col>
        </Form.Row>
      </Form>
      {!loaded && <Spinner />}
      {loaded && errorMsg !== '' && (
        <h3 className="text-center text-danger"> {errorMsg} </h3>
      )}
      <Row>
        {loaded &&
          errorMsg === '' &&
          data.map((item) => (
            <CharacterItem item={item} key={item.id} showInfo={showInfo} />
          ))}
      </Row>
      {show && (
        <CharacterModal
          show={show}
          item={modalItem}
          handleClose={handleClose}
        />
      )}
      {data && (
        <Pagination
          activePage={activePage}
          total_pages={totalpages}
          onChange={handlePageChange}
        />
      )}
    </>
  );
};

export default CharacterGrid;
