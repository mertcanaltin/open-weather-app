import React from 'react';
import {
  act,
  render,
  screen,
  createMemoryHistory,
  waitForLoadingToFinish,
  userEvent,
  Router,
} from '../test/app-test-utils';
import App from '../components/app';
import {
  mockForecastData,
  mockSearchForecastData,
  mockSearchWeatherData,
  mockWeatherData,
} from '../test/data/weather-data';

const history = createMemoryHistory();

const renderApp = () => {
  render(
    <Router history={history}>
      <App />
    </Router>,
  );
};

describe('App', () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.clearAllTimers());

  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify(mockWeatherData));
    fetch.mockResponseOnce(JSON.stringify(mockForecastData));
  });

  test('fetches and renders the current weather and a five day forecast', async () => {
    renderApp();

    await waitForLoadingToFinish();

    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/search for a location/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/eldoret, ke/i)).toBeInTheDocument();
    expect(screen.getByText(/broken clouds/i)).toBeInTheDocument();
    expect(screen.getByText(/feels like 18°/i)).toBeInTheDocument();
    expect(screen.getByText(/30m\/s winds/i)).toBeInTheDocument();
    expect(screen.getByText(/49% humidity/i)).toBeInTheDocument();
    expect(
      screen.getByText(/'Netflix and chill' weather. It's pleasant outside/i),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toEqual(5);
    const forecast = screen.getAllByRole('listitem').map((listItem) => {
      return listItem.textContent;
    });
    expect(forecast).toMatchInlineSnapshot(`
      Array [
        "Saturday22° / 22°",
        "Sunday22° / 22°",
        "Monday22° / 22°",
        "Tuesday20° / 20°",
        "Wednesday21° / 21°",
      ]
    `);
   
    expect(screen.getByText(/mertcanaltin/i)).toBeInTheDocument();
    expect(screen.getByText(/©2022 - now/i)).toBeInTheDocument();
  });

  test('navigates through the app when navbar links are clicked', async () => {
    renderApp();

    await waitForLoadingToFinish();


    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/search for a location/i),
    ).toBeInTheDocument();
  });

  test('searching for a valid location returns weather and forecast data for that location', async () => {
    renderApp();

    await waitForLoadingToFinish();

    const searchInput = screen.getByRole('search');
    userEvent.type(searchInput, 'New York');

    fetch.mockResponseOnce(JSON.stringify(mockSearchWeatherData));
    fetch.mockResponseOnce(JSON.stringify(mockSearchForecastData));

    act(() => jest.advanceTimersByTime(2000));

    expect(screen.getAllByRole('list').length).toEqual(5);
  });

  test('toggles units between celsius and fahrenheit', async () => {
    renderApp();

    await waitForLoadingToFinish();

    expect(screen.getByText(/feels like 18°/i)).toBeInTheDocument();

    let openToggleUnitsMenuButton = screen.getByRole('button', {
      name: /open toggle units menu/i,
    });
    userEvent.click(openToggleUnitsMenuButton);

    let toggleUnitsMenu = await screen.findByRole('menuitem', {
      name: /change units/i,
    });

    expect(toggleUnitsMenu).toHaveTextContent(/Imperial \(F°, mph\)/);

    userEvent.click(toggleUnitsMenu);
    openToggleUnitsMenuButton = await screen.findByRole('button', {
      name: /open toggle units menu/i,
    });

    userEvent.click(openToggleUnitsMenuButton);
    toggleUnitsMenu = await screen.findByRole('menuitem', {
      name: /change units/i,
    });

    expect(toggleUnitsMenu).toHaveTextContent(/Metric \(C°, m\/s\)/);
  });
});
