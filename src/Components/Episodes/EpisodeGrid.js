import React, { useState, useEffect } from 'react';
import Spinner from '../UI/Spinner';
import Pagination from '../UI/CustomPagination';
import EpisodeItem from './EpisodeItem';
import { Table } from 'react-bootstrap';
import { endpoints } from '../../Utils/endpoints';

const { episodes } = endpoints;

const EpisodeGrid = () => {
  const [loaded, setLoaded] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState({});
  const [totalpages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const fetchData = (page = activePage) => {
    setLoaded(false);
    const url = episodes + `?page=${page}`;
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
      <h2 className="text-center">
        <span className="border-bottom border-danger">Episodes</span>
      </h2>
      {!loaded && <Spinner />}
      {loaded && errorMsg !== '' && (
        <h3 className="text-center text-danger"> {errorMsg} </h3>
      )}
      {loaded && errorMsg === '' && (
        <Table
          striped
          responsive
          hover
          bordered
          variant="dark"
          className="text-light text-center mt-3"
        >
          <thead>
            <tr className="text-warning">
              <th>Episode</th>
              <th>Name</th>
              <th>Characters</th>
              <th>Air Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <EpisodeItem item={item} key={item.id} />
            ))}
          </tbody>
        </Table>
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

export default EpisodeGrid;
