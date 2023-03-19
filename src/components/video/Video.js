import React from 'react'
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { getOneVideo } from '../../api/fetch';
//! need to import params.


//const Video = () => {


function Video (props) {
  const {title, description, video} = props.winner


  return (
    <div>
      <div className="video">
        <div className="video-box">
          <img alt={`video titled {title}`} src={video} />
            {/* Display the one video */}
        </div>
        <div className='video-description'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
     
    </div>
  )
}

export default Video

/*
OR 
<div className="card">
<ul>
  <li key={video.id.videoId}>
    <Link to={`/videos/${video.id.videoId}`}>
      {/* consider link as an anchor tag -- there are attributes  
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <h3>{video.snippet.title}</h3>
      <p>{video.snippet.description}</p>
    </Link>
  </li>
</ul>
</div>
*/
