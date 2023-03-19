import React from "react";
import YouTube from "react-youtube";
import { useParams } from 'react-router-dom'
//class based components work on rendering where the return is placed. on function based it equates on the return line.

const Video = () => {
  let { id } = useParams();

  const opts = {
    height: "900",
    width: "1000",
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    //actual render below -- however the videoId will become our params
    <YouTube videoId={id} opts={opts} onReady={onReady} />
  );
};

export default Video;


//============PREVIOUS LOGIC=====================
//   <div className="card">
//   <ul>
//     <li key={video.id.videoId}>
//       <Link to={`/videos/${video.id.videoId}`}>
//         <img
//           src={video.snippet.thumbnails.medium.url}
//           alt={video.snippet.title}
//         />
//         <h3>{video.snippet.title}</h3>
//         <p>{video.snippet.description}</p>
//       </Link>
//     </li>
//   </ul>
// </div>

// const {title, description, video} = props.winner

//   return (
//     <div>
//       <div className="video">
//         <div className="video-box">
//           <img alt={`video titled {title}`} src={video} />
//             {/* Display the one video */}
//         </div>
//         <div className='video-description'>
//           <h2>{title}</h2>
//           <p>{description}</p>
//         </div>
//       </div>

//     </div>
//   )

/*
OR 

*/
