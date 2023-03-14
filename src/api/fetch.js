import axios from 'axios';
//import ErrorMessage from '../components/errors/ErrorMessage';

const API_KEY = `AIzaSyCTA2H0QujmwEucZg81o_5EovQ77oCKZ2A`
const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=10&key=${API_KEY}`

//to GET all the videos listing index being searched for.

export async function getQueryVideos(searchTerm) {
    try{
        const response = await axios(`BASE_URL`)
        console.log(response)
        setVideos(response.data);
    } catch(error){
        console.log(error)
    }
    
}
//! SHOULD WE ADD A PATH TO THIS 


//To GET one video after selecting from the listing.
export async function getOneVideo(id) {
    try{
        const response = await axios (`${BASE_URL}/video/${id}`)
        console.log = (response)
        setVideo(response.data);
    } catch(error){
        console.log(error)
    }
}
