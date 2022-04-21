import React from 'react';
import { render, screen } from '@testing-library/react';
import PlayListsComp from './index'
import { Provider } from 'react-redux';
import { store } from '../../redux';

const setup = () => {
    render(
        <Provider store={store}>
            <PlayListsComp 
                url={"test url"}
                name={"test name"}
                description={"test description"}
                playListID={"test id"}/>
        </Provider>
    );
}

beforeEach(() => {
    setup();
})

test('Render Main Page and check for form existance', () => {
    const name = screen.getByTestId("test-url");
    const description = screen.getByTestId("test-name");
    const url = screen.getByTestId("test-description");
    const songWrapper = screen.getByTestId("song-wrapper");

    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(url).toBeInTheDocument();
    expect(songWrapper).toBeInTheDocument();
})
