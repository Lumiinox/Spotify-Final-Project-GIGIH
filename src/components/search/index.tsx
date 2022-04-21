
interface SearchProps{
    setSearchKeyword: React.Dispatch<React.SetStateAction<string>>
    CallSpotifySearch: ()=> void;
}

const Search: React.FC<SearchProps> = ({setSearchKeyword, CallSpotifySearch}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchKeyword(e.target.value)
    }

    const handleClick = () => {
        CallSpotifySearch();
    }

    return (
        <>
            <input 
                type = "text" 
                placeholder = "Search.." 
                data-testid = "search-input"
                onChange={handleChange}
            />
            <br/>
            <br/>
            <button
                data-testid = "search-button"
                onClick={handleClick}
            >Search</button>
        </>
    )
}

export default Search;