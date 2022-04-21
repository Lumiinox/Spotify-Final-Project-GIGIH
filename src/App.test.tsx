import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './pages/home';
import { Provider } from 'react-redux';
import { store } from './redux';
import {BrowserRouter} from 'react-router-dom';

test('render home page', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
          <Home />
      </Provider>
    </BrowserRouter>
    );
  const linkElement = screen.getByText(/Create Playlist/i);
  expect(linkElement).toBeInTheDocument();
});

