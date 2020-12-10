import React, { useState, useEffect } from 'react';
import Spinner from '../UI/Spinner';
import Pagination from '../UI/CustomPagination';
import LocationItem from './LocationItem';
import { Table } from 'react-bootstrap';
import { endpoints } from '../../Utils/endpoints';

const { locations } = endpoints;

const LocationGrid = () => {
  const [loaded, setLoaded] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState({});
  const [totalpages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const fetchData = (page = activePage) => {
    setLoaded(false);
    const url = locations + `?page=${page}`;
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
        <span className="border-bottom border-danger">Locations</span>
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
              <th>S. No.</th>
              <th>Name</th>
              <th>Type</th>
              <th>Dimension</th>
              <th>Residents</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <LocationItem item={item} key={item.id} />
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

export default LocationGrid;
