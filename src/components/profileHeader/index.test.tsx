import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileHeader from './index'
import { Provider } from 'react-redux';
import { store } from '../../redux';

const setup = () => {
    render(
        <Provider store={store}>
            <ProfileHeader 
                loginStatus={true}
                imageUrl={"test-url"}
                displayName={"test-name"}
            />
        </Provider>
    );
}

beforeEach(() => {
    setup();
})

test('Render Main Page and check for form existance', () => {
    const name = screen.getByTestId("test-name");

    expect(name).toBeInTheDocument();
})
