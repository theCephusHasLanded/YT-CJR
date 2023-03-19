import axios from "axios";
const API_KEY = "AIzaSyBjuB_pzF-3u-eA98mDhotDC40GiXGE87E";

//To GET all the videos listing index being searched for.

export async function getQueryVideos(query) {
  const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=10&key=${API_KEY}`;
  try {
    const response = await axios(BASE_URL);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//To GET one video after selecting from the listing.
export async function getOneVideo(id) {
  const BASE_URL = `https://youtube.googleapis.com/youtube/v3/videos?id=${id}&part=snippet&key=${API_KEY}`;
  try {
    const response = await axios(BASE_URL);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
