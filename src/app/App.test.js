import { render, screen } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  test('Snapshot test', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test('renders Sample React Skeleton `header`', () => {
    render(<App />);
    const pageHeader = screen.getByText(/Sample React Skeleton/i);
    expect(pageHeader).toBeInTheDocument();
  });
});
