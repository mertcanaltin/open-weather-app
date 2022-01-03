import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, userEvent } from '../test/app-test-utils';
import Navbar from '../components/navbar';

describe('NavBar', () => {
  const renderNavbar = () =>
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );


  test('clicking the button toggles displaying the main menu', async () => {
    renderNavbar();

    const toggleButton = screen.getByRole('button', {
      name: /open main menu/i,
    });

    userEvent.click(toggleButton);
    expect(
      screen.queryByRole('button', { name: /open main menu/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /close main menu/i }),
    ).toBeInTheDocument();

    userEvent.click(toggleButton);
    expect(
      screen.queryByRole('button', { name: /close main menu/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /open main menu/i }),
    ).toBeInTheDocument();
  });
});
