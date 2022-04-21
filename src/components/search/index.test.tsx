import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './index'
import userEvent from '@testing-library/user-event';

const DummyFunction = () => {
    console.log("Good")
}

const setup = () => {
    render(
        <Search setSearchKeyword={DummyFunction} CallSpotifySearch={DummyFunction}/>
    );
}

beforeEach(() => {
    setup();
})

test('Render Main Page and check for form existance', () => {
    const searchInput = screen.getByTestId("search-input");
    const searchButton = screen.getByTestId("search-button");

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
})

test('Check if value is empty', () => {
    const searchInput = screen.getByTestId("search-input");

    expect(searchInput).toHaveValue("");
})

test('Check if the input value is correct', () => {
    const searchInput = screen.getByTestId("search-input");

    userEvent.type(searchInput, "Search Keyword test");

    expect(searchInput).toHaveValue("Search Keyword test");
})