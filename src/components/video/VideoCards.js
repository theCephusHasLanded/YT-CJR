import React from 'react'
import Home from '../landing/Home';
import { getOneVideo } from '../../api/fetch';

const VideoCards = (handleSubmit, videoData) => {
  return (
    <div className="card">
      
    {videoData.map((video, i) => {
      return (
        <div key={video.id} className="videos">
            <li className="cards" key={video.id}>
              <h4>
                <strong>{video.name}</strong>
              </h4>
              <img className="img" src={video.img} alt="videoimage" />
              <br></br>
            
              <button onClick={() => handleSubmit(video, i)}>Watch Me</button>
            </li>
          </div>
      );
    })}
</div>

  )
}

export default VideoCards
