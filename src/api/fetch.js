
const API_KEY = `AIzaSyCTA2H0QujmwEucZg81o_5EovQ77oCKZ2A`
const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=10&key=${API_KEY}`

//to GET all the videos listing index being searched for.
export function getQueryVideos(searchTerm) {
    return fetch(`BASE_URL`).then((response) => response.json())
}
//! SHOULD WE ADD A PATH TO THIS 


//To GET one video after selecting from the listing.
export function getOneVideo(id) {
  return fetch(`${BASE_URL}/video/${id}`).then((response) => response.json());
}
