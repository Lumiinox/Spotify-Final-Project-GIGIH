import React, { useState } from 'react';

interface SearchProps{
    searchKeyword: string;
    setSearchKeyword: React.Dispatch<React.SetStateAction<string>>
    CallSpotifySearch: ()=> void;
}

const Search: React.FC<SearchProps> = ({searchKeyword, setSearchKeyword, CallSpotifySearch}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchKeyword(e.target.value)
    }

    const handleClick = () => {
        console.log(searchKeyword);
        CallSpotifySearch();
    }

    return (
        <>
            <input 
                type = "text" 
                placeholder = "Search.." 
                onChange={handleChange}
            />
            <br/>
            <br/>
            <button
                onClick={handleClick}
            >Search</button>
        </>
    )
}

export default Search;