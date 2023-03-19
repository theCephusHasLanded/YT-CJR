import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
// es-lint-disable-next-line
import ErrorMessage from "../errors/ErrorMessage";
import ModalWindow from "../errors/ModalWindow";

const VideoCards = () => {
  const [loadingError, setLoadingError] = useState(false);
  // we need to call the location and save the information we are getting from useNavigate
  const location = useLocation();
  const videoList = location.state.res;
  console.log(videoList);

  return (
    <div>
      <div>
        <h1>WELCOME TO THE YOUTUBE PARTY</h1>
      </div>
      setLoadingError=false
      {loadingError ? (
        <ModalWindow />
      ) : (
        <div className="video-cards-container">
          {videoList.items.map((video) => (
            <div className="card">
              <ul>
                <li key={video.id.videoId}>
                  <Link to={`/videos/${video.id.videoId}`}>
                    {/* consider link as an anchor tag -- there are attributes  */}
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
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoCards;
