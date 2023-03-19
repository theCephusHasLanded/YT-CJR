import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ModalWindow from "../errors/ModalWindow";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const VideoCards = () => {
  const [loadingError, setLoadingError] = useState(false);
  const location = useLocation();
  const videoList = location.state.res;
  console.log(videoList);

  return (
    <div>
      <div>
        <br></br>
        <h4 className="choice">Choose YouTube Destiny Below:</h4>
        <hr></hr>
      </div>

      {loadingError ? (
        <ModalWindow />
      ) : (
        <div className="video-cards-container">
          {videoList.items.map((video) => (
            <div className="card" key={video.id.videoId}>
              <Card>
                <Card.Img
                  variant="top"
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <Card.Body>
                  <Card.Title>{video.snippet.title}</Card.Title>
                  <Card.Text>{video.snippet.description}</Card.Text>
                  <Link to={`/videos/${video.id.videoId}`}>
                    <Button variant="secondary">Watch Now</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoCards;
