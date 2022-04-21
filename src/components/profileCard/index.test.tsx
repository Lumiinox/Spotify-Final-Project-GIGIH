import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileCard from './index'
import { Provider } from 'react-redux';
import { store } from '../../redux';

const setup = () => {
    render(
        <Provider store={store}>
            <ProfileCard 
                loginStatus={true}
                imageUrl={"test-url"}
                displayName={"test-name"}
                followers={"test-followers"}/>
        </Provider>
    );
}

beforeEach(() => {
    setup();
})

test('Render Main Page and check for form existance', () => {
    const name = screen.getByTestId("test-name");
    const description = screen.getByTestId("test-followers");

    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
})
