import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQueryVideos } from "../../api/fetch";
import ModalWindow from "../errors/ModalWindow";
// import ErrorMessage from "../errors/ErrorMessage";
// import { useParams } from "react-router-dom";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [loadingError, setLoadingError] = useState(false);
  //   const [videos, setVideos] = useState([]);
  //   const [showVideos, setShowVideos] = useState(false);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     async function fetchData() {
  //       const data = await getQueryVideos(query);
  //       setVideos(data.items);
  //     }
  //     fetchData();
  //     console.log(fetchData);
  //   }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
    // setting the query to the value of the input -- blueprint --
    // setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getQueryVideos(query).then((res) => {
        // we are creating an obj with the key value pair of state not "useState" -- this is navigate specific
        console.log(res)
        navigate("/videos", { state : {res} })
    }).catch((error) => {
      <ModalWindow />
      console.log(error);
    });
    
    setQuery("")
    // const data = await getQueryVideos(query);
    // setVideos(data.items);
    // setShowVideos(true);
  };
  

  //   const handleClear = () => {
  //     setQuery("");
  //     setShowVideos(false);
  //   };

  return (
    <>
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="VideoSearch"></label>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(event) => handleChange(event)}
        />
        <input type="submit" id="Query" name="Search" value="SEARCH" />
        <button className="clear">CLEAR</button>
      </form>
    </div>
   </>
  );
};

export default SearchForm;
