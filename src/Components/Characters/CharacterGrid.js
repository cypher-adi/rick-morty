import React, { useState, useEffect } from 'react';
import Spinner from '../UI/Spinner';
import Pagination from '../UI/CustomPagination';
import { endpoints } from '../../Utils/endpoints';
import CharacterItem from './CharacterItem';
import { Row } from 'react-bootstrap';

const { characters } = endpoints;

const CharacterGrid = () => {
  const [loaded, setLoaded] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState({});
  const [totalpages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const fetchData = (page = activePage) => {
    setLoaded(false);
    const url = characters + `?page=${page}`;
    fetch(url, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setData(resJson.results);
        setTotalPages(resJson.info.pages);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg('Those Morons disabled the web.');
        setLoaded(true);
      });
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    fetchData(pageNumber);
  };

  useEffect(() => {
    function fetchAPI() {
      fetchData();
      return 1;
    }
    fetchAPI();
  }, []);

  return (
    <>
      <h2 className="text-center">Characters</h2>
      {!loaded && <Spinner />}
      {loaded && errorMsg !== '' && (
        <h3 className="text-center text-danger"> {errorMsg} </h3>
      )}
      <Row>
        {loaded &&
          errorMsg === '' &&
          data.map((item) => <CharacterItem item={item} />)}
      </Row>
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
