import React from 'react';

const EpisodeItem = ({ item }) => {
  return (
    <tr>
      <td className="text-secondary">{item.episode}</td>
      <td>{item.name}</td>
      <td>{item.characters.length}</td>
      <td>{item.air_date}</td>
    </tr>
  );
};

export default EpisodeItem;
