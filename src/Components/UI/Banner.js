import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const data = [
  'https://images6.alphacoders.com/909/thumb-1920-909641.png',
  'https://cutewallpaper.org/21/cool-rick-and-morty-wallpaper/Rick-and-Morty-Wallpapers-Top-Free-Rick-and-Morty-.jpg',
  'https://wallpaperboat.com/wp-content/uploads/2019/04/rick-and-morty-wallpaper-wallpaper-background-027.jpg',
  'https://wallpapermemory.com/uploads/729/rick-and-morty-background-hd-1920x1080-470652.jpg',
];

const Banner = () => {
  const [pic, setPic] = useState('');

  useEffect(() => {
    const fetchPic = () => {
      let idx = Math.floor(Math.random() * data.length);
      setPic(data[idx]);
      return pic;
    };
    fetchPic();
  }, [pic]);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${pic})`,
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">Hey Rick</h1>
        <h1 className="banner-description">
          "Sometimes Science Is More Art Than Science, Morty" <br />
          <strong>Wubba Lubba Dub Dub!</strong>
        </h1>
        <div className="banner-buttons">
          <Link to="/characters" className="banner-button">
            Explore Characters
          </Link>
          <Link to="/locations" className="banner-button">
            Unveil Locations
          </Link>
        </div>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
};

export default Banner;
