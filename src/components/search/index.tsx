import CustomButton from '../customButton';
import {func} from 'prop-types';
import React from 'react';

interface SearchProps{
    onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const Search = (props:SearchProps) => {
    return (
        <>
            <form onSubmit={props.onSubmit}>
                <input type = "text" placeholder = "Search.." onChange={props.setSearchKeyword}></input>
                <br/>
                <br/>
                <CustomButton type="submit">Search</CustomButton>
            </form>
        </>
    )
}

Search.propTypes = {
    onSubmit: func,
    setSearchKeword: func
}
export default Search;