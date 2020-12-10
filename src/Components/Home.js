import React from 'react';

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-8 mb-5">
        <h1>
          <span className="border-bottom border-secondary">About</span>
        </h1>
        <strong className="text-danger">Rick and Morty</strong> is an American
        adult animated science fiction sitcom created by Justin Roiland and Dan
        Harmon for Cartoon Network's late-night programming block Adult Swim.
        The series follows the misadventures of cynical mad scientist
        <strong className="text-warning"> Rick Sanchez</strong> and his
        good-hearted but fretful grandson
        <strong className="text-warning"> Morty Smith</strong>, who split their
        time between domestic life and interdimensional adventures. Roiland
        voices the eponymous characters, with Chris Parnell, Spencer Grammer and
        Sarah Chalke voicing the rest of Rick and Morty's family. The series
        originated from an animated short parody film of Back to the Future,
        created by Roiland for Channel 101, a short film festival co-founded by
        Harmon. The series has been acclaimed by critics for its originality,
        creativity and humor. <br /> <br />
        <span className="social-links border-top border-danger py-4 px-2">
          <a
            href="https://facebook.com/RickandMorty"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook fa-lg social" aria-hidden="true"></i>
          </a>
          <a
            href="https://twitter.com/rickandmorty"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-twitter fa-lg social" aria-hidden="true"></i>
          </a>
          <a
            href="https://instagram.com/rickandmorty"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram fa-lg social" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.adultswim.com/misc/rick-and-morty-products/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-shopping-cart social" aria-hidden="true"></i>
          </a>
        </span>
      </div>
      <div className="col-md-4">
        <img
          src="https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg"
          className="img-fluid rounded"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
