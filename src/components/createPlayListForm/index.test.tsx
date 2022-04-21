import React from 'react';
import { render, screen } from '@testing-library/react';
import CreatePlayListForm from './index'
import userEvent from '@testing-library/user-event';

const DummyFunction = () => {
    console.log("Good")
}

const playListInfo = {
    name:"",
    description:"",
}

const setup = () => {
    render(
        <CreatePlayListForm CreateAndAddToPlaylist={DummyFunction} setPlayListInfo={DummyFunction} playListInfo = {playListInfo}/>
    );
}

beforeEach(() => {
    setup();
})

test('Render Main Page and check for form existance', () => {
    const nameInput = screen.getByTestId("playlist-name");
    const descriptionInput = screen.getByTestId("playlist-description");
    const submitButton = screen.getByTestId("submit-button");

    expect(nameInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
})

test('Check if value is empty', () => {
    const nameInput = screen.getByTestId("playlist-name");
    const descriptionInput = screen.getByTestId("playlist-description");

    expect(nameInput).toHaveValue("");
    expect(descriptionInput).toHaveValue("");
})

test('Check if the input value is correct', () => {
    const nameInput = screen.getByTestId("playlist-name");
    const descriptionInput = screen.getByTestId("playlist-description");

    userEvent.type(nameInput, "NameTest");
    userEvent.type(descriptionInput, "Description Test");

    expect(nameInput).toHaveValue("NameTest");
    expect(descriptionInput).toHaveValue("Description Test");
})