import React from 'react';
import { useNavigate } from 'react-router-dom';
import './genre.css';
const Genre = () => {
  const navigate = useNavigate();
  const view = (searchValue) => {
    navigate(`/view-search-result/${searchValue}`)
  }

  const genres = [
    {
      title: 'action',
      image: 'https://pbblogassets.s3.amazonaws.com/uploads/2019/07/12130642/John-Wick.jpg',
    },
    {
      title: 'comedy',
      image: 'https://m.media-amazon.com/images/M/MV5BNGUyNTk0YmYtNjU2YS00NWQ1LTllZGQtYjk5YjU4YzYxZjY3XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg',
    },
    {
      title: 'drama',
      image: 'https://freedramamoviesblog.files.wordpress.com/2014/11/free-drama-movies-3.png',
    },
    {
      title: 'horror',
      image: 'https://m.media-amazon.com/images/I/710NBpYrSjL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      title: 'romance',
      image: 'https://genregeek.weebly.com/uploads/2/8/0/3/28037185/7430436_orig.jpg',
    },
    {
      title: 'science_fiction',
      image: 'https://i0.wp.com/www.pandorapost.com/wp-content/uploads/2021/04/science-fiction-genres-and-subgenres.jpg?resize=620%2C358&ssl=1',
    },
    {
      title: 'thriller',
      image: 'https://resizing.flixster.com/BrQgVSdrjZgqlU7jFbLVdBWQ0Wk=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjYyNjE4LndlYnA=',
    },
    {
      title: 'animation',
      image: 'https://jw-webmagazine.com/wp-content/uploads/2020/04/chihiro042-1.jpg',
    },
  ];

  return (
    <div className="flex-fill">
      <div className="sectionTitleG">
        <h3 id="headg">  Genres</h3>
      </div>
      <br />
      <div className="container mt-4">
        <div className="row">
          {genres.map((genre, index) => (
            <div className="col-md-3" key={index}>
              <div className="card gcard">
                <img
                  src={genre.image}
                  onClick={() => view(genre.title)}
                  className="card-img-top"
                  alt={genre.title}
                  style={{ height: '20rem', objectFit: 'cover' }}
                />
                <div className="card-body" style={{ backgroundColor: 'black' }}>
                  <h5 className="card-title" style={{ color: 'white' }}>{genre.title}</h5>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genre;