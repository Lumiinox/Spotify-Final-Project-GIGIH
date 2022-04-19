import React, { useState } from 'react';

interface SearchProps{
    setSearchKeyword: React.Dispatch<React.SetStateAction<string>>
}

const Search: React.FC<SearchProps> = ({setSearchKeyword}) => {
    const [input, setInput] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput(e.target.value)
    }

    const handleClick = (): void => {
        if (!input){
            return;
        }
        setSearchKeyword(input);
        setInput("");
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
            ></button>
        </>
    )
}

export default Search;