import React from "react";
import { useState, useEffect } from "react";
import { getQueryVideos } from "../../api/fetch";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [showVideos, setShowVideos] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const data = await getQueryVideos(query);
      setVideos(data.items);
    }
    fetchData();
    console.log(fetchData)
  }, [query]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await getQueryVideos(query);
    setVideos(data.items);
    setShowVideos(true);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="VideoSearch"></label>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleChange}
        />
        <input type="submit" id="Query" name="Search" value="SEARCH" />
      </form>
      {showVideos && (
      <div>
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default SearchForm;
