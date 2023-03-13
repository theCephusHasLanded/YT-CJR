//const URL = process.env.REACT_APP_API_BASE_URL;

//to GET all the videos listing index being searched for.

export function getVideos() {
  return fetch(`${URL}/videos`).then((response) => response.json());
}


//To GET one video after selecting from the listing.
export function getOneVideo(id) {
  return fetch(`${URL}/video/${id}`).then((response) => response.json());
}
