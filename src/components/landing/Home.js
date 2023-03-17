import React, { useState } from 'react';
import { getQueryVideos } from '../../api/fetch';
import { getOneVideo } from '../../api/fetch';


const Home = () => {
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        getQueryVideos(query);
    };

    const handleChange = (event) => {
        setQuery(event.target.value)
    }


return (
    <div>
        <h1>WE ARE HOME</h1>
        <h2>Search Youtube Below</h2>
        <br />
        <form onSubmit={handleSubmit}>
            <label htmlFor="VideoSearch"></label>
            <input type="text" placeholder="Search" value={query} 
            onChange={handleChange} />
            <input type="submit" id="Query" name="Search" value="SEARCH" />
        </form>
    </div>
)
};

export default Home;

