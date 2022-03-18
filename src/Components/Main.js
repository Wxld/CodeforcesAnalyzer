import { useState } from 'react';
import Profile from "./Profile";
import { motion } from "framer-motion";
import RatingTable from "./Tables/RatingTable";
import Question from "./Question";
import SearchBar from './Main/SearchBar';

const Main = ({handle, setHandle}) => {
    const [searchResults, setSearchResults] = useState(false);
    const [profile, setProfile] = useState();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");

    const searchHandler = () => {
        setName(handle);
        setSearchResults(false)
        setLoading(true);
        fetch(`https://codeforces.com/api/user.info?handles=${handle}`, {
          headers : { 
            // 'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then(res => {
          return res.json();
        })
        .then(data => {
          setProfile(data.result[0]);
          setSearchResults(true);
          setLoading(false);
        })
      }

    return (
        <div className='w-full flex flex-col justify-center items-center'>

            {/* New Search bar after the first search has been done. */}
            <SearchBar handle={handle} setHandle={setHandle} searchHandler={searchHandler} />

            {/* Loading screen */}
            {loading && 
            <div className='my-4'>
                <p>Calling Mike to send data...</p>
            </div>}

            {/* Loading becomes false and search becomes true then this section is loaded */}

            {/* Loads faster than rest of the pages due to data.result being already loaded */}
            {searchResults && <Profile profile={profile} />}


            {searchResults && <Question name={name} />}
            {searchResults && <RatingTable name={name} />} 
        </div>
    );
}
 
export default Main;