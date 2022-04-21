import React from 'react';
import { render, screen } from '@testing-library/react';
import {Songs} from './index'


const DummyFunction = () => {
    console.log("Good")
}

const setup = () => {
    render(
        <Songs
            url={"test-url"}
            name={"test-name"}
            artistName={"test-artistName"}
            albumName={"test-albumName"}
            selectSong={DummyFunction}
        />
    );
}

beforeEach(() => {
    setup();
})

test('Render Composistion', () => {
    const name = screen.getByTestId("name-test");
    const artistName = screen.getByTestId("artistName-test");
    const albumName = screen.getByTestId("albumName-test");

    expect(name).toBeInTheDocument();
    expect(artistName).toBeInTheDocument();
    expect(albumName).toBeInTheDocument();
})
