import React from 'react';

const LocationItem = ({ item }) => {
  return (
    <tr>
      <td className="text-secondary">{item.id}</td>
      <td>{item.name}</td>
      <td>{item.type}</td>
      <td>{item.dimension}</td>
      <td>{item.residents.length}</td>
    </tr>
  );
};

export default LocationItem;
